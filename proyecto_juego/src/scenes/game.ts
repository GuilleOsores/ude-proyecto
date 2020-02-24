import * as Phaser from 'phaser';

import { Vehicle } from '../gameObjects/vehiculo';
import { agregarAgua } from '../gameObjects/agua';

const sceneConfig: SceneConfiguration = require('../../mock/scene.json');

const nick = 'player1';

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
    this.input.on('gameobjectdown', (pointer, gameObject: Phaser.GameObjects.GameObject) => {
      console.log(gameObject.getData('id'));
      this.events.emit('changeBoat: ', gameObject.getData('id'));
    });

    this.events.on('changeBoat', () => {
      console.log('changeBoat create scende');
    });
    agregarAgua(this);

    sceneConfig.players.forEach(
      (p) => {
        p.vehicles.forEach(
          (v, i) => {
            const data = {
              id: v.id,
              canBeSelected: p.nick === nick,
              selected: i === 0 && p.nick === nick,
              initialRotation: v.initialRotation,
              velocity: v.velocity,
              angularVelocity: v.angularVelocity,
              normalAnimation: v.normalAnimation,
              millaLimite: v.millaLimite,
              tiempoPesca: v.tiempoPesca,
              armas: v.armas,
              tipo: v.tipo,
              restoPesca: v.restoPesca,
            };

            // eslint-disable-next-line no-new
            new Vehicle(this.matter.world, v, data);
          },
        );
      },
    );
  }
}
