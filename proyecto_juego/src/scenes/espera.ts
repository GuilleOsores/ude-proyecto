import * as Phaser from 'phaser';
import * as server  from '../server';

export class Espera extends Phaser.Scene {
  conectando: Phaser.GameObjects.Text;

  
  sceneConfig: any;
  constructor() {
    super('Espera');
  }

  public init(data: any) {
    this.sceneConfig = data;
  }

  public async create() {
    const { width, height } = this.sys.game.canvas;

    this.add.image(0, 0, 'main')
      .setDisplaySize(width, height)
      .setOrigin(0, 0);

    this.conectando = new Phaser.GameObjects.Text(this, 0, 0, 'Conectando con jugador...',  { fontSize: '35px', color:'#FFF' });


    this.conectando.setPosition(
      (width - this.conectando.width) / 2,
      (height - this.conectando.height) / 2,
    );
   

    this.add.existing(this.conectando);
    
    server.addhandler(server.EVENTOS.INICIAR_PARTIDA, this.iniciarPartidaHandler);

    await server.startWebSocket();
  }

  iniciarPartidaHandler=()=>{
    console.log('iniciarPartidaHandler');
    this.scene.start('Game', this.sceneConfig);
  }
}
