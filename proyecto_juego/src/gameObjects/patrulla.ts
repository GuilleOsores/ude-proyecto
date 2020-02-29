import * as Phaser from 'phaser';
import * as moment from 'moment';

import { GOVehiculo } from './vehiculo';
import { Disparo } from './disparo';
import { Dron } from './dron';

export class GOPatrulla extends GOVehiculo {
  ultimoDisparo: moment.Moment[] = [];

  armaSeleccionada = 0;

  constructor(scene: Phaser.Scene, vehicle: Patrulla, data: any) {
    super(scene, vehicle, data);

    if (vehicle.sprite === 'policia1') this.setScale(0.6);

    if (vehicle.armas && vehicle.armas.length) {
      this.scene.input.on(Phaser.Input.Events.POINTER_DOWN, this.dispararHandle);
      this.scene.input.keyboard.on('keydown', this.keyboardHandler);
    }
  }

  keyboardHandler = (event: KeyboardEvent) => {
    if (this.getData('armas')) {
      const armas = this.getData('armas');
      if (!event.shiftKey && armas[event.keyCode - 49]) this.armaSeleccionada = event.keyCode - 49;
    }
  }

  dispararHandle = (pointer: Phaser.Input.Pointer) => {
    if (this.getData('selected')) {
      const armas = <Arma[]> this.getData('armas');
      const arma = armas[this.armaSeleccionada];
      if (!this.ultimoDisparo[this.armaSeleccionada] || moment().add(-arma.cadencia, 'seconds').isAfter(moment(this.ultimoDisparo[this.armaSeleccionada]))) {
        this.disparo(arma, pointer);
        this.ultimoDisparo[this.armaSeleccionada] = moment();
      }
    }
  }

  // trigonometria no es la mejor opcion pero fue la que se me ocurrio
  disparo(arma: Arma, pointer: Phaser.Input.Pointer) {
    const rotacionAntihoraria = (this.rotation - (Math.PI / 2)) * -1;
    const rotacionPositiva = rotacionAntihoraria >= 0
      ? rotacionAntihoraria % (Math.PI * 2) : (Math.PI * 2) + (rotacionAntihoraria % (Math.PI * 2));
    const radianes = (rotacionPositiva) % (Math.PI * 2);
    const posRelativaX = (this.width / 2 + 30) * Math.sin(radianes);
    const posRelativaY = (this.height / 2 + 30) * Math.cos(radianes);

    // console.log(`Rotation: ${rotacionAntihoraria}`);
    // console.log(`Rotacion: ${rotacionPositiva}`);
    // console.log(`radianes calculados: ${radianes}`);
    // console.log(`posRelativaX: ${posRelativaX} || posRelativaY: ${posRelativaY}`);
    if (arma.tipo === 'disparo') {
      // eslint-disable-next-line no-new
      new Disparo(
        this.scene,
        this.x + posRelativaX,
        this.y + posRelativaY,
        arma,
        this.rotation,
      );
      this.scene.sound.play(arma.sonido);
    } else {
      // eslint-disable-next-line no-new
      new Dron(
        this.scene,
        this.x + posRelativaX,
        this.y + posRelativaY,
        pointer.x,
        pointer.y,
        arma,
        this.rotation,
      );
    }
  }
}
