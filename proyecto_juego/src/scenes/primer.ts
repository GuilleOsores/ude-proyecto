import * as Phaser from 'phaser';
import { loadBoat, addBoat } from '../barcos/barcos';
import { loadWater, addWater } from '../sprites/water';

export class Primer extends Phaser.Scene {
  constructor() {
    super({});
  }

  public preload() {
    loadBoat(this, 'barco1', './assets/images/barco1.png');
    loadWater(this);
  }

  public create() {
    addWater(this);
    addBoat(this, 250, 250);
    addBoat(this, 500, 250);
  }
}
