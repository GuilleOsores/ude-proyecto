export const agregarAgua = (scene: Phaser.Scene, width: number, height: number) => {
  scene.anims.create({
    key: 'water',
    frames: scene.anims.generateFrameNumbers('water', {
      start: 0,
      end: 15,
    }),
    frameRate: 6,
    repeat: -1,
    repeatDelay: 50,
  });

  const config: Phaser.Types.GameObjects.Group.GroupCreateConfig[] = [];
  for (let i = 0; i < Math.ceil(height / 32); i += 1) {
    config.push({
      key: 'water',
      repeat: Math.ceil(width / 32),
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
