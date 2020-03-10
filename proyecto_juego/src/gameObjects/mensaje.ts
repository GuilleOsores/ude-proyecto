import * as Phaser from 'phaser';

export class Mensaje extends Phaser.GameObjects.Container {
  constructor(scene: Phaser.Scene, x: number, y: number, displayTime: number, callback: Function) {
    super(scene, x, y);

    const manini = new Phaser.GameObjects.Sprite(scene, 0, 0, 'manini')
      .setScale(0.1, 0.1)
      .setOrigin(0, 0);

    const texto = new Phaser.GameObjects.Text(scene, manini.displayWidth + 10, manini.displayHeight / 2, 'Se acabó el recreo', { color: '#000000' })
      .setOrigin(0, 0.5);

    const rectangulo = new Phaser.GameObjects.Rectangle(
      scene,
      0,
      0,
      manini.displayWidth + 10 + texto.width + 10,
      manini.displayHeight,
      0xFFFFFF,
    ).setOrigin(0, 0);

    this.add(rectangulo);
    this.add(texto);
    this.add(manini);
    this.setDepth(200).setScrollFactor(0).setPosition(x - rectangulo.width / 2, y);
    scene.add.existing(this);

    setTimeout(() => { this.destroy(); callback(); }, displayTime);
  }
}
