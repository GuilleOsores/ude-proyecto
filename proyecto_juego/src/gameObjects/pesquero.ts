// eslint-disable-next-line no-unused-vars
import * as Phaser from 'phaser';
import * as moment from 'moment';


import { GOVehiculo } from './vehiculo';

export class GOPesquero extends GOVehiculo {
  txtPesco: Phaser.GameObjects.Text;

  cantPesca: number=0;

  pasoMilla: boolean;

  constructor(scene: Phaser.Scene, vehicle: Pesquero, data: any) {
    super(scene, vehicle, data);

    this.setData('horaPesca', moment().add(this.getData('tiempoPesca'), 'seconds'));

    if (data.nick === data.jugadorLocal.nick) {
      this.txtPesco = this.scene.add.text(16, 20 * vehicle.id, '', { fontSize: '20px', fill: '#FFF' });
      this.txtPesco.setScrollFactor(0);
      this.txtPesco.setDepth(150);
      this.scene.cameras.getCamera('camaraLateral').ignore(this.txtPesco);
      this.scene.cameras.getCamera('minimap').ignore(this.txtPesco);

      this.pasoMilla = false;
    }
  }

  public preUpdate(timeElapsed: number, timeLastUpdate: number) {
    super.preUpdate(timeElapsed, timeLastUpdate);
    if (this.getData('vida') <= 0) {
      super.destroy();
      return;
    }

    const cursorKeys = this.scene.input.keyboard.createCursorKeys();

    if (this.getData('nick') === this.getData('jugadorLocal').nick) {
      if (this.y < this.getData('millaLimite') && this.pasoMilla) {
        this.scene.events.emit('countfish', this.cantPesca);
        this.cantPesca = 0;
        this.pasoMilla = false;
      }

      if (this.y >= this.getData('millaLimite')
      && (!cursorKeys.up.isDown && !cursorKeys.down.isDown)) {
        if (moment().add(this.getData('tiempoPesca'), 'seconds').isAfter(this.getData('horaPesca'))) {
          this.cantPesca += 1;
          const millasDiv = Math.trunc(this.y / 100);
          this.cantPesca += millasDiv;
          this.setData('horaPesca', moment());
          this.pasoMilla = true;
        }
      }
      const pescado = `Barco ${this.getData('id')} pescado:${this.cantPesca}`;
      this.txtPesco.text = pescado;
    }
  }
}
