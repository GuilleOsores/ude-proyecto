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
    this.scene.cameras.getCamera('camaraLateral').ignore(this);
  }

  getMatterSprite() {
    return (<Phaser.Physics.Matter.Sprite> (<any> this));
  }

  public preUpdate(_timeElapsed: number, timeLastUpdate: number) {
    if (
      Phaser.Math.Distance.Between(
        this.x, this.y, this.initialPositionX, this.initialPositionY,
      ) >= this.arma.distancia
    ) {
      this.destroy();
      return;
    }

    this.getMatterSprite().thrust(this.arma.velocidad * (timeLastUpdate / 1000));
  }

  public destroy() {
    this.scene.matter.world.removeListener('collisionstart', this.collisionHandler);
    super.destroy();
  }

  collisionHandler = (
    _event: Phaser.Physics.Matter.Events.CollisionStartEvent,
    bodyA: any,
    bodyB: any,
  ) => {
    if (bodyA.gameObject && bodyB.gameObject
      && (
        ((bodyA.gameObject.getData && bodyA.gameObject.getData('tipo') === 'pesquero') || bodyA.gameObject === this)
        && ((bodyB.gameObject.getData && bodyB.gameObject.getData('tipo') === 'pesquero') || bodyB.gameObject === this)
      )
    ) {
      const pesquero = bodyA.gameObject.getData('tipo') === 'pesquero' ? bodyA.gameObject : bodyB.gameObject;
      pesquero.setData('vida', pesquero.getData('vida') - this.arma.danio);
      this.destroy();
    }
  }
}
