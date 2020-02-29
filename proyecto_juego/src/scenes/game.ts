import * as Phaser from 'phaser';

// eslint-disable-next-line no-unused-vars
import { GOVehiculo } from '../gameObjects/vehiculo';
import { GOPesquero } from '../gameObjects/pesquero';
import { GOPatrulla } from '../gameObjects/patrulla';
import { agregarAgua } from '../gameObjects/agua';
import { getWs, EVENTOS } from '../ws';

const sceneConfig: SceneConfiguration = require('../../mock/scene.json');

export class Game extends Phaser.Scene {
  jugadorLocal: {
    nick: string,
    vehiculos: GOPesquero[] | GOPatrulla[],
  } = { nick: 'player2', vehiculos: [] };

  jugadorRemoto: {
    nick: string,
    vehiculos: GOPesquero[] | GOPatrulla[],
  } = { nick: 'player1', vehiculos: [] };

  constructor() {
    super('Game');
    getWs().onmessage = this.wshandler;
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

    agregarAgua(this, sceneConfig.width, sceneConfig.height);

    sceneConfig.jugadores.forEach(
      (p) => {
        p.vehiculos.forEach(
          (v, i) => {
            const data = {
              ...v,
              nick: p.nick,
              canBeSelected: p.nick === this.jugadorLocal.nick,
              selected: i === 0 && p.nick === this.jugadorLocal.nick,
              millaLimite: sceneConfig.millaLimite,
              enviarInfo: p.nick === this.jugadorLocal.nick,
            };

            // eslint-disable-next-line no-new
            const ve = v.tipo === 'pesquero' ? new GOPesquero(this, v, data) : new GOPatrulla(this, v, data);
            if (data.selected) {
              this.cameras.main.startFollow(ve);
            }
            if (p.nick === this.jugadorLocal.nick) {
              this.jugadorLocal.vehiculos.push(<any>ve);
            } else {
              this.jugadorRemoto.vehiculos.push(<any>ve);
            }
          },
        );
      },
    );

    this.input.on('gameobjectdown', (pointer, gameObject: Phaser.GameObjects.GameObject) => {
      const id = gameObject.getData('id');
      this.seleccionarBarco(id);
    });

    this.input.keyboard.on('keydown', this.keyboardHandler);
  }

  keyboardHandler = (event: KeyboardEvent) => {
    if (event.shiftKey && this.jugadorLocal.vehiculos[event.keyCode - 49]) {
      this.seleccionarBarco(event.keyCode - 49 + 1);
    }
  }

  seleccionarBarco = (id) => {
    (<GOVehiculo[]> this.jugadorLocal.vehiculos).forEach(
      (v) => v.setSeleccionado(v.getId() === id)
      ,
    );
  }

  wshandler = ({ data }) => {
    // console.log(data);
    const info = JSON.parse(data);
    if (info.event === EVENTOS.MUEVO_BARCO) {
      if (info.nick === this.jugadorRemoto.nick) {
        // console.log(`x: ${info.x}, y: ${info.y}`);
        const v = this.jugadorRemoto.vehiculos[info.id - 1];
        v.x = info.x;
        v.y = info.y;
      }
    }
  }
}
