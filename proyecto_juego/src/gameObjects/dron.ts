import * as Phaser from 'phaser';
import * as moment from 'moment';
// eslint-disable-next-line no-unused-vars
import { GOPatrulla } from './patrulla';

export class Dron extends Phaser.GameObjects.Sprite {
  initialRotationSet = false;

  arma: Arma;

  destino: {x: number, y: number};

  fechaCreacion: moment.Moment;

  patruya: GOPatrulla;

  sensor: Phaser.GameObjects.Arc;

  regresando: boolean;

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    toX: number,
    toY: number,
    arma: Arma,
    rotacion: number,
    patruya: GOPatrulla,
  ) {
    super(scene, x, y, arma.sprite);

    this.sensor = new Phaser.GameObjects.Arc(scene, x, y, 200);
    scene.add.existing(this.sensor);
    const f = new Phaser.Physics.Matter.Factory(scene.matter.world);
    // f.gameObject(this, { isSensor: true, circleRadius: 400 }, true);
    // this.body1 = this.body;
    f.gameObject(this.sensor, { circleRadius: 200, isSensor: true });
    f.gameObject(this, {}, true);
    this.setScale(0.3);
    scene.add.existing(this);

    this.arma = arma;
    this.patruya = patruya;
    this.destino = { x: toX, y: toY };
    this.setRotation(rotacion);


    this.scene.tweens.add({
      targets: this.getMatterSprite(),
      props: {
        x: toX,
        y: toY,
      },
      duration: 3500,
    });

    this.fechaCreacion = moment();
    this.scene.matter.world.on('collisionstart', this.collisionHandler);
  }

  preUpdate(timeElapsed: number, timeLastUpdate: number) {
    (<any> this.sensor.body).position.x = (<any> this.body).position.x;
    (<any> this.sensor.body).position.y = (<any> this.body).position.y;

    // si termino el ttl, tiene que volver al barco
    if (moment().add(-this.arma.ttl, 'seconds').isAfter(this.fechaCreacion)) {
      this.regresando = true;
      const rotacion = Phaser.Math.Angle.Between(this.x, this.y, this.patruya.x, this.patruya.y);
      const velocidadAngular = this.arma.velocidadAngular * (timeLastUpdate / 1000);
      // arreglar que rote para el lado que tenga que rotar menos
      if (Math.abs(Math.abs(rotacion) - Math.abs(this.rotation)) > velocidadAngular) {
        this.setRotation(this.rotation > rotacion ? this.rotation - velocidadAngular : this.rotation + velocidadAngular);
      } else {
        this.getMatterSprite().thrust(this.arma.velocidad);
      }
    }
  }

  getMatterSprite() {
    return (<Phaser.Physics.Matter.Sprite> (<any> this));
  }

  collisionHandler = (
    _event: Phaser.Physics.Matter.Events.CollisionStartEvent,
    bodyA: any,
    bodyB: any,
  ) => {
    if (
      this.regresando
      && bodyA.gameObject && bodyB.gameObject
      && (bodyA.gameObject === this.patruya || bodyA.gameObject === this)
      && (bodyB.gameObject === this.patruya || bodyB.gameObject === this)
    ) {
      this.sensor.destroy();
      if (bodyA.gameObject === this) {
        bodyA.gameObject.destroy();
      } else {
        bodyB.gameObject.destroy();
      }
    }
  }
}
