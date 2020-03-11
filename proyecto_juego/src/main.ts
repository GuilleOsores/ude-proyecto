import * as Phaser from 'phaser';
import InputTextPlugin from 'phaser3-rex-plugins/plugins/inputtext-plugin.js';

import { Load } from './scenes/load';
import { Main } from './scenes/main';
import { Nick } from './scenes/nick';
import { Game } from './scenes/game';
import { Resultado } from './scenes/resultado';

const gameConfig: Phaser.Types.Core.GameConfig = {
  title: 'Sample',
  type: Phaser.AUTO,
  scale: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
  dom: {
    createContainer: true,
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
  scene: [Load, Main, Nick, Game, Resultado],
  plugins: {
    global: [{
      key: 'rexInputTextPlugin',
      plugin: InputTextPlugin,
      start: true,
    },
    ],
  },
};

const game = new Phaser.Game(gameConfig);
game.scene.start('Load');
