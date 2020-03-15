import * as Phaser from 'phaser';
import * as moment from 'moment';
// eslint-disable-next-line no-unused-vars

export class GOTormenta extends Phaser.GameObjects.Container {
  
  tornados: Phaser.GameObjects.Sprite[]=[];
  constructor(scene: Phaser.Scene, sprite: string) {
    super(scene);
    let cantidadTornados = (Math.random()*100).toFixed(0);
    while(new Number(cantidadTornados)==0){
      cantidadTornados = (Math.random()*100).toFixed(0);
    }
    console.log('cantidad tornados: '+cantidadTornados)
    for(let i=0; i<new Number(cantidadTornados); i++){
      const x= (Math.random()*100000)%3200;
      const y=(Math.random()*100000)%3200;
      //const tornado = this.scene.add.sprite(x, y, 'tormenta').play('tormenta');
      const tornado = new Phaser.GameObjects.Sprite(scene, x, y, sprite).play('tormenta').setScale(0.3, 0.3);
      this.add(tornado);
      console.log('i: '+i);
    }

    scene.add.existing(this);

    /*this.scene.tweens.add({
      targets: this,
      duration: 6000,
      yoyo: true,
      repeat: -1
  });*/
    
    
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

  public create(){
    
  }



  
}

