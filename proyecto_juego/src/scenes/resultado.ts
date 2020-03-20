import * as Phaser from 'phaser';
import * as server from '../server';


export class Resultado extends Phaser.Scene {
  jugadorLocalNick: String;

  ganador: String;

  continuar: Phaser.GameObjects.Text;

  constructor() {
    super('Resultado');
  }

  public init(data: any) {
    this.jugadorLocalNick = data.jugadorLocalNick;
    this.ganador = data.ganador;
  }

  public create() {
    const text = this.add.text(this.game.canvas.width / 2, this.game.canvas.height / 2, this.jugadorLocalNick === this.ganador ? 'Has Ganado!!!!' : 'Sos un perdedor');
    this.continuar = this.add.text(this.game.canvas.width / 2, this.game.canvas.height / 2 + 50, 'Continuar');
    this.continuar.setInteractive();
    text.setColor('red');
    this.continuar.setColor('blue');
    this.input.on('gameobjectdown', this.clickHandler);
  }

  clickHandler = async () => {
    try {
      server.removerListeners();
      server.desconectarWs();
      await server.finalizarPartida();
    } finally {
      this.scene.start('Main');
    }
  }
}
