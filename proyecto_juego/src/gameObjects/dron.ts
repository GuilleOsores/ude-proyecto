import * as Phaser from 'phaser';

export class Dron extends Phaser.GameObjects.Sprite {
  initialRotationSet = false;

  arma: Arma;

  destino: {x: number, y: number};

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    toX: number,
    toY: number,
    arma: Arma,
    rotacion: number,
  ) {
    super(scene, x, y, arma.sprite);
    const f = new Phaser.Physics.Matter.Factory(scene.matter.world);
    f.gameObject(this, {}, true);
    scene.add.existing(this);

    this.arma = arma;
    this.destino = { x: toX, y: toY };
    // this.getMatterSprite().setBody('circle');
    this.setRotation(rotacion);
    this.setScale(0.3);

    this.scene.tweens.add({
      targets: this,
      props: {
        x: toX,
        y: toY,
      },
      duration: 3500,
    });
  }
}
