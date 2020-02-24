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

    this.load.image('bala', './assets/images/bullet7.png');
  }
}
