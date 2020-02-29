import * as Phaser from 'phaser';
import * as moment from 'moment';


import { GOVehiculo } from './vehiculo';

export class GOPesquero extends GOVehiculo {
  txtPesco: Phaser.GameObjects.Text;

  txtResto: Phaser.GameObjects.Text;

  cantPesca: number=0;

  cantResto: number=0;

  constructor(scene: Phaser.Scene, vehicle: Pesquero, data: any) {
    super(scene, vehicle, data);

    this.cantResto = vehicle.restoPesca;

    this.setData('horaPesca', moment().add(this.getData('tiempoPesca'), 'seconds'));
  }

  public preUpdate(timeElapsed: number, timeLastUpdate: number) {
    super.preUpdate(timeElapsed, timeLastUpdate);
    if (this.getData('tipo') === 'pesquero' && this.getData('vida') <= 0) {
      this.destroy();
      return;
    }

    const cursorKeys = this.scene.input.keyboard.createCursorKeys();

    if (this.getData('tipo') === 'pesquero' && this.x >= this.getData('millaLimite')
    && !(
      cursorKeys.right.isDown
      || cursorKeys.left.isDown
      || cursorKeys.up.isDown
      || cursorKeys.down.isDown
    )) {
      if (moment().add(this.getData('tiempoPesca'), 'seconds').isAfter(this.getData('horaPesca'))) {
        let resto = 1;
        this.cantPesca += 1;
        const millasDiv = Math.trunc(this.x / 100);
        this.cantPesca += millasDiv;
        resto += millasDiv;
        this.setData('horaPesca', moment());
        const pescado = `pescado:${this.cantPesca}`;

        if (this.txtPesco != null && this.txtResto != null) {
          this.txtPesco.destroy();
          this.txtResto.destroy();
        }
        this.txtPesco = this.scene.add.text(16, 16, pescado, { fontSize: '32px', fill: '#FFF' });

        this.cantResto -= resto;
        const restantes = `restantes:${this.cantResto}`;
        this.txtResto = this.scene.add.text(450, 16, restantes, { fontSize: '32px', fill: '#FFF' });
      }
    }
  }
}
