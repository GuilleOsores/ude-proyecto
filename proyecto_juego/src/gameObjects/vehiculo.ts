import * as Phaser from 'phaser';

export class GOVehiculo extends Phaser.GameObjects.Sprite {
  initialRotationSet = false;

  constructor(scene: Phaser.Scene, vehicle: Pesquero | Patrulla, data: any) {
    super(scene, vehicle.x, vehicle.y, vehicle.sprite);
    // agrega las funcionalidades de matter al sprite comun de phaser
    const f = new Phaser.Physics.Matter.Factory(scene.matter.world);
    f.gameObject(this, {}, true);
    scene.add.existing(this);

    this.setDataEnabled();
    Object.keys(data).forEach((k) => this.setData(k, data[k]));

    if (data.canBeSelected) {
      this.setInteractive();
      this.scene.events.on('changeBoat', (id) => {
        console.log(this);
        if (data.id === id) {
          this.setData('selected', true);
        } else {
          this.setData('selected', false);
          this.getMatterSprite().setVelocity(0, 0);
        }
      });
    }
  }

  getMatterSprite() {
    return (<Phaser.Physics.Matter.Sprite> (<any> this));
  }

  public create() {
    if (this.getData('canBeSelected')) {
      this.setInteractive();
      this.scene.events.on('changeBoat', (id) => {
        if (this.getData('id') === id) {
          this.setData('selected', true);
        } else {
          this.setData('selected', false);
          this.getMatterSprite().setVelocity(0, 0);
        }
      });
    }
    this.setRotation(Phaser.Math.DegToRad(this.getData('initialRotation')));
  }

  public preUpdate(timeElapsed: number, timeLastUpdate: number) {
    if (!this.initialRotationSet) {
      this.initialRotationSet = true;
      this.setRotation(Phaser.Math.DegToRad(this.getData('initialRotation')));
    }
    if (!this.getData('selected')) return;

    const cursorKeys = this.scene.input.keyboard.createCursorKeys();
    const angularVelocity = this.getData('angularVelocity') * (timeLastUpdate / 1000);

    if (cursorKeys.right.isDown) {
      this.setRotation(this.rotation + angularVelocity);
    } else if (cursorKeys.left.isDown) {
      this.setRotation(this.rotation - angularVelocity);
    }

    if (cursorKeys.up.isDown) {
      this.getMatterSprite().thrust(this.getData('velocity'));
    } else if (cursorKeys.down.isDown) {
      this.getMatterSprite().thrustBack(this.getData('velocity'));
    }
  }
}
