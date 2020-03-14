import * as Phaser from 'phaser';

export class Espera extends Phaser.Scene {
  conectando: Phaser.GameObjects.Text;

  constructor() {
    super('Espera');
  }

  public create() {
    const { width, height } = this.sys.game.canvas;

    this.add.image(0, 0, 'main')
      .setDisplaySize(width, height)
      .setOrigin(0, 0);

    this.conectando = new Phaser.GameObjects.Text(this, 0, 0, 'Conectando con jugador...',  { fontSize: '25px', color:'#FFF' });


    this.conectando.setPosition(
      (width - this.conectando.width) / 2,
      (height - this.conectando.height) / 2,
    );
   

    this.conectando.setInteractive();

    this.add.existing(this.conectando);

  }
}
