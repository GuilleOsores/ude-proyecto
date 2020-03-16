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
    this.scene.cameras.getCamera('minimap').ignore(this);
    this.scene.cameras.getCamera('camaraLateral').ignore(this);

  }

  public create(){
    
  }



  
}

