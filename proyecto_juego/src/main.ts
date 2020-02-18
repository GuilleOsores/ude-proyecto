import * as Phaser from 'phaser';
import { Primer } from './scenes/primer';

const gameConfig: Phaser.Types.Core.GameConfig = {
  title: 'Sample',
  type: Phaser.AUTO,
  scale: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    },
  },
  input: {
    mouse: true,
  },
  parent: 'game',
  backgroundColor: '#FFFFFF',
};

const game = new Phaser.Game(gameConfig);

game.scene.add('primer', Primer, true);
export const am = game.anims;
