import * as Phaser from 'phaser';
import * as moment from 'moment';

import { Bala } from '../gameObjects/bala'

export class Vehicle extends Phaser.Physics.Matter.Sprite {
  initialRotationSet = false;

  ultimoDisparo: moment.Moment[] = [];

  constructor(world: Phaser.Physics.Matter.World, vehicle: VehicleConfiguration, data: any) {
    super(world, vehicle.x, vehicle.y, vehicle.type);

    this.setDataEnabled();
    Object.keys(data).forEach((k) => this.setData(k, data[k]));
    world.scene.sys.displayList.add(this);
    world.scene.sys.updateList.add(this);

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

    if (vehicle.armas && vehicle.armas.length) {
      this.scene.input.on(Phaser.Input.Events.POINTER_DOWN, this.dispararHandle);
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

  dispararHandle = () => {
    if (this.getData('selected')) {
      const armas = <Armas[]> this.getData('armas');
      const arma = armas[0];
      if (!this.ultimoDisparo[0] || moment().add(-arma.cadencia, 'seconds').isAfter(moment(this.ultimoDisparo[0]))) {
        this.disparo();
        this.ultimoDisparo[0] = moment();
      }
    }
  }

  disparo() {
    new Bala(this.world, this.x-100, this.y+120, 'bala', this.rotation - this.getData('initialRotation'));
  }
}
