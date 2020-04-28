import * as Phaser from 'phaser';
import InputText from 'phaser3-rex-plugins/plugins/inputtext.js';
import * as server from '../server';


export class Nick extends Phaser.Scene {
  goNick: any;

  bando: string;

  btnPatrulla: Phaser.GameObjects.Text;

  btnPesquero: Phaser.GameObjects.Text;

  btnContinuar: Phaser.GameObjects.Text;

  crearPartida: boolean;

  cargarPartida: boolean;

  constructor() {
    super('Nick');
  }

  public init(data: any) {
    // parche
    this.crearPartida = data.crearPartida || data.cargarPartida;
    this.cargarPartida = data.cargarPartida;
  }

  public create() {
    const { width, height } = this.sys.game.canvas;

    this.add.image(0, 0, 'main')
      .setDisplaySize(width, height)
      .setOrigin(0, 0);

    this.goNick = new InputText(this, 0, 0, 200, 20, {
      type: 'text', placeholder: 'nick', backgroundColor: 'black', color: '#ffffff', align: 'center',
    });

    this.btnPatrulla = new Phaser.GameObjects.Text(this, 0, 0, 'Patrullas', {});
    this.btnPesquero = new Phaser.GameObjects.Text(this, 0, 0, 'Pesqueros', {});

    this.btnContinuar = new Phaser.GameObjects.Text(this, 0, 0, 'Continuar', {});

    this.goNick.setPosition(
      width / 2,
      height / 2,
    );

    this.btnPatrulla.setPosition(
      (width - this.btnPatrulla.width - 100) / 2,
      (height - this.btnPatrulla.height) / 2 + 50,
    );

    this.btnPesquero.setPosition(
      (width - this.btnPesquero.width + 100) / 2,
      (height - this.btnPesquero.height) / 2 + 50,
    );

    this.btnContinuar.setPosition(
      (width - this.btnContinuar.width) / 2,
      (height - this.btnContinuar.height) / 2 + 100,
    );

    this.goNick.setText('player2');
    this.btnPatrulla.setInteractive();
    this.btnPesquero.setInteractive();
    this.btnContinuar.setInteractive();

    this.add.existing(this.goNick);
    if (this.crearPartida) {
      this.add.existing(this.btnPatrulla);
      this.add.existing(this.btnPesquero);
    }
    this.add.existing(this.btnContinuar);

    this.input.on('gameobjectdown', this.clickHandler);
  }

  clickHandler = async (pointer, gameObject: Phaser.GameObjects.GameObject) => {
    try {
      if (gameObject === this.btnContinuar) {
        if (!this.goNick.text) throw new Error('Debe elegir un nombre');
        if (this.crearPartida && !this.bando) throw new Error('Debe elegir un bando');

        if (this.cargarPartida) {
          await server.cargarPartida(this.goNick.text, this.bando);
        } else if (this.crearPartida) {
          await server.crearPartida(this.goNick.text, this.bando);
        } else {
          await server.unirsePartida(this.goNick.text);
        }

        this.scene.start('Espera', { nick: this.goNick.text });
      } else if (gameObject === this.btnPatrulla) {
        this.bando = 'PATRULLA';
        this.btnPatrulla.setBackgroundColor('#486529');
        this.btnPesquero.setBackgroundColor('');
      } else if (gameObject === this.btnPesquero) {
        this.bando = 'PESQUERO';
        this.btnPatrulla.setBackgroundColor('');
        this.btnPesquero.setBackgroundColor('#486529');
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.mensaje);
      } else {
        alert(error.message);
      }
    }
  }
}
