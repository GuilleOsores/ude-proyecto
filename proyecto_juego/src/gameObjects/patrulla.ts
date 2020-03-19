import * as Phaser from 'phaser';
import * as moment from 'moment';

import * as server from '../server';
import { GOVehiculo } from './vehiculo';
import { Disparo } from './disparo';
import { Dron } from './dron';
import { Mensaje } from './mensaje';

export class GOPatrulla extends GOVehiculo {
  ultimoDisparo: moment.Moment[] = [];

  armaSeleccionada = 0;

  yendoAlMuelle = false;

  barcosAuxiliares: Dron[] = [];

  armasHabilitadas: Boolean = true;

  hayTormenta: Boolean

  private bateria: Phaser.GameObjects.Text;

  constructor(scene: Phaser.Scene, vehicle: Patrulla, data: any) {
    super(scene, vehicle, data);
    this.setData('combustibleActual', data.combustibleMaximo);

    if (vehicle.sprite === 'policia1') this.setScale(0.6);

    if (vehicle.armas && vehicle.armas.length) {
      this.scene.input.on(Phaser.Input.Events.POINTER_DOWN, this.dispararHandle);
      this.scene.input.keyboard.on('keydown', this.keyboardHandler);
    }
    server.addhandler(server.EVENTOS.DISPARO, this.disparoHandler);
    this.scene.matter.world.on('collisionstart', this.collisionHandler);


    this.bateria = this.scene.add.text(this.x, this.y, '',
      { font: 'bold 20px Arial', color: '#007f00' });
    scene.add.existing(this.bateria);
    this.bateria.setOrigin(0.5, -1.9);
    this.scene.cameras.getCamera('camaraLateral').ignore(this.bateria);
    this.scene.cameras.getCamera('minimap').ignore(this.bateria);
  }

  collisionHandler = (
    _event: Phaser.Physics.Matter.Events.CollisionStartEvent,
    bodyA: any,
    bodyB: any,
  ) => {
    if (bodyA.gameObject && bodyB.gameObject
      && (bodyA.gameObject === this.getVision() || bodyB.gameObject === this.getVision())
      && ((bodyA.gameObject.getData && bodyA.gameObject.getData('tipo') === 'pesquero')
      || (bodyB.gameObject.getData && bodyB.gameObject.getData('tipo') === 'pesquero'))
    ) {
      this.scene.matter.world.removeListener('collisionstart', this.collisionHandler);
      const { width, height } = this.scene.game.canvas;
      // eslint-disable-next-line no-new
      new Mensaje(
        this.scene, width / 2, height - 300, 5000, () => { this.armasHabilitadas = true; },
      );
    }
    this.hayTormenta = false;
  }

  disparoHandler = (data) => {
    if (data.id !== this.getData('id')) return;

    if (data.arma.tipo === 'disparo') {
      // eslint-disable-next-line no-new
      new Disparo(
        this.scene,
        data.x,
        data.y,
        data.arma,
        this.rotation,
      );
      this.scene.sound.play(data.arma.sonido);
    } else {
      // eslint-disable-next-line no-new
      new Dron(
        this.scene,
        data.x,
        data.y,
        data.pointer.x,
        data.pointer.y,
        data.arma,
        this.rotation,
        this,
      );
    }
  }

  preUpdate(timeElapsed: number, timeLastUpdate: number) {
    if (this.getData('combustibleActual') <= 0) {
      if (this.yendoAlMuelle) {
        if (this.getData('sendToServer')) {
          server.enviar(server.EVENTOS.MOVER_BARCO, {
            nick: this.getData('nick'), id: this.getVehiculo().id, x: this.x, y: this.y, rotacion: this.rotation,
          });
        }
      }
      if (!this.yendoAlMuelle) this.irAlMuelle();
      return;
    }
    super.preUpdate(timeElapsed, timeLastUpdate);

    this.scene.events.on('inicioTormenta', () => {
      if (this.getData('sprite') === 'policia2') {
        // console.log('deshabilito policia chico');
        this.hayTormenta = true;
      }
    });

    this.scene.events.on('finTormenta', () => {
      if (this.getData('sprite') === 'policia2') {
        // console.log('habilito policia chico');
        this.hayTormenta = false;
      }
    });

    const maximo = this.getData('combustibleMaximo');
    const porcentajeUno = maximo / 100;
    const porcentajeComb = this.getData('combustibleActual') / porcentajeUno;
    const mostrar = `${porcentajeComb.toFixed(1)}%`;
    this.bateria.setText(mostrar);
    this.bateria.setPosition(this.x, this.y);
  }

  keyboardHandler = (event: KeyboardEvent) => {
    if (this.getData('armas')) {
      const armas = this.getData('armas');
      if (!event.shiftKey && armas[event.keyCode - 49]) this.armaSeleccionada = event.keyCode - 49;
    }
  }

  dispararHandle = (pointer: Phaser.Input.Pointer) => {
    if (this.getData('selected') && !this.hayTormenta && this.getData('millaLimite') < this.y) {
      const armas = <Arma[]> this.getData('armas');
      const arma = armas[this.armaSeleccionada];
      if (this.armasHabilitadas && (!this.ultimoDisparo[this.armaSeleccionada] || moment().add(-arma.cadencia, 'seconds').isAfter(moment(this.ultimoDisparo[this.armaSeleccionada])))) {
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
    const posRelativaX = (this.displayWidth / 2 + 50) * Math.sin(radianes);
    const posRelativaY = (this.displayHeight / 2 + 50) * Math.cos(radianes);

    if (arma.tipo === 'disparo') {
      // eslint-disable-next-line no-new
      new Disparo(
        this.scene,
        this.x + posRelativaX,
        this.y + posRelativaY,
        arma,
        this.rotation,
      );
      server.enviar(server.EVENTOS.DISPARO, {
        id: this.getData('id'),
        x: this.x + posRelativaX,
        y: this.y + posRelativaY,
        arma,
      });
      this.scene.sound.play(arma.sonido);
    } else if (!this.barcosAuxiliares[arma.id]) {
      const { x, y } = this.scene.cameras.main.getWorldPoint(pointer.x, pointer.y);
      const rotacion = Phaser.Math.Angle.Between(this.x, this.y, x, y);
      // eslint-disable-next-line no-new
      const d = new Dron(
        this.scene,
        this.x + posRelativaX,
        this.y + posRelativaY,
        x,
        y,
        arma,
        rotacion,
        this,
      );
      this.barcosAuxiliares[arma.id] = d;
      server.enviar(server.EVENTOS.DISPARO, {
        id: this.getData('id'),
        x: this.x + posRelativaX,
        y: this.y + posRelativaY,
        pointer: {
          x,
          y,
        },
        arma,
      });
    }
  }

  recargarCombustible = (cantidad) => {
    const combustibleActual = this.getData('combustibleActual');
    if (this.getData('combustibleMaximo') > combustibleActual) {
      this.setData('combustibleActual', combustibleActual + cantidad);
      if (this.getData('sendToServer')) {
        server.enviar(server.EVENTOS.COMBUSTIBLE, {
          nick: this.getData('nick'),
          id: this.getVehiculo().id,
          combustible: combustibleActual + cantidad,
        });
      }
    }
  }

  irAlMuelle = () => {
    this.yendoAlMuelle = true;
    const muelle = <Phaser.GameObjects.Sprite> this.getData('muelle');
    const rotacion = Phaser.Math.Angle.Between(this.x, this.y, muelle.x, muelle.y);
    const rotacionDuracion = Math.abs((this.rotation + rotacion) % (Math.PI * 2)) / (this.getData('angularVelocity') / 1000);
    const distancia = Math.abs(Phaser.Math.Distance.Between(this.x, this.y, muelle.x, muelle.y));
    const tiempoDistancia = distancia / 0.1;

    this.scene.tweens.add({
      targets: this,
      props: {
        rotation: rotacion,
      },
      duration: rotacionDuracion,
      onComplete: () => this.scene.tweens.add({
        targets: this,
        props: {
          x: muelle.x,
          y: muelle.y,
        },
        duration: tiempoDistancia,
        onComplete: () => { this.yendoAlMuelle = false; },
      }),
    });
  }
}
