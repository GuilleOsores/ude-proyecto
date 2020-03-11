import * as Phaser from 'phaser';


export class Resultado extends Phaser.Scene {
  jugadorLocalNick: String;

  ganador: String;

  constructor() {
    super('Resultado');
  }

  public init(data: any) {
    this.jugadorLocalNick = data.jugadorLocalNick;
    this.ganador = data.ganador;
  }

  public create() {
    const text = this.add.text(this.game.canvas.width / 2, this.game.canvas.height / 2, this.jugadorLocalNick === this.ganador ? 'Has Ganado!!!!' : 'Sos un perdedor');
    text.setColor('red');
  }
}
