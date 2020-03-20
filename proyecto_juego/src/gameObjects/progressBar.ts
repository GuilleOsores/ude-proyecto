import * as Phaser from 'phaser';

export class ProgressBar extends Phaser.GameObjects.GameObject {
  onComplete: Function;

  assetText: Phaser.GameObjects.Text

  percentText: Phaser.GameObjects.Text;

  progressBar: Phaser.GameObjects.Graphics;

  public constructor(scene: Phaser.Scene, onComplete: Function) {
    super(scene, 'loader');

    this.onComplete = onComplete;

    const { width } = scene.cameras.main;
    const { height } = scene.cameras.main;

    this.progressBar = scene.add.graphics();
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

    this.percentText = scene.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: 'blue',
      },
    });
    this.percentText.setOrigin(0.5, 0.5);

    this.assetText = scene.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: 'blue',
      },
    });

    this.assetText.setOrigin(0.5, 0.5);

    scene.load.on('progress', (value) => this.progressHandler(value, width, height));

    scene.load.on('fileprogress', this.fileprogressHandler);

    scene.load.on('complete', this.completeHandler);
  }

  progressHandler = (value, width, height) => {
    this.percentText.setText(`${value * 100}%`);
    this.progressBar.clear();
    this.progressBar.fillStyle(0xffffff, 1);
    this.progressBar.fillRect(width / 2 - 150, height / 2 - 20, 300 * value, 30);
  }

  fileprogressHandler = (file) => {
    this.assetText.setText(`Loading asset: ${file.key}`);
  }

  completeHandler = () => {
    this.onComplete();
  }

  destroy() {
    this.scene.load.removeListener('progress', this.progressHandler);
    this.scene.load.removeListener('fileprogress', this.fileprogressHandler);
    this.scene.load.removeListener('complete', this.completeHandler);
    super.destroy();
  }
}
