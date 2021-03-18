import createPlayerAnims from '../anims/player-anims.js';

export default class Level1 extends Phaser.Scene {
  background;
  player;
  // platforms;
  // stars;
  // bombs;
  // gamerOver = false;
  // score = 0;
  // scoreText;

  constructor() {
    super('level-1');
  }

  preload() {}

  create() {

    //  Set the camera and physics bounds to be the size of 4x4 bg images
    this.cameras.main.setBounds(0, 0, 2308, 1478);
    this.physics.world.setBounds(0, 0, 2308, 1478);

    //  Background
    this.add.image(0, 0, 'map-background').setOrigin(0);

    // Gradient Background
    let graphics = this.add.graphics();

    graphics.fillGradientStyle(0xbfab78, 0xbfab78, 0xa79567, 0xa79567, 1);
    graphics.fillRect(0, 0, 2308, 1478);

    // Polygon
    let polygon = new Phaser.Geom.Polygon([
      600,
      100,
      900,
      100,
      900,
      500,
      600,
      500,
    ]);

    // polygon.enableBody();

    // polygon.fillColor = '#0xff0000';

    // let graphics = this.add.graphics({ x: 100, y: 200 });

    // graphics.lineStyle(2, 0x00aa00);

    // graphics.beginPath();

    // graphics.moveTo(polygon.points[0].x, polygon.points[0].y);

    // for (var i = 1; i < polygon.points.length; i++) {
    //   graphics.lineTo(polygon.points[i].x, polygon.points[i].y);
    // }

    // graphics.closePath();
    // graphics.strokePath();

    // Player
    this.player = this.physics.add.sprite(400, 300, 'revolver-left');
    this.player.setCollideWorldBounds(true);

    // Player collide with polygon
    this.physics.add.collider(this.player, polygon);

    // // Platforms
    // this.platforms = this.physics.add.staticGroup();

    // this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    // this.platforms.create(600, 400, 'ground');
    // this.platforms.create(50, 250, 'ground');
    // this.platforms.create(750, 220, 'ground');

    // Set camera to follow the player
    this.cameras.main.startFollow(this.player, true, 0.05, 0.05);

    // // Player
    // this.player = this.physics.add.sprite(100, 450, 'dude');

    // this.player.setBounce(0.2);
    // this.player.setCollideWorldBounds(true);
    // this.physics.add.collider(this.player, this.platforms);

    // Input Events
    this.cursors = this.input.keyboard.createCursorKeys();

    // Animations
    createPlayerAnims(this.anims);

    // // Stars
    // this.stars = this.physics.add.group({
    //   key: 'star',
    //   repeat: 11,
    //   setXY: { x: 12, y: 0, stepX: 70 },
    // });

    // this.stars.children.iterate(function (child) {
    //   child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    // });

    // // let Star collide with platforms
    // this.physics.add.collider(this.stars, this.platforms);

    // this.physics.add.overlap(
    //   this.player,
    //   this.stars,
    //   this.collectStar,
    //   null,
    //   this
    // );

    // // Score
    // this.scoreText = this.add.text(16, 16, 'Score: 0', {
    //   fontSize: '32px',
    //   fill: '#000',
    // });

    // // Bombs
    // this.bombs = this.physics.add.group();

    // this.physics.add.collider(this.bombs, this.platforms);

    // this.physics.add.collider(
    //   this.player,
    //   this.bombs,
    //   this.hitBomb,
    //   null,
    //   this
    // );
  }

  update() {
    // default movement speed = 120
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-600);

      this.player.play('left', true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(600);

      this.player.play('right', true);
    } else if (this.cursors.up.isDown) {
      this.player.setVelocityY(-600);

      this.player.play('up', true);
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(600);

      this.player.play('down', true);
    } else {
      this.player.setVelocityX(0);
      this.player.setVelocityY(0);
      this.player.play('turn');
    }

    // if (this.cursors.up.isDown && this.player.body.touching.down) {
    //   this.player.setVelocityY(-330);
    // }
  }

  // check overlaps between player and stars
  // collectStar(player, star) {
  //   star.disableBody(true, true);

  //   this.score += 10;
  //   this.scoreText.setText('Score: ' + this.score);

  //   if (this.stars.countActive(true) === 0) {
  //     this.scene.start('level-2');

      //   this.stars.children.iterate(function (child) {
      //     child.enableBody(true, child.x, 0, true, true);
      //   });

      //   var x =
      //     player.x < 400
      //       ? Phaser.Math.Between(400, 800)
      //       : Phaser.Math.Between(0, 400);

      //   var bomb = this.bombs.create(x, 16, 'bomb');
      //   bomb.setBounce(1);
      //   bomb.setCollideWorldBounds(true);
      //   bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
  //   }
  // }

  // hitBomb(player, bomb) {
  //   this.physics.pause();

  //   player.setTint(0xff0000);

  //   player.anims.play('turn');

  //   this.gameOver = true;
  // }
}
