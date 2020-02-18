import { am } from '../main';

export const loadWater = (scene: Phaser.Scene) => {
  scene.load.spritesheet('water', './assets/images/Ocean_SpriteSheet.png', {
    frameWidth: 32,
    frameHeight: 32,
  });
};

export const addWater = (scene: Phaser.Scene) => {
  scene.anims.create({
    key: 'water',
    frames: am.generateFrameNumbers('water', {
      start: 0,
      end: 15,
    }),
    frameRate: 6,
    repeat: -1,
    repeatDelay: 50,
  });

  const config: Phaser.Types.GameObjects.Group.GroupCreateConfig[] = [];
  for (let i = 0; i < Math.ceil(scene.sys.game.canvas.height / 32); i += 1) {
    config.push({
      key: 'water',
      repeat: (scene.sys.game.canvas.width / 32) - 1,
      setXY: {
        x: 0,
        y: i * 32,
        stepX: 32,
      },
    });
  }

  const group = scene.add.group();
  group.createMultiple(config);
  group.setTint(150);
  group.setOrigin(0, 0);
  group.playAnimation('water');
};
