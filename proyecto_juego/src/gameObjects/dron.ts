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
    // const f = new Phaser.Physics.Matter.Factory(scene.matter.world);
    // f.gameObject(this, {}, true);
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

  public preUpdate(timeElapsed: number, timeLastUpdate: number) {
    if (!this.initialRotationSet) this.setRotation(this.rotation);
    if (this.x !== this.destino.x && this.y !== this.destino.y) {
      const vel = this.arma.velocidad * (timeLastUpdate / 1000);
      const velX = vel * Math.cos(this.rotation);
      const velY = vel * Math.sin(this.rotation);
      this.x = (this.x + velX > this.destino.x) ? this.destino.x : this.x + velX;
      this.y = (this.y + velY > this.destino.y) ? this.destino.y : this.x + velY;
    }
  }
}
