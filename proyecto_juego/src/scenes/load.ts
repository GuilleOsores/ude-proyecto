import * as Phaser from 'phaser';
import { ProgressBar } from '../gameObjects/progressBar';

export class Load extends Phaser.Scene {
  constructor() {
    super('Load');
  }

  public preload() {
    this.add.existing(new ProgressBar(this, () => this.input.on('pointerdown', () => {
      this.scene.start('Game');
    })));

    this.load.spritesheet('water', './assets/images/Ocean_SpriteSheet.png', {
      frameWidth: 32,
      frameHeight: 32,
    });

    this.load.spritesheet('policia1', './assets/images/police01.png', {
      frameWidth: 208,
      frameHeight: 88,
      margin: 0,
      spacing: 0,
    });

    this.load.spritesheet('pesquero1', './assets/images/pesquero01.png', {
      frameWidth: 208,
      frameHeight: 88,
      margin: 0,
      spacing: 0,
    });

    this.load.image('puerto', './assets/images/puerto.png');
    this.load.image('bala', './assets/images/bullet6.png');
    this.load.image('bala_canion', './assets/images/bullet8.png');

    this.load.audio('canion', '../assets/sonidos/canion.m4a');
    this.load.audio('ametralladora', '../assets/sonidos/ametralladora.m4a');
  }
}
