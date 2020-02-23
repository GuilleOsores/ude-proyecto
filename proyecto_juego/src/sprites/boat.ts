import * as Phaser from 'phaser';
import { am } from '../main';
import { getVelocity, getRotation } from '../common/movement';

export const createBoatsAnimations = (scene: Phaser.Scene) => {
  scene.anims.create({
    key: 'barcoDown',
    frames: am.generateFrameNumbers('barco1', {
      start: 0,
      end: 3,
    }),
    frameRate: 3,
    yoyo: false,
    repeat: -1,
  });

  scene.anims.create({
    key: 'barcoUp',
    frames: am.generateFrameNumbers('barco1', {
      start: 12,
      end: 25,
    }),
    frameRate: 3,
    yoyo: false,
    repeat: -1,
  });
};

const update = (
  cursorKeys: Phaser.Types.Input.Keyboard.CursorKeys, sprite: Phaser.Physics.Matter.Sprite, // Phaser.GameObjects.Sprite,
  timeElapsed: number, timeLastUpdate: number,
) => {
  if (!sprite.getData('selected')) return;
  const velocity = sprite.getData('velocity');
  const angularVelocity = sprite.getData('angularVelocity') * (timeLastUpdate / 1000);
  const initialRotation = Phaser.Math.DegToRad(sprite.getData('initialRotation'));

  if (cursorKeys.right.isDown || cursorKeys.left.isDown) {
    const rotation = getRotation(cursorKeys.up.isDown
      || !cursorKeys.down.isDown, cursorKeys.left.isDown, sprite.rotation, angularVelocity);
    sprite.setRotation(rotation);
  }

  let v = { x: 0, y: 0 };
  if (cursorKeys.up.isDown) {
    v = getVelocity(true, sprite.rotation + initialRotation, velocity);
  } else if (cursorKeys.down.isDown) {
    v = getVelocity(false, sprite.rotation + initialRotation, velocity);
  }

  // (<Phaser.Physics.Arcade.Body>sprite.body).setVelocity(v.x, v.y);
  // sprite.setVelocity(v.x, v.y);
  sprite.applyForce(new Phaser.Math.Vector2(v.x, v.y));
};

// export const addBoat = (scene: Phaser.Scene, vehicle: Vehicle, data: any) => {
//   // const sprite = scene.physics.add.sprite(vehicle.x, vehicle.y, vehicle.type);
//   const sprite = scene.matter.add.sprite(vehicle.x, vehicle.y, vehicle.type);
//   // sprite.setCollideWorldBounds(true);
//   // sprite.set
//   // const body = <Phaser.Physics.Arcade.Body> sprite.body;


//   // body.setCollideWorldBounds(true);
//   // body.setSize(50, 130);
//   Object.keys(data).forEach((k) => sprite.setData(k, data[k]));

//   sprite.anims.load(data.normalAnimation);
//   sprite.anims.play(data.normalAnimation);

//   if (data.canBeSelected) {
//     sprite.setInteractive();
//     scene.events.on('changeBoat', (id) => {
//       if (sprite.getData('id') === id) {
//         sprite.setData('selected', true);
//       } else {
//         sprite.setData('selected', false);
//         // body.setVelocity(0, 0);
//         sprite.setVelocity(0, 0);
//       }
//     });
//   }

//   const cursorKeys = scene.input.keyboard.createCursorKeys();
//   scene.events.on('update', (timeElapsed, timeLastUpdate) => update(cursorKeys, sprite, timeElapsed, timeLastUpdate));
//   return sprite;
// };
