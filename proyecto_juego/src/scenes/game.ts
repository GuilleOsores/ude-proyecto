import * as Phaser from 'phaser';

// eslint-disable-next-line no-unused-vars
import { GOVehiculo } from '../gameObjects/vehiculo';
import { GOPesquero } from '../gameObjects/pesquero';
import { GOPatrulla } from '../gameObjects/patrulla';
import { Muelle } from '../gameObjects/muelle';
import { agregarAgua } from '../gameObjects/agua';
import { GOTormenta } from '../gameObjects/tormenta';


export class Game extends Phaser.Scene {
  minimap: Phaser.Cameras.Scene2D.Camera;

  sceneConfig: SceneConfiguration;

  txtPescadoTotal: Phaser.GameObjects.Text;
  nieblaDeGuerra: Phaser.GameObjects.Rectangle;

  renderTexture: Phaser.GameObjects.RenderTexture;

  tormentaActiva: Phaser.GameObjects.Group;

  totalSeconds = 0;

  tormentas: Tormenta[];
  
  jugadorLocal: {
    nick: string,
    vehiculos: GOPesquero[] | GOPatrulla[],
    pescados: number,
  } = { nick: 'player2', vehiculos: [], pescados: 0 };

  constructor() {
    super('Game');
  }

  public init(data: any) {
    this.sceneConfig = data;
    this.jugadorLocal.nick = data.nick;
  }

  public preload() {
    this.anims.create({
      key: 'policia1',
      frames: this.anims.generateFrameNumbers('policia1', {
        start: 0,
        end: 1,
      }),
      frameRate: 3,
      repeat: -1,
    });

    this.anims.create({
      key: 'policia2',
      frames: this.anims.generateFrameNumbers('policia2', {
        start: 0,
        end: 1,
      }),
      frameRate: 3,
      repeat: -1,
    });

    this.anims.create({
      key: 'pesquero1',
      frames: this.anims.generateFrameNumbers('pesquero1', {
        start: 0,
        end: 1,
      }),
      frameRate: 3,
      repeat: -1,
    });

    this.anims.create({
      key: 'pesquero2',
      frames: this.anims.generateFrameNumbers('pesquero2', {
        start: 0,
        end: 1,
      }),
      frameRate: 3,
      repeat: -1,
    });
    this.anims.create({
      key: 'patrulla-auxiliar',
      frames: this.anims.generateFrameNumbers('patrulla-auxiliar', {
        start: 0,
        end: 1,
      }),
      frameRate: 3,
      repeat: -1,
    });
    this.anims.create({
      key: 'patrulla-helicoptero',
      frames: this.anims.generateFrameNumbers('patrulla-helicoptero', {
        start: 0,
        end: 1,
      }),
      frameRate: 3,
      repeat: -1,
    });

    this.anims.create({
      key: 'tormenta',
      frames: this.anims.generateFrameNumbers('tormenta', {
        start: 0,
        end: 3,
      }),
      frameRate: 3,
      yoyo: false,
      repeat: -1,
    });
  }

  tormentaEnTiempo=false

  
  public create() { 
    
    this.matter.world.setBounds(0, 0, this.sceneConfig.width, this.sceneConfig.height);
    this.cameras.main.setBounds(0, 0, this.sceneConfig.width, this.sceneConfig.height);

    const agua = agregarAgua(this, this.sceneConfig.width, this.sceneConfig.height);

    // camara minimapa
    this.minimap = this.cameras.add(0, 0, 210, this.sceneConfig.height * (210 / this.sceneConfig.width), false, 'minimap');
    this.minimap.setZoom(200 / (this.sceneConfig.width * 2));
    this.minimap.ignore(agua);

    // cosas locas para la niebla de guerra
    /*this.nieblaDeGuerra = this.add.rectangle(
      0, 0, this.sceneConfig.width, this.sceneConfig.height, 0x00000000,
    ).setOrigin(0, 0).setDepth(100);

    this.renderTexture = new Phaser.GameObjects.RenderTexture(
      this, 0, 0, this.sceneConfig.width, this.sceneConfig.height,
    );
    this.renderTexture.setOrigin(0, 0);
    const maskImage = this.make.image({
      x: 0, y: 0, key: this.renderTexture.texture.key, add: false,
    });
    maskImage.setOrigin(0, 0);
    this.nieblaDeGuerra.mask = new Phaser.Display.Masks.BitmapMask(this, maskImage);
    this.nieblaDeGuerra.mask.invertAlpha = true;*/
    // fin cosas locas para la niebla de guerra

    // linea pesca
    this.add.graphics({
      fillStyle: { color: 0xFF0000 },
    }).fillRect(0, this.sceneConfig.millaLimite, this.sceneConfig.width, 1);

    // eslint-disable-next-line no-new
    const muelle = new Muelle(this, this.sceneConfig.width / 2, this.sceneConfig.height, 'puerto');

    this.txtPescadoTotal = this.add.text(600, 16, 'Total: 0', { fontSize: '28px', fill: '#FFF' });
    this.txtPescadoTotal.setScrollFactor(0);
    this.txtPescadoTotal.setDepth(150);
    this.sceneConfig.jugadores.forEach(
      (p) => {
        p.vehiculos.forEach(
          (v, i) => {
            const data = {
              ...v,
              nick: p.nick,
              sendToServer: p.nick === this.jugadorLocal.nick,
              canBeSelected: p.nick === this.jugadorLocal.nick,
              selected: i === 0 && p.nick === this.jugadorLocal.nick,
              millaLimite: this.sceneConfig.millaLimite,
            };
            if (v.tipo === 'patruya') data.muelle = muelle;

            // eslint-disable-next-line no-new
            const ve = v.tipo === 'pesquero' ? new GOPesquero(this, v, data) : new GOPatrulla(this, v, data);
            if (data.selected) {
              this.cameras.main.startFollow(ve);
            }
            if (p.nick === this.jugadorLocal.nick) {
              this.jugadorLocal.vehiculos.push(<any>ve);
            }
          },
        );
      },
    );

    this.input.on('gameobjectdown', (pointer, gameObject: Phaser.GameObjects.GameObject) => {
      const id = gameObject.getData('id');
      this.seleccionarBarco(id);
    });

    this.input.keyboard.on('keydown', this.keyboardHandler);

    
    this.events.on('countfish', () => {
      this.jugadorLocal.pescados=0;
      var i;
      for (i = 0; i < this.jugadorLocal.vehiculos.length; i++) {
        this.jugadorLocal.pescados += (<GOPesquero>this.jugadorLocal.vehiculos[i]).cantPesca;
      }

      this.txtPescadoTotal.setText('Total: '+ this.jugadorLocal.pescados);

      console.log('countfish');
      
    });

    this.tormentas = this.sceneConfig.tormentas;
   
    setInterval(() => {
    ++this.totalSeconds;
    console.log(this.totalSeconds);

    let torm=null;
    let i=0;
    let encontro=false;
    this.tormentaEnTiempo=true;
    while(i<this.tormentas.length && !encontro){
      let fin =this.tormentas[i].tormentaDuracion+this.tormentas[i].tormentaInicio;
      if(this.totalSeconds==this.tormentas[i].tormentaInicio){
        torm = this.tormentas[i];
        encontro=true;
      }else if(this.totalSeconds>=fin){
        this.tormentaEnTiempo=false;
        this.tormentas.splice(i, 1);
      }

      i++;
      
    }
    
     if(encontro){
      this.tormentaActiva = new GOTormenta(this, 'tormenta');
      console.log('entro: '+this.totalSeconds);
      this.events.emit('inicioTormenta');
    }else if(this.tormentaActiva && !this.tormentaEnTiempo){
        this.tormentaActiva.getChildren().forEach(
          (t)=> t.destroy()
        )
        this.tormentaActiva.destroy();
        this.tormentaActiva=null; 

        console.log('elimino: '+this.totalSeconds);

        this.events.emit('finTormenta');
    } 
    }, 1000);
  }

  /*timeElapsedInicial=null;
  entro=false;
  verificarTormenta(timeElapsed){
    const tormenta = this.sceneConfig.tormentas.find((t)=>{
     //console.log('timeElapsed ', timeElapsed, ' , ', timeElapsed/1000>t.tormentaInicio && timeElapsed/1000<t.tormentaInicio);
      if(timeElapsed/1000>t.tormentaInicio && timeElapsed/1000<t.tormentaInicio+t.tormentaDuracion){
        return t;
      }

      return null;
    });
    if(tormenta && !this.entro){
      this.entro=true;
      this.tormentaActiva = new GOTormenta(this, 'tormenta');
      console.log('entro');
    }else if(this.tormentaActiva){
        this.tormentaActiva.getChildren().forEach(
          (t)=> t.destroy()
        )
        this.tormentaActiva.destroy();
        this.tormentaActiva=null;
        this.entro=false;
       
    }
  }*/


  public update(timeElapsed: number, timeLastUpdate: number) {
    /*if(!this.timeElapsedInicial){
        this.timeElapsedInicial=timeElapsed;
    }

    
    if(timeLastUpdate%0.06===0)
      this.verificarTormenta(timeElapsed-this.timeElapsedInicial);*/
    
    //this.renderTexture.clear();


    this.jugadorLocal.vehiculos.forEach(
      (v) => {
        //this.renderTexture.draw(v.getVision(), v.x, v.y);
        if (v.barcosAuxiliares && v.barcosAuxiliares.length) {
          v.barcosAuxiliares.forEach(
            (va) => {
              //this.renderTexture.draw(va.getVision(), va.x, va.y);
            },
          );
        }
      },
    );
  }

  keyboardHandler = (event: KeyboardEvent) => {
    if (event.shiftKey && this.jugadorLocal.vehiculos[event.keyCode - 49]) {
      this.seleccionarBarco(event.keyCode - 49 + 1);
    }
  }

  seleccionarBarco = (id) => {
    (<GOVehiculo[]> this.jugadorLocal.vehiculos).forEach(
      (v) => v.setSeleccionado(v.getId() === id),
    );
  }
}
