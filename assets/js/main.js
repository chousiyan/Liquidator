import Preloader from './scenes/preloader.js';
import Level1 from './scenes/level-1.js';

const config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    parent: 'phaser-example',
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1920,
    height: 1080,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: true,
    },
  },
  scene: [Preloader, Level1],
};

const game = new Phaser.Game(config);

// scene: {
//     preload: preload,
//     create: create,
//     update: update,}
