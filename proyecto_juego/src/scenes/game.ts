import * as Phaser from 'phaser';

// eslint-disable-next-line no-unused-vars
import { GOVehiculo } from '../gameObjects/vehiculo';
import { GOPesquero } from '../gameObjects/pesquero';
import { GOPatrulla } from '../gameObjects/patrulla';
import { Muelle } from '../gameObjects/muelle';
import { agregarAgua } from '../gameObjects/agua';
import * as server from '../server';

export class Game extends Phaser.Scene {
  minimap: Phaser.Cameras.Scene2D.Camera;

  camaraLateral: Phaser.Cameras.Scene2D.Camera;

  sceneConfig: SceneConfiguration;

  txtPescadoTotal: Phaser.GameObjects.Text;

  nieblaDeGuerra: Phaser.GameObjects.Rectangle;

  renderTexture: Phaser.GameObjects.RenderTexture;

  jugadorLocal: {
    nick: string,
    vehiculos: GOPesquero[] | GOPatrulla[],
    pescados: number,
  } = { nick: 'player2', vehiculos: [], pescados: 0 };

  jugadorRemoto: {
    nick: string,
  } = { nick: 'player2' };

  constructor() {
    super('Game');
  }

  public init(data: any) {
    this.sceneConfig = data;
    this.jugadorLocal.nick = data.nick;
    this.jugadorRemoto.nick = this.sceneConfig.jugadores.find((j) => j.nick !== data.nick).nick;
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
        end: 5,
      }),
      frameRate: 8,
      repeat: -1,
    });
  }

  public create() {
    this.matter.world.setBounds(0, 0, this.sceneConfig.width, this.sceneConfig.height);
    this.cameras.main.setBounds(0, 0, this.sceneConfig.width, this.sceneConfig.height)
      .setSize(this.game.canvas.width, this.game.canvas.height - 200);

    // camara minimapa
    const minimapaWidth = 100;
    const minimapaHeight = this.sceneConfig.height * (100 / this.sceneConfig.width);
    this.minimap = this.cameras.add(30, 30, minimapaWidth, minimapaHeight, false, 'minimap');
    this.minimap.setZoom(100 / this.sceneConfig.width).setOrigin(0, 0);
    // bordes
    this.add.line(
      0, 0,
      this.minimap.x - 1, this.minimap.y - 1,
      this.minimap.x + this.minimap.width + 1, this.minimap.y - 1,
      0x00FF00,
    ).setScrollFactor(0, 0).setDepth(200).setOrigin(0, 0);
    this.add.line(
      0, 0,
      this.minimap.x - 1, this.minimap.y - 1,
      this.minimap.x - 1, this.minimap.y + this.minimap.height + 1,
      0x00FF00,
    ).setScrollFactor(0, 0).setDepth(200).setOrigin(0, 0);
    this.add.line(
      0, 0,
      this.minimap.x + this.minimap.width + 1, this.minimap.y - 1,
      this.minimap.x + this.minimap.width + 1, this.minimap.y + this.minimap.height + 1,
      0x00FF00,
    ).setScrollFactor(0, 0).setDepth(200).setOrigin(0, 0);
    this.add.line(
      0, 0,
      this.minimap.x - 1, this.minimap.y + this.minimap.height + 1,
      this.minimap.x + this.minimap.width + 1, this.minimap.y + this.minimap.height + 1,
      0x00FF00,
    ).setScrollFactor(0, 0).setDepth(200).setOrigin(0, 0);
    // fin bordes

    // camara lateral
    this.camaraLateral = this.cameras.add(0, 0, this.sceneConfig.width, 200, false, 'camaraLateral');
    this.camaraLateral.setSize(this.game.canvas.width, 200)
      .setPosition(0, this.game.canvas.height - 200);

    const agua = agregarAgua(this, this.sceneConfig.width, this.sceneConfig.height);
    this.minimap.ignore(agua);
    this.camaraLateral.ignore(agua);

    // cosas locas para la niebla de guerra
    this.nieblaDeGuerra = this.add.rectangle(
      0, 0, this.sceneConfig.width, this.sceneConfig.height, 0x00000000,
    ).setOrigin(0, 0).setDepth(100);
    this.camaraLateral.ignore(this.nieblaDeGuerra);

    this.renderTexture = new Phaser.GameObjects.RenderTexture(
      this, 0, 0, this.sceneConfig.width, this.sceneConfig.height,
    );
    this.renderTexture.setOrigin(0, 0);
    const maskImage = this.make.image({
      x: 0, y: 0, key: this.renderTexture.texture.key, add: false,
    });
    maskImage.setOrigin(0, 0);
    this.nieblaDeGuerra.mask = new Phaser.Display.Masks.BitmapMask(this, maskImage);
    this.nieblaDeGuerra.mask.invertAlpha = true;
    // fin cosas locas para la niebla de guerra

    // linea pesca
    this.add.graphics({
      fillStyle: { color: 0xFF0000 },
    }).fillRect(0, this.sceneConfig.millaLimite, this.sceneConfig.width, 1);

    // eslint-disable-next-line no-new
    const muelle = new Muelle(this, this.sceneConfig.width / 2, this.sceneConfig.height, 'puerto');

    if (this.sceneConfig.jugadores.find((j) => j.nick === this.jugadorLocal.nick).vehiculos[0].tipo === 'pesquero') {
      this.txtPescadoTotal = this.add.text(600, 16, 'Total: 0', { fontSize: '28px', fill: '#FFF' });
      this.txtPescadoTotal.setScrollFactor(0);
      this.txtPescadoTotal.setDepth(150);
      this.minimap.ignore(this.txtPescadoTotal);
      this.camaraLateral.ignore(this.txtPescadoTotal);
    }

    this.sceneConfig.jugadores.forEach(
      (p) => {
        p.vehiculos.forEach(
          (v, i) => {
            const data = {
              ...v,
              nick: p.nick,
              jugadorLocal: this.jugadorLocal,
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

    this.events.on('countfish', (cantidad) => {
      this.jugadorLocal.pescados += cantidad;
      this.txtPescadoTotal.setText(`Total: ${this.jugadorLocal.pescados}`);
      if (this.jugadorLocal.pescados >= 100) { // parametrizar esto
        server.enviar(server.EVENTOS.FINALIZAR, { ganador: this.jugadorLocal.nick });
        this.finalizar(this.jugadorLocal.nick);
      }
    });

    server.addhandler(server.EVENTOS.FINALIZAR, this.finalizarPartidaHandler);
  }

  finalizarPartidaHandler = (data) => {
    this.finalizar(data.ganador);
  }

  public update() {
    this.renderTexture.clear();
    let cantidadVivos = 0;
    this.jugadorLocal.vehiculos.forEach(
      (v) => {
        // si no se destruyó
        if (v.scene) {
          cantidadVivos += 1;
          this.renderTexture.draw(v.getVision(), v.x, v.y);
          if (v.barcosAuxiliares && v.barcosAuxiliares.length) {
            v.barcosAuxiliares.forEach(
              (va) => {
                this.renderTexture.draw(va.getVision(), va.x, va.y);
              },
            );
          }
        }
      },
    );
    if (!cantidadVivos) {
      server.enviar(server.EVENTOS.FINALIZAR, { ganador: this.jugadorRemoto.nick });
      this.finalizar(this.jugadorRemoto.nick);
    }
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
      (v) => v.setSeleccionado(v.getId() === id),
    );
  }

  finalizar(ganador) {
    this.scene.start('Resultado', { jugadorLocalNick: this.jugadorLocal.nick, ganador });
  }
}
