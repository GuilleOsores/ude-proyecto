import * as Phaser from 'phaser';

export class ProgressBar extends Phaser.GameObjects.GameObject {
  public constructor(scene: Phaser.Scene, onComplete: Function) {
    super(scene, 'loader');

    const { width } = scene.cameras.main;
    const { height } = scene.cameras.main;

    const progressBar = scene.add.graphics();
    const progressBox = scene.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(width / 2 - 160, height / 2 - 30, 320, 50);

    const loadingText = scene.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: 'blue',
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = scene.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: 'blue',
      },
    });
    percentText.setOrigin(0.5, 0.5);

    const assetText = scene.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: 'blue',
      },
    });

    assetText.setOrigin(0.5, 0.5);

    scene.load.on('progress', (value) => {
      percentText.setText(`${value * 100}%`);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(width / 2 - 150, height / 2 - 20, 300 * value, 30);
    });

    scene.load.on('fileprogress', (file) => {
      assetText.setText(`Loading asset: ${file.key}`);
    });

    scene.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();

      scene.make.text({
        x: width / 2,
        y: height / 2 + 50,
        text: 'Click to start',
        style: {
          font: '18px monospace',
          fill: 'blue',
        },
      });

      onComplete();
    });
  }
}
