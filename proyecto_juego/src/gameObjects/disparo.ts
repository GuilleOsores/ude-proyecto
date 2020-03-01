import * as Phaser from 'phaser';

export class Disparo extends Phaser.GameObjects.Sprite {
  initialRotationSet = false;

  arma: Arma;

  initialPositionX: number;

  initialPositionY: number;

  constructor(
    scene: Phaser.Scene, x: number, y: number, arma: Arma, rotacion: number,
  ) {
    super(scene, x, y, arma.sprite);
    const f = new Phaser.Physics.Matter.Factory(scene.matter.world);
    f.gameObject(this, {}, true);
    scene.add.existing(this);

    this.arma = arma;
    this.initialPositionX = x;
    this.initialPositionY = y;
    this.getMatterSprite().setBody('circle');
    this.setRotation(rotacion);
    this.setScale(this.arma.escala);

    this.scene.matter.world.on('collisionstart', this.collisionHandler);

    this.on('destroy', () => {
      this.scene.matter.world.removeListener('collisionstart', this.collisionHandler);
      this.removeAllListeners();
    });
  }

  getMatterSprite() {
    return (<Phaser.Physics.Matter.Sprite> (<any> this));
  }

  public preUpdate(_timeElapsed: number, timeLastUpdate: number) {
    if (Phaser.Math.Distance.Between(this.x, this.y, this.initialPositionX, this.initialPositionY) >= this.arma.distancia) {
      this.destroy();
      return;
    }

    this.getMatterSprite().thrust(this.arma.velocidad * (timeLastUpdate / 1000));
  }

  collisionHandler = (
    _event: Phaser.Physics.Matter.Events.CollisionStartEvent,
    ...bodys: any[]
  ) => {
    bodys.forEach(
      (o) => {
        if (o.gameObject && o.gameObject.getData('tipo') === 'pesquero') {
          o.gameObject.setData('vida', o.gameObject.getData('vida') - this.arma.danio);
        } else if (o.gameObject === this) {
          o.gameObject.destroy();
        }
      },
    );
  }
}
