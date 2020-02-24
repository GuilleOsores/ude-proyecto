import * as Phaser from 'phaser';

export class Vehicle extends Phaser.Physics.Matter.Sprite {
  initialRotationSet = false;

  constructor(world: Phaser.Physics.Matter.World, vehicle: VehicleConfiguration, data: any) {
    super(world, vehicle.x, vehicle.y, vehicle.sprite);

    this.setDataEnabled();
    Object.keys(data).forEach((k) => this.setData(k, data[k]));
    world.scene.sys.displayList.add(this);
    world.scene.sys.updateList.add(this);
    if (vehicle.sprite === 'policia1')
      this.setScale(0.6);

    if (data.canBeSelected) {
      this.setInteractive();
      this.scene.events.on('changeBoat', (id) => {
        console.log(this);
        if (data.id === id) {
          this.setData('selected', true);
        } else {
          this.setData('selected', false);
          this.setVelocity(0, 0);
        }
      });
    }
  }


  public create() {
    if (this.getData('canBeSelected')) {
      this.setInteractive();
      this.scene.events.on('changeBoat', (id) => {
        if (this.getData('id') === id) {
          this.setData('selected', true);
        } else {
          this.setData('selected', false);
          this.setVelocity(0, 0);
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
      this.thrust(this.getData('velocity'));
    } else if (cursorKeys.down.isDown) {
      this.thrustBack(this.getData('velocity'));
    }
  }
}
