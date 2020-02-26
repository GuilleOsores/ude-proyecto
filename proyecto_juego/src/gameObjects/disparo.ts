import * as Phaser from 'phaser';

export class Disparo extends Phaser.Physics.Matter.Sprite {
  initialRotationSet = false;

  arma: Arma;

  constructor(
    world: Phaser.Physics.Matter.World, x: number, y: number, arma: Arma, rotacion: number,
  ) {
    super(world, x, y, arma.sprite);
    this.arma = arma;
    this.setBody('circle');
    this.setRotation(rotacion);
    this.setScale(2);
    world.scene.sys.displayList.add(this);
    world.scene.sys.updateList.add(this);

    this.scene.matter.world.on('collisionstart', this.collisionHandler);

    this.on('destroy', () => {
      this.scene.matter.world.removeListener('collisionstart', this.collisionHandler);
      this.removeAllListeners();
    });
  }

  public preUpdate(_timeElapsed: number, timeLastUpdate: number) {
    this.thrust(this.arma.velocidad * (timeLastUpdate / 1000));
  }

  collisionHandler = (
    event: Phaser.Physics.Matter.Events.CollisionStartEvent,
    bodyA: Phaser.GameObjects.GameObject,
    bodyB: Phaser.GameObjects.GameObject,
  ) => {
    if (bodyA === this.body || bodyB === this.body) {
      let a; let b;
      this.world.scene.sys.displayList.each((go) => {
        if (go.body === bodyA) {
          a = go;
        } else if (go.body === bodyB) {
          b = go;
        }
      });
      this.emit('destroy');
      if (a) {
        bodyA.destroy();
        this.world.scene.sys.displayList.remove(a);
      }
      if (b) {
        bodyB.destroy();
        this.world.scene.sys.displayList.remove(b);
      }
    }
  }
}
