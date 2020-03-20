import * as Phaser from 'phaser';
// eslint-disable-next-line no-unused-vars
import { GOPatrulla } from './patrulla';

export class Muelle extends Phaser.GameObjects.Sprite {
  sensor: Phaser.GameObjects.Ellipse;

  constructor(scene: Phaser.Scene, x: number, y: number, sprite: string) {
    super(scene, x, y, sprite);
    this.setPosition(x - this.width / 2, y - this.height / 2);
    const f = new Phaser.Physics.Matter.Factory(scene.matter.world);
    f.gameObject(this, { isStatic: true }, true);
    scene.add.existing(this);
    this.sensor = new Phaser.GameObjects.Ellipse(
      scene, x - this.width / 2, y - this.height / 2, this.width + 100, this.height + 100,
    );
    f.gameObject(
      this.sensor,
      {
        isStatic: true,
        isSensor: true,
        onCollideActiveCallback: this.onCollideActiveCallbackHandler,
      },
      true,
    );
    scene.add.existing(this.sensor);
  }

  onCollideActiveCallbackHandler = (pair: MatterJS.IPair) => {
    let go: GOPatrulla;
    if ((<MatterJS.BodyType>pair.bodyA).gameObject && (<Phaser.GameObjects.GameObject>(<MatterJS.BodyType>pair.bodyA).gameObject).getData && (<Phaser.GameObjects.GameObject>(<MatterJS.BodyType>pair.bodyA).gameObject).getData('tipo') === 'patruya') {
      go = (<MatterJS.BodyType>pair.bodyA).gameObject;
    } else if ((<MatterJS.BodyType>pair.bodyB).gameObject && (<Phaser.GameObjects.GameObject>(<MatterJS.BodyType>pair.bodyB).gameObject).getData && (<Phaser.GameObjects.GameObject>(<MatterJS.BodyType>pair.bodyB).gameObject).getData('tipo') === 'patruya') {
      go = (<MatterJS.BodyType>pair.bodyB).gameObject;
    }

    if (go) {
      go.recargarCombustible(0.5);
    }
  }
}
