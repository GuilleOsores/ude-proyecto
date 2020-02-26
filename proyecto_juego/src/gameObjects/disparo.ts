import * as Phaser from 'phaser';

// hacer el mismo refactor que en vehiculo
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
      const objetos: Phaser.GameObjects.GameObject[] = [];

      this.world.scene.sys.displayList.each((go) => {
        if (go.body === bodyA || go.body === bodyB) {
          objetos.push(go);
        }
      });

      objetos.forEach(
        (o) => {
          if (o.getData('tipo') === 'pesquero') {
            o.setData('vida', o.getData('vida') - this.arma.danio);
          } else if (o === this) {
            (<Phaser.GameObjects.GameObject>o.body).destroy();
            this.world.scene.sys.displayList.remove(o);
          }
        },
      );
    }
  }
}
