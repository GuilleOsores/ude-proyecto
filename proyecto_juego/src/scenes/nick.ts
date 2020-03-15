import axios from 'axios';

import * as Phaser from 'phaser';
import InputText from 'phaser3-rex-plugins/plugins/inputtext.js';

export class Nick extends Phaser.Scene {
  goNick: any;

  btnContinuar: Phaser.GameObjects.Text;

  crearPartida: Phaser.GameObjects.Text;

  constructor() {
    super('Nick');
  }

  public init(data: any) {
    this.crearPartida = data.crearPartida;
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

      if (gameObject === this.btnContinuar && this.goNick.text !== '') {
        let res ;
        if (this.crearPartida) {
          // await axios('http://localhost:8080/backend/crearpartida', { method: 'POST', data: { nickName: this.goNick.text, bando: 'PATRULLA' } });
           res = await axios(`http://localhost:8080/backend/crearpartida?nickName=${this.goNick.text}&bando=PATRULLA`);
        } else {
          // await axios('http://localhost:8080/backend/unirsepartida', { method: 'POST' });
           res = await axios(`http://localhost:8080/backend/unirsepartida?nickName=${this.goNick.text}`);
        }
        // console.log(res);

        this.scene.start('Espera', { nick: this.goNick.text });
      }
    }
  }
}
