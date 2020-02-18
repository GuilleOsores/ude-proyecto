import { am } from '../main';
import { getVelocity, getRotation } from '../common/movement';

export const loadBoat = (scene: Phaser.Scene, id, image) => {
  scene.load.spritesheet(id, image, {
    frameWidth: 208,
    frameHeight: 192,
    margin: 0,
    spacing: 0,
  });
};

const update = (
  cursorKeys: Phaser.Types.Input.Keyboard.CursorKeys, sprite: Phaser.GameObjects.Sprite,
  timeElapsed: number, timeLastUpdate: number,
) => {
  const speed = 100;
  const rotationSpeed = 1 * (timeLastUpdate / 1000);
  const initialRotation = Math.PI / 2;

  if (cursorKeys.right.isDown || cursorKeys.left.isDown) {
    const rotation = getRotation(cursorKeys.up.isDown
      || !cursorKeys.down.isDown, cursorKeys.left.isDown, sprite.rotation, rotationSpeed);
    sprite.setRotation(rotation);
  }

  let v = { x: 0, y: 0 };
  if (cursorKeys.up.isDown) {
    v = getVelocity(true, sprite.rotation + initialRotation, speed);
  } else if (cursorKeys.down.isDown) {
    v = getVelocity(false, sprite.rotation + initialRotation, speed);
  }

  (<Phaser.Physics.Arcade.Body>sprite.body).setVelocity(v.x, v.y);
};

export const addBoat = (scene: Phaser.Scene, x: number, y: number) => {
  scene.anims.create({
    key: 'walk',
    frames: am.generateFrameNumbers('barco1', {
      start: 0,
      end: 3,
      // frames: [4]
      // frames: [0,1,2,3]
      // frames: [0,1,2,3].map(i=>i+4)
      // frames: [0,1,2,3].map(i=>i+8)
      // frames: [0,1,2,3].map(i=>i+12)
    }),
    frameRate: 3,
    yoyo: false,
    repeat: -1,
  });

  const sprite = scene.add.sprite(x, y, 'barco1');
  scene.physics.add.existing(sprite);
  const body = <Phaser.Physics.Arcade.Body> sprite.body;
  body.setCollideWorldBounds(true);

  sprite.anims.load('walk');
  sprite.anims.play('walk');
  sprite.setInteractive();
  scene.input.on('gameobjectdown', (pointer, gameObject) => console.log('clicked: ', gameObject === sprite));

  const cursorKeys = scene.input.keyboard.createCursorKeys();
  scene.events.on('update', (timeElapsed, timeLastUpdate) => update(cursorKeys, sprite, timeElapsed, timeLastUpdate));
  return sprite;
};
