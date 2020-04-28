import * as Phaser from 'phaser';

export class Main extends Phaser.Scene {
  btnNuevaPartida: Phaser.GameObjects.Text;

  btnCargarPartida: Phaser.GameObjects.Text;

  btnUnirsePartida: Phaser.GameObjects.Text;

  constructor() {
    super('Main');
  }

  public create() {
    const { width, height } = this.sys.game.canvas;

    this.add.image(0, 0, 'main')
      .setDisplaySize(width, height)
      .setOrigin(0, 0);

    this.btnNuevaPartida = new Phaser.GameObjects.Text(this, 0, 0, 'Nueva Partida', {});
    this.btnNuevaPartida = new Phaser.GameObjects.Text(this, 0, 0, 'Cargar Partida', {});
    this.btnUnirsePartida = new Phaser.GameObjects.Text(this, 0, 0, 'Unirse Partida', {});

    this.btnNuevaPartida.setPosition(
      (width - this.btnNuevaPartida.width) / 2,
      (height - this.btnNuevaPartida.height) / 2,
    );
    this.btnCargarPartida.setPosition(
      (width - this.btnCargarPartida.width) / 2,
      (height - this.btnCargarPartida.height) / 2 + 50,
    );
    this.btnUnirsePartida.setPosition(
      (width - this.btnUnirsePartida.width) / 2,
      (height - this.btnUnirsePartida.height) / 2 + 100,
    );

    this.btnNuevaPartida.setInteractive();
    this.btnCargarPartida.setInteractive();
    this.btnUnirsePartida.setInteractive();

    this.add.existing(this.btnNuevaPartida);
    this.add.existing(this.btnCargarPartida);
    this.add.existing(this.btnUnirsePartida);

    this.input.on('gameobjectdown', this.clickHandler);
  }

  clickHandler = (pointer, gameObject: Phaser.GameObjects.GameObject) => {
    if (gameObject === this.btnNuevaPartida) {
      this.scene.start('Nick', { crearPartida: true });
    } else if (gameObject === this.btnCargarPartida) {
      this.scene.start('Nick', { cargarPartida: true });
    } else {
      this.scene.start('Nick', { });
    }
  }
}
