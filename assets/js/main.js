import Preloader from './scenes/preloader.js';
import Level1 from './scenes/level-1.js';
import UI from './scenes/UI.js';

const config = {
  // type: Phaser.AUTO,
  // width: 800,
  // height: 600,
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
      debug: false,
    },
  },
  scene: [Preloader, Level1, UI],
};

const game = new Phaser.Game(config);

// scene: {
//     preload: preload,
//     create: create,
//     update: update,}
