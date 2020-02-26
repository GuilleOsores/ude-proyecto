import * as Phaser from 'phaser';
import * as moment from 'moment';

import { Disparo } from './disparo';

export class Vehicle extends Phaser.GameObjects.Sprite {
  initialRotationSet = false;

  txtPesco: Phaser.GameObjects.Text;

  txtResto: Phaser.GameObjects.Text;

  cantPesca: number=0;

  cantResto: number=0;

  tipo: String;

  ultimoDisparo: moment.Moment[] = [];

  armaSeleccionada = 0;

  constructor(scene: Phaser.Scene, vehicle: VehicleConfiguration, data: any) {
    super(scene, vehicle.x, vehicle.y, vehicle.sprite);
    // agrega las funcionalidades de matter al sprite comun de phaser
    const f = new Phaser.Physics.Matter.Factory(scene.matter.world);
    f.gameObject(this, {}, true);
    scene.add.existing(this);

    this.setDataEnabled();
    Object.keys(data).forEach((k) => this.setData(k, data[k]));

    if (vehicle.sprite === 'policia1') this.setScale(0.6);

    if (data.canBeSelected) {
      this.setInteractive();
      this.scene.events.on('changeBoat', (id) => {
        console.log(this);
        if (data.id === id) {
          this.setData('selected', true);
        } else {
          this.setData('selected', false);
          this.getMatterSprite().setVelocity(0, 0);
        }
      });
    }

    if (vehicle.armas && vehicle.armas.length) {
      this.scene.input.on(Phaser.Input.Events.POINTER_DOWN, this.dispararHandle);
    }

    this.cantResto = vehicle.restoPesca;
    this.tipo = vehicle.tipo;

    this.scene.input.keyboard.on('keydown', this.keyboardHandler);
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

  public preUpdate(timeElapsed: number, timeLastUpdate: number) {
    if (this.getData('tipo') === 'pesquero' && this.getData('vida') <= 0) {
      this.destroy();
      return;
    }
    if (!this.initialRotationSet) {
      this.initialRotationSet = true;
      this.setRotation(Phaser.Math.DegToRad(this.getData('initialRotation')));
    }
    if (!this.getData('selected')) return;

    const cursorKeys = this.scene.input.keyboard.createCursorKeys();
    const angularVelocity = this.getData('angularVelocity') * (timeLastUpdate / 1000);

    if (cursorKeys.right.isDown) {
      this.setRotation(this.rotation + angularVelocity);
    } else if (cursorKeys.left.isDown) {
      this.setRotation(this.rotation - angularVelocity);
    }

    if (cursorKeys.up.isDown) {
      this.getMatterSprite().thrust(this.getData('velocity'));
    } else if (cursorKeys.down.isDown) {
      this.getMatterSprite().thrustBack(this.getData('velocity'));
    }

    if (this.tipo === 'pesquero' && this.x >= this.getData('millaLimite')
    && !(
      cursorKeys.right.isDown
      || cursorKeys.left.isDown
      || cursorKeys.up.isDown
      || cursorKeys.down.isDown
    )) {
      if (!this.getData('horaPesca') || moment().add(this.getData('tiempoPesca'), 'seconds').isAfter(this.getData('horaPesca'))) {
        this.cantPesca += 1;
        const millasDiv = Math.trunc(this.x / 100);
        this.cantPesca += millasDiv;
        this.setData('horaPesca', moment());
        const pescado = `pescado:${this.cantPesca}`;

        if (this.txtPesco != null && this.txtResto != null) {
          this.txtPesco.destroy();
          this.txtResto.destroy();
        }
        this.txtPesco = this.scene.add.text(16, 16, pescado, { fontSize: '32px', fill: '#FFF' });

        this.cantResto -= this.cantPesca;
        const restantes = `restantes:${this.cantResto}`;
        this.txtResto = this.scene.add.text(450, 16, restantes, { fontSize: '32px', fill: '#FFF' });
      }
    }
  }

  keyboardHandler = (event: KeyboardEvent) => {
    if (this.getData('armas')) {
      const armas = this.getData('armas');
      if (armas[event.keyCode - 49]) this.armaSeleccionada = event.keyCode - 49;
    }
  }

  dispararHandle = () => {
    if (this.getData('selected')) {
      const armas = <Arma[]> this.getData('armas');
      const arma = armas[this.armaSeleccionada];
      if (!this.ultimoDisparo[this.armaSeleccionada] || moment().add(-arma.cadencia, 'seconds').isAfter(moment(this.ultimoDisparo[0]))) {
        this.disparo(arma);
        this.ultimoDisparo[this.armaSeleccionada] = moment();
      }
    }
  }

  disparo(arma: Arma) {
    const radianes = (Math.abs(this.rotation) + Math.PI / 2) % (Math.PI * 2);
    const posRelativaX = (this.width / 2 + 30) * Math.sin(radianes);
    const posRelativaY = (this.height / 2 + 30) * Math.cos(radianes);

    // eslint-disable-next-line no-new
    new Disparo(
      this.getMatterSprite().world,
      this.x + posRelativaX,
      this.y + posRelativaY,
      arma,
      this.rotation,
    );
    this.scene.sound.play(arma.sonido);
  }
}
