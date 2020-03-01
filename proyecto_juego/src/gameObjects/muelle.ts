import * as Phaser from 'phaser';
// eslint-disable-next-line no-unused-vars
import { GOPatrulla } from './patrulla';

export class Muelle extends Phaser.GameObjects.Sprite {
  texto: Phaser.GameObjects.Text;

  sensor: Phaser.GameObjects.Ellipse;

  constructor(scene: Phaser.Scene, x: number, y: number, sprite: string) {
    super(scene, x, y, sprite);
    const f = new Phaser.Physics.Matter.Factory(scene.matter.world);
    f.gameObject(this, { isStatic: true }, true);
    scene.add.existing(this);

    this.sensor = new Phaser.GameObjects.Ellipse(scene, x, y, 100, 100);
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

    // borrar cuando se tenga el sprite
    this.texto = new Phaser.GameObjects.Text(scene, x, y, 'muelle', {});
    this.texto.setOrigin(0.5, 0.5);
    scene.add.existing(this.texto);
  }

  onCollideActiveCallbackHandler = (pair: MatterJS.IPair) => {
    let go: GOPatrulla;
    if ((<Phaser.GameObjects.GameObject>(<MatterJS.BodyType>pair.bodyA).gameObject).getData('tipo') === 'patruya') {
      go = (<MatterJS.BodyType>pair.bodyA).gameObject;
    } else if ((<Phaser.GameObjects.GameObject>(<MatterJS.BodyType>pair.bodyB).gameObject).getData('tipo') === 'patruya') {
      go = (<MatterJS.BodyType>pair.bodyB).gameObject;
    }

    if (go) {
      go.recargarCombustible(0.1);
    }
  }
}
