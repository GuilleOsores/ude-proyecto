import axios from 'axios';
import * as Phaser from 'phaser';
import * as server from '../server';
import * as config from '../config';

export class Espera extends Phaser.Scene {
  conectando: Phaser.GameObjects.Text;

  nick: string;

  sceneConfig: any;

  constructor() {
    super('Espera');
  }

  public init(data: any) {
    this.nick = data.nick;
  }

  public async create() {
    const { width, height } = this.sys.game.canvas;

    this.add.image(0, 0, 'main')
      .setDisplaySize(width, height)
      .setOrigin(0, 0);

    this.conectando = new Phaser.GameObjects.Text(this, 0, 0, 'Conectando con jugador...', { fontSize: '35px', color: '#FFF' });


    this.conectando.setPosition(
      (width - this.conectando.width) / 2,
      (height - this.conectando.height) / 2,
    );


    this.add.existing(this.conectando);

    server.addhandler(server.EVENTOS.INICIAR_PARTIDA, this.iniciarPartidaHandler);

    await server.startWebSocket();
  }

  iniciarPartidaHandler = async () => {
    try {
      const getpartida = await axios(config.endpoint.getPartida());
      this.scene.start('Game', { ...getpartida.data, nick: this.nick });
    } catch (error) {
      alert(error.response.data.mensaje);
    }
  }
}
