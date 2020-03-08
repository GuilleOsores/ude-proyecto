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

    this.txtPesco = this.scene.add.text(16, 20*vehicle.id, '', { fontSize: '20px', fill: '#FFF' });
    this.txtPesco.setScrollFactor(0); 

    this.pasoMilla = false;
  
  }

  public preUpdate(timeElapsed: number, timeLastUpdate: number) {
    super.preUpdate(timeElapsed, timeLastUpdate);
    if (this.getData('tipo') === 'pesquero' && this.getData('vida') <= 0) {
      this.destroy();
      return;
    }

    const cursorKeys = this.scene.input.keyboard.createCursorKeys();

    if (this.getData('tipo') === 'pesquero' && this.y < this.getData('millaLimite') && this.pasoMilla) {
      this.scene.events.emit('countfish');
      this.pasoMilla = false;
    }

    if (this.getData('tipo') === 'pesquero' && this.y >= this.getData('millaLimite')
    && (cursorKeys.up.isDown || cursorKeys.down.isDown)) {
      if (moment().add(this.getData('tiempoPesca'), 'seconds').isAfter(this.getData('horaPesca'))) {
        let resto = 1;
        this.cantPesca += 1;
        const millasDiv = Math.trunc(this.x / 100);
        this.cantPesca += millasDiv;
        resto += millasDiv;
        this.setData('horaPesca', moment());
        const pescado = `\n Barco ${this.getData('id')} pescado:${this.cantPesca} \n`;
        this.txtPesco.text = pescado;
        this.pasoMilla = true;
      }
    }
  }
}
