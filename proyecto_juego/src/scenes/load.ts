import * as Phaser from 'phaser';
import { ProgressBar } from '../gameObjects/progressBar';

export class Load extends Phaser.Scene {
  constructor() {
    super('Load');
  }

  public preload() {
    this.add.existing(new ProgressBar(this, () => this.scene.start('Main')));

    this.load.spritesheet('water', './assets/images/Ocean_SpriteSheet.png', {
      frameWidth: 32,
      frameHeight: 32,
    });

    this.load.spritesheet('policia1', './assets/images/police01.png', {
      frameWidth: 160,
      frameHeight: 68,
      margin: 0,
      spacing: 0,
    });

    this.load.spritesheet('policia2', './assets/images/police02.png', {
      frameWidth: 116,
      frameHeight: 48,
      margin: 0,
      spacing: 0,
    });

    this.load.spritesheet('patrulla-auxiliar', './assets/images/police03.png', {
      frameWidth: 67,
      frameHeight: 38,
      margin: 0,
      spacing: 0,
    });

    this.load.spritesheet('patrulla-helicoptero', './assets/images/police04.png', {
      frameWidth: 95,
      frameHeight: 95,
      margin: 0,
      spacing: 0,
    });

    this.load.spritesheet('pesquero1', './assets/images/pesquero01.png', {
      frameWidth: 208,
      frameHeight: 88,
      margin: 0,
      spacing: 0,
    });

    this.load.spritesheet('pesquero2', './assets/images/pesquero02.png', {
      frameWidth: 150,
      frameHeight: 66,
      margin: 0,
      spacing: 0,
    });

    this.load.image('main', './assets/images/main.jpg');
    this.load.image('tormenta', './assets/images/tormenta.png');
    this.load.image('puerto', './assets/images/puerto.png');
    this.load.image('bala', './assets/images/bullet6.png');
    this.load.image('bala_canion', './assets/images/bullet8.png');
    this.load.image('vision', './assets/images/vision.png');

    this.load.audio('canion', '../assets/sonidos/canion.m4a');
    this.load.audio('ametralladora', '../assets/sonidos/ametralladora.m4a');
  }
}
