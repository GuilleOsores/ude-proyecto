import * as Phaser from 'phaser';
import * as moment from 'moment';
// eslint-disable-next-line no-unused-vars

export class GOTormenta extends Phaser.GameObjects.Container {
  
  tween: Phaser.Tweens.Tween;

  intervaloTormenta: number;

  duracionTormenta: number;

  sceneConfig: SceneConfiguration = require('../../mock/scene.json');

  tornados: Phaser.GameObjects.Sprite[]=[];
  constructor(scene: Phaser.Scene, sprite: string) {
    super(scene);
    let cantidadTornados = (Math.random()*100).toFixed(0);
    console.log('cantidad tornados: '+cantidadTornados)
    for(let i=0; i<new Number(cantidadTornados); i++){
      const x= (Math.random()*100000)%3200;
      const y=(Math.random()*100000)%3200;
      //this.tornados[i]=new Phaser.GameObjects.Sprite(scene, x, y, sprite);
      const tornado = new Phaser.GameObjects.Sprite(scene, x, y, sprite);
      this.add(tornado);
      console.log('i: '+i);
    }

    scene.add.existing(this);
    
    
    /*const f = new Phaser.Physics.Matter.Factory(scene.matter.world);
    f.gameObject(this, { isStatic: true }, true);
    scene.add.existing(this);

    this.intervaloTormenta = this.sceneConfig.tormentaIntervalo;
    this.duracionTormenta = this.sceneConfig.tormentaDuracion;

    this.tween = this.scene.tweens.add({
      targets: this.getMatterSprite(),
      y: 300,
      repeat: -1,
      yoyo: true
    });*/

  }

  getMatterSprite() {
    return (<Phaser.Physics.Matter.Sprite> (<any> this));
  }

  preUpdate(timeElapsed: number, timeLastUpdate: number) {
    
  }

  
}

