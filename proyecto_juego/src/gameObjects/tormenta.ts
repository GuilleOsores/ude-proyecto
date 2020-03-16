import * as Phaser from 'phaser';

export class GOTormenta extends Phaser.GameObjects.Container {
  tornados: Phaser.GameObjects.Sprite[]=[];

  constructor(scene: Phaser.Scene, sprite: string) {
    super(scene);
    const cantidadTornados = Math.round((Math.random() * 100)) + 1;
    console.log(`cantidad tornados: ${cantidadTornados}`);
    for (let i = 0; i < cantidadTornados; i += 1) {
      const x = (Math.random() * 100000) % 3200;
      const y = (Math.random() * 100000) % 3200;
      const tornado = new Phaser.GameObjects.Sprite(scene, x, y, sprite).play('tormenta').setScale(0.3, 0.3);
      this.add(tornado);
    }

    scene.add.existing(this);
    this.scene.cameras.getCamera('minimap').ignore(this);
    this.scene.cameras.getCamera('camaraLateral').ignore(this);
  }
}
