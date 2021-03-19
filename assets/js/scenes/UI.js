export default class Level1UI extends Phaser.Scene {
  lights;

  constructor() {
    super('UI');
  }

  preload() {}

  create() {
    this.lights = this.physics.add.image(471, 443, 'lights');
  }
}
