import * as Phaser from 'phaser';
import InputText from 'phaser3-rex-plugins/plugins/inputtext.js';
import { startWebSocket } from '../server';

const sceneConfig: SceneConfiguration = require('../../mock/scene1.json');

export class Nick extends Phaser.Scene {
  goNick: any;

  btnContinuar: Phaser.GameObjects.Text;

  constructor() {
    super('Nick');
  }

  public create() {
    const { width, height } = this.sys.game.canvas;

    this.add.image(0, 0, 'main')
      .setDisplaySize(width, height)
      .setOrigin(0, 0);

    this.goNick = new InputText(this, 0, 0, 200, 20, {
      type: 'text', placeholder: 'nick', backgroundColor: 'black', color: '#ffffff', align: 'center',
    });

    this.btnContinuar = new Phaser.GameObjects.Text(this, 0, 0, 'Continuar', {});

    this.goNick.setPosition(
      width / 2,
      height / 2,
    );
    this.btnContinuar.setPosition(
      (width - this.btnContinuar.width) / 2,
      (height - this.btnContinuar.height) / 2 + 50,
    );

    this.goNick.setText('player2');
    this.btnContinuar.setInteractive();

    this.add.existing(this.goNick);
    this.add.existing(this.btnContinuar);

    this.input.on('gameobjectdown', this.clickHandler);
  }

  clickHandler = async (pointer, gameObject: Phaser.GameObjects.GameObject) => {
    if (gameObject === this.btnContinuar && this.goNick.text !== '') {
      
      //this.scene.start('Game', { ...sceneConfig, nick: this.goNick.text });
      this.scene.start('Espera', { ...sceneConfig, nick: this.goNick.text });
    }
  }
}
