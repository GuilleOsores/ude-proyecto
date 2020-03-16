import * as Phaser from 'phaser';

import * as server from '../server';
// eslint-disable-next-line no-unused-vars
import { Game } from '../scenes/game';

export class GOVehiculo extends Phaser.GameObjects.Sprite {
  private id;

  private initialRotationSet = false;

  private vision: Phaser.GameObjects.Sprite;

  private spriteLateral: Phaser.GameObjects.Sprite;

  private vehiculo: Pesquero | Patrulla;

  constructor(scene: Phaser.Scene, vehicle: Pesquero | Patrulla, data: any) {
    super(scene, vehicle.x, vehicle.y, vehicle.sprite);

    this.vehiculo = vehicle;

    this.spriteLateral = new Phaser.GameObjects.Sprite(
      scene, vehicle.x, vehicle.y, vehicle.spriteLateralInicial,
    );
    this.scene.add.existing(this.spriteLateral);
    this.scene.cameras.main.ignore(this.spriteLateral);
    this.scene.cameras.getCamera('camaraLateral').ignore(this);

    this.id = vehicle.id;
    // agrega las funcionalidades de matter al sprite comun de phaser
    const f = new Phaser.Physics.Matter.Factory(scene.matter.world);
    f.gameObject(this, {}, true);
    scene.add.existing(this);
    this.play(vehicle.sprite);

    this.vision = new Phaser.GameObjects.Sprite(scene, 0, 0, 'vision');
    f.gameObject(this.vision, { isSensor: true, circleRadius: this.vision.width / 2 }, true);

    this.setDataEnabled();
    Object.keys(data).forEach((k) => this.setData(k, data[k]));

    if (data.canBeSelected) {
      this.setInteractive();
    }


    server.addhandler(server.EVENTOS.MOVER_BARCO, this.muevoBarcoHandler);
  }

  getMatterSprite() {
    return (<Phaser.Physics.Matter.Sprite> (<any> this));
  }

  public create() {
    if (this.getData('canBeSelected')) {
      this.setInteractive();
      this.scene.events.on('changeBoat', (id) => {
        if (this.getData('id') === id) {
          this.setData('selected', true);
        } else {
          this.setData('selected', false);
          this.getMatterSprite().setVelocity(0, 0);
        }
      });
    }
    this.setRotation(Phaser.Math.DegToRad(this.getData('initialRotation')));
  }

  muevoBarcoHandler = (data) => {
    if (this.getData('nick') === data.nick && this.getData('id') === data.id) {
      this.x = data.x;
      this.y = data.y;
      this.setRotation(data.rotacion);
    }
  }

  public preUpdate(timeElapsed: number, timeLastUpdate: number) {
    super.preUpdate(timeElapsed, timeLastUpdate);
    this.vision.setPosition(this.x, this.y);
    if (!this.initialRotationSet) {
      this.initialRotationSet = true;
      this.setRotation(Phaser.Math.DegToRad(this.getData('initialRotation')));
    }

    // actualizo el sprite lateral
    this.spriteLateral.setTexture(this.vehiculo.spritesLaterales.u);
    const ratioY = this.y / ((<Game> this.scene).sceneConfig.height - this.spriteLateral.height);
    const ratioX = this.x / ((<Game> this.scene).sceneConfig.width - this.spriteLateral.width);
    const spriteLateralY = (this.scene.cameras.getCamera('camaraLateral').height - this.spriteLateral.height) * ratioY + this.spriteLateral.height / 2;
    const spriteLateralX = ((this.scene.cameras.getCamera('camaraLateral').width - this.spriteLateral.displayWidth) * ratioX) + (this.spriteLateral.displayWidth / 2);
    this.spriteLateral.setX(spriteLateralX);
    this.spriteLateral.setY(spriteLateralY);
    const spriteLateralScale = 0.9 * ratioY;
    this.spriteLateral.setScale(0.1 + spriteLateralScale, 0.1 + spriteLateralScale);
    this.spriteLateral.setDepth(this.y);
    // PI / 2 es arriba
    const rotacion = Math.abs(this.rotation % (Math.PI * 2));
    if (rotacion >= Math.PI / 4 && rotacion < (Math.PI / 4) * 3) {
      this.spriteLateral.setTexture(this.vehiculo.spritesLaterales.u);
    } else if (rotacion >= (Math.PI / 4) * 3 && rotacion < Math.PI + Math.PI / 4) {
      this.spriteLateral.setTexture(this.vehiculo.spritesLaterales.l);
    } else if (rotacion >= Math.PI + Math.PI / 4 && rotacion < (Math.PI / 4) * 3 + Math.PI) {
      this.spriteLateral.setTexture(this.vehiculo.spritesLaterales.d);
    } else if (rotacion >= (Math.PI / 4) * 3 + Math.PI || rotacion < Math.PI / 4) {
      this.spriteLateral.setTexture(this.vehiculo.spritesLaterales.r);
    }
    // fin actualizo el sprite lateral

    if (!this.getData('selected')) return;

    const cursorKeys = this.scene.input.keyboard.createCursorKeys();
    const angularVelocity = this.getData('angularVelocity') * (timeLastUpdate / 1000);

    if (cursorKeys.right.isDown) {
      this.setRotation(this.rotation
        + (cursorKeys.down.isDown ? -angularVelocity : angularVelocity));
    } else if (cursorKeys.left.isDown) {
      this.setRotation(this.rotation
        - (cursorKeys.down.isDown ? -angularVelocity : angularVelocity));
    }

    if (cursorKeys.up.isDown) {
      this.getMatterSprite().thrust(this.getData('velocity'));
      if (this.getData('combustibleActual')) this.setData('combustibleActual', this.getData('combustibleActual') - this.getData('gastoCombustible'));
    } else if (cursorKeys.down.isDown) {
      this.getMatterSprite().thrustBack(this.getData('velocity'));
      if (this.getData('combustibleActual')) this.setData('combustibleActual', this.getData('combustibleActual') - this.getData('gastoCombustible'));
    }

    if (this.getData('sendToServer')) {
      server.enviar(server.EVENTOS.MOVER_BARCO, {
        nick: this.getData('nick'), id: this.id, x: this.x, y: this.y, rotacion: this.rotation,
      });
    }
  }

  public getId = () => this.id;

  public setSeleccionado = (estaSeleccionado) => {
    this.setData('selected', estaSeleccionado);
    if (estaSeleccionado) this.scene.cameras.main.startFollow(this);
  }

  public getVision = () => this.vision;

  public destroy() {
    if (this.getData('selected') && this.scene && this.scene.cameras && this.scene.cameras.main) {
      this.scene.cameras.main.stopFollow();
    }
    this.vision.destroy();
    this.spriteLateral.destroy();
    super.destroy();
  }

  getVehiculo = () => this.vehiculo;
}
