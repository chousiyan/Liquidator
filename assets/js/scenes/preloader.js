export default class Preloader extends Phaser.Scene {
  constructor() {
    super('preloader');
  }

  preload() {
    this.load.image('map-background', 'assets/img/map_background.png');

    // load Player with default revolver image & animation
    this.load.atlas(
      'revolver-left',
      'assets/img/player/revolver_left/revolver_left_walk.png',
      'assets/img/player/revolver_left/revolver_left_walk.json'
    );
    // this.load.image('ground', 'assets/img/platform.png');
    // this.load.image('star', 'assets/img/star.png');
    // this.load.image('bomb', 'assets/img/bomb.png');

    // this.load.spritesheet('dude', 'assets/img/dude.png', {
    //   frameWidth: 32,
    //   frameHeight: 48,
    // });
  }

  create() {
    this.scene.start('level-1');
  }
}
