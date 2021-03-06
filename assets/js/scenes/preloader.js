export default class Preloader extends Phaser.Scene {
  constructor() {
    super('preloader');
  }

  preload() {
    this.load.image('map-background', 'assets/img/map_background.png');
    this.load.image('pond', 'assets/img/pond.png');
    this.load.image('lights', 'assets/img/lights.png');
    this.load.image('signs', 'assets/img/signs.png');
    this.load.image('blank_blockers', 'assets/img/blank_square.png');
    this.load.image('vendingMachine1', 'assets/img/vendingMachine1.png');
    this.load.image('vendingMachine2', 'assets/img/vendingMachine2.png');

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
    this.scene.start('UI');
  }
}
