import * as Phaser from 'phaser';

// eslint-disable-next-line no-unused-vars
import { GOVehiculo } from '../gameObjects/vehiculo';
import { GOPesquero } from '../gameObjects/pesquero';
import { GOPatrulla } from '../gameObjects/patrulla';
import { Muelle } from '../gameObjects/muelle';
import { agregarAgua } from '../gameObjects/agua';

export class Game extends Phaser.Scene {
  minimap: Phaser.Cameras.Scene2D.Camera;

  sceneConfig: SceneConfiguration;

  jugadorLocal: {
    nick: string,
    vehiculos: GOPesquero[] | GOPatrulla[],
  } = { nick: 'player2', vehiculos: [] };

  constructor() {
    super('Game');
  }

  public init(data: any) {
    this.sceneConfig = data;
    this.jugadorLocal.nick = data.nick;
  }

  public preload() {
    this.anims.create({
      key: 'policia1',
      frames: this.anims.generateFrameNumbers('policia1', {
        start: 0,
        end: 1,
      }),
      frameRate: 3,
      repeat: -1,
    });

    this.anims.create({
      key: 'policia2',
      frames: this.anims.generateFrameNumbers('policia2', {
        start: 0,
        end: 1,
      }),
      frameRate: 3,
      repeat: -1,
    });

    this.anims.create({
      key: 'pesquero1',
      frames: this.anims.generateFrameNumbers('pesquero1', {
        start: 0,
        end: 1,
      }),
      frameRate: 3,
      repeat: -1,
    });

    this.anims.create({
      key: 'pesquero2',
      frames: this.anims.generateFrameNumbers('pesquero2', {
        start: 0,
        end: 1,
      }),
      frameRate: 3,
      repeat: -1,
    });
    this.anims.create({
      key: 'patrulla-auxiliar',
      frames: this.anims.generateFrameNumbers('patrulla-auxiliar', {
        start: 0,
        end: 1,
      }),
      frameRate: 3,
      repeat: -1,
    });
    this.anims.create({
      key: 'patrulla-helicoptero',
      frames: this.anims.generateFrameNumbers('patrulla-helicoptero', {
        start: 0,
        end: 1,
      }),
      frameRate: 3,
      repeat: -1,
    });
  }

  public create() {
    this.matter.world.setBounds(0, 0, this.sceneConfig.width, this.sceneConfig.height);
    this.cameras.main.setBounds(0, 0, this.sceneConfig.width, this.sceneConfig.height);
    this.minimap = this.cameras.add(0, 0, 210, this.sceneConfig.height * (210 / this.sceneConfig.width), false, 'minimap');
    this.minimap.setZoom(200 / (this.sceneConfig.width * 2));

    const agua = agregarAgua(this, this.sceneConfig.width, this.sceneConfig.height);
    this.minimap.ignore(agua);
    // linea pesca
    this.add.graphics({
      fillStyle: { color: 0xFF0000 },
    }).fillRect(0, this.sceneConfig.millaLimite, this.sceneConfig.width, 1);
    // eslint-disable-next-line no-new
    const muelle = new Muelle(this, this.sceneConfig.width / 2, this.sceneConfig.height, 'puerto');

    this.sceneConfig.jugadores.forEach(
      (p) => {
        p.vehiculos.forEach(
          (v, i) => {
            const data = {
              ...v,
              nick: p.nick,
              sendToServer: p.nick === this.jugadorLocal.nick,
              canBeSelected: p.nick === this.jugadorLocal.nick,
              selected: i === 0 && p.nick === this.jugadorLocal.nick,
              millaLimite: this.sceneConfig.millaLimite,
            };
            if (v.tipo === 'patruya') data.muelle = muelle;

            // eslint-disable-next-line no-new
            const ve = v.tipo === 'pesquero' ? new GOPesquero(this, v, data) : new GOPatrulla(this, v, data);
            if (data.selected) {
              this.cameras.main.startFollow(ve);
            }
            if (p.nick === this.jugadorLocal.nick) {
              this.jugadorLocal.vehiculos.push(<any>ve);
            } else {
              this.minimap.ignore(ve);
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

  public agregarTexto = (texto) => {
    let txt = null;
    if (txt == null) {
      txt = this.add.text(16, 16, texto);
      txt.setScrollFactor(0);
    } else {
      txt.setText = texto;
    }
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
}
