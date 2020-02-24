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

    this.load.spritesheet('barco1', './assets/images/barco1.png', {
      frameWidth: 208,
      frameHeight: 192,
      margin: 0,
      spacing: 0,
    });

    
  }
}
