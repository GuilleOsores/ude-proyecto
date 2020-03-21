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

    this.load.spritesheet('policia1', './assets/images/policia01.png', {
      frameWidth: 283,
      frameHeight: 105,
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

    this.load.spritesheet('tormenta', './assets/images/tormenta.png', {
      frameWidth: 304,
      frameHeight: 322,
      margin: 0,
      spacing: 0,
    });

    this.load.spritesheet('explosion', './assets/images/explosion.png', {
      frameWidth: 100,
      frameHeight: 100,
      margin: 0,
      spacing: 0,
    });

    this.load.image('policia01_atras', './assets/images/policia01_atras.png');
    this.load.image('policia01_derecha', './assets/images/policia01_derecha.png');
    this.load.image('policia01_izquierda', './assets/images/policia01_izquierda.png');
    this.load.image('policia01_frente', './assets/images/policia01_frente.png');

    this.load.image('policia02_atras', './assets/images/policia02_atras.png');
    this.load.image('policia02_derecha', './assets/images/policia02_derecha.png');
    this.load.image('policia02_izquierda', './assets/images/policia02_izquierda.png');
    this.load.image('policia02_frente', './assets/images/policia02_frente.png');

    this.load.image('pesquero01_atras', './assets/images/pesquero01_atras.png');
    this.load.image('pesquero01_derecha', './assets/images/pesquero01_derecha.png');
    this.load.image('pesquero01_izquierda', './assets/images/pesquero01_izquierda.png');
    this.load.image('pesquero01_frente', './assets/images/pesquero01_frente.png');

    this.load.image('pesquero02_atras', './assets/images/pesquero01_atras.png');
    this.load.image('pesquero02_derecha', './assets/images/pesquero01_derecha.png');
    this.load.image('pesquero02_izquierda', './assets/images/pesquero01_izquierda.png');
    this.load.image('pesquero02_frente', './assets/images/pesquero01_frente.png');

    this.load.image('main', './assets/images/main.jpg');
    this.load.image('puerto', './assets/images/puerto.png');
    this.load.image('bala', './assets/images/bullet6.png');
    this.load.image('bala_canion', './assets/images/bullet8.png');
    this.load.image('vision', './assets/images/vision.png');
    this.load.image('manini', './assets/images/manini.png');

    this.load.audio('canion', './assets/sonidos/canion.m4a');
    this.load.audio('ametralladora', './assets/sonidos/ametralladora.m4a');
    this.load.audio('helicoptero', './assets/sonidos/helicoptero.m4a');
    this.load.audio('manini', './assets/sonidos/manini.m4a');
  }
}
