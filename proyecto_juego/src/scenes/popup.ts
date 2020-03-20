import * as Phaser from 'phaser';

export class PopUp extends Phaser.Scene {
  guardar: Phaser.GameObjects.Text;

  continuar: Phaser.GameObjects.Text;

  salir: Phaser.GameObjects.Text;

  guardarHandler: Function;

  continuarHandler: Function;

  salirHandler: Function;

  constructor() {
    super('PopUp');
  }

  public init(data: any) {
    this.guardarHandler = data.guardarHandler;
    this.continuarHandler = data.continuarHandler;
    this.salirHandler = data.salirHandler;
  }

  create() {
    const { width, height } = this.game.canvas;
    const container = new Phaser.GameObjects.Container(this, width / 2, height / 2);
    const background = new Phaser.GameObjects.Rectangle(this, 0, 0, 200, 200, 0x006000)
      .setOrigin(0.5, 1);
    this.guardar = new Phaser.GameObjects.Text(this, 0, -125, 'Guardar Partida', {}).setOrigin(0.5, 1);
    this.continuar = new Phaser.GameObjects.Text(this, 0, -75, 'Continuar', {}).setOrigin(0.5, 0.5);
    this.salir = new Phaser.GameObjects.Text(this, 0, -25, 'Salir', {}).setOrigin(0.5, 0.5);

    this.add.existing(container);
    container.add(background);
    container.add(this.guardar);
    container.add(this.continuar);
    container.add(this.salir);

    this.guardar.setInteractive();
    this.continuar.setInteractive();
    this.salir.setInteractive();

    this.input.on(
      Phaser.Input.Events.GAMEOBJECT_DOWN,
      (pointer, gameObject: Phaser.GameObjects.GameObject) => {
        if (gameObject === this.guardar) {
          if (this.guardarHandler) {
            this.guardarHandler();
            this.continuarHandler();
          }
        } else if (gameObject === this.continuar) {
          if (this.continuarHandler) this.continuarHandler();
        } else if (gameObject === this.salir) {
          if (this.salirHandler) this.salirHandler();
        }
      },
    );
  }
}
