import * as Phaser from 'phaser';

export class Bala extends Phaser.Physics.Matter.Sprite {
  initialRotationSet = false;

  constructor(
    world: Phaser.Physics.Matter.World, x: number, y: number, texture: string, rotacion: number,
  ) {
    super(world, x, y, texture);
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
    // console.log('timeLastUpdate: ', timeLastUpdate);
    this.thrust(0.01 * (timeLastUpdate / 1000));
    // this.thrust(0.01 / 60);
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
