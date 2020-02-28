import * as Phaser from 'phaser';

import { GOPesquero } from '../gameObjects/pesquero';
import { GOPatrulla } from '../gameObjects/patrulla';
import { agregarAgua } from '../gameObjects/agua';

const sceneConfig: SceneConfiguration = require('../../mock/scene.json');

const nick = 'player2';

export class Game extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  public preload() {
    this.anims.create({
      key: 'barcoDown',
      frames: this.anims.generateFrameNumbers('barco1', {
        start: 0,
        end: 3,
      }),
      frameRate: 3,
      yoyo: false,
      repeat: -1,
    });

    this.anims.create({
      key: 'barcoUp',
      frames: this.anims.generateFrameNumbers('barco1', {
        start: 12,
        end: 25,
      }),
      frameRate: 3,
      yoyo: false,
      repeat: -1,
    });
  }

  public create() {
    this.matter.world.setBounds(0, 0, sceneConfig.width, sceneConfig.height);
    this.cameras.main.setBounds(0, 0, sceneConfig.width, sceneConfig.height);

    this.input.on('gameobjectdown', (pointer, gameObject: Phaser.GameObjects.GameObject) => {
      console.log(gameObject.getData('id'));
      this.events.emit('changeBoat: ', gameObject.getData('id'));
    });

    this.events.on('changeBoat', () => {
      console.log('changeBoat create scende');
    });
    agregarAgua(this, sceneConfig.width, sceneConfig.height);

    sceneConfig.jugadores.forEach(
      (p) => {
        p.vehiculos.forEach(
          (v, i) => {
            const data = {
              ...v,
              canBeSelected: p.nick === nick,
              selected: i === 0 && p.nick === nick,
              millaLimite: sceneConfig.millaLimite,
            };

            // eslint-disable-next-line no-new
            const ve = v.tipo === 'pesquero' ? new GOPesquero(this, v, data) : new GOPatrulla(this, v, data);
            if (data.selected) {
              this.cameras.main.startFollow(ve);
            }
          },
        );
      },
    );
  }
}
