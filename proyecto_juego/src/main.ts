import * as Phaser from 'phaser';

import { Load } from './scenes/load';
import { Game } from './scenes/game';

const gameConfig: Phaser.Types.Core.GameConfig = {
  title: 'Sample',
  type: Phaser.AUTO,
  scale: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
  physics: {
    default: 'matter',
    matter: {
      debug: true,
      setBounds: true,
      gravity: false,
    },
  },
  input: {
    mouse: true,
  },
  parent: 'game',
  backgroundColor: '#FFFFFF',
  scene: [Load, Game],
};

const game = new Phaser.Game(gameConfig);
game.scene.start('Load');
