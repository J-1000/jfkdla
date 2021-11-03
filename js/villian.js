class Villian {
  constructor() {
    this.x = 100;
    this.y = 350;
    this.width = 60;
    this.height = 70;
    this.speed = 2;
  }
  draw() {
    image(game.villianImage, this.x, this.y, this.width, this.height);

    // follow player
    let rotation = atan2(game.player.y - this.y, game.player.x - this.x);
    this.x += cos(rotation) * this.speed;
    this.y += sin(rotation) * this.speed;

    // boundary 
    if (this.x >= 200 || this.x <= 1000) {
      this.speed *= -1;
      this.x += cos(rotation) * this.speed;
      this.y += sin(rotation) * this.speed;
    }
    if (this.y >= 275 || this.y <= 600) {
      this.speed *= -1;
      this.x += cos(rotation) * this.speed;
      this.y += sin(rotation) * this.speed;
    }
  }

  villianCollision(playerInfo) {
    let villianX = this.x + this.width / 2;
    let villianY = this.y + this.height / 2;

    // center point the player
    let playerX = playerInfo.x + playerInfo.width / 2;
    let playerY = playerInfo.y + playerInfo.height / 2;

    if (dist(villianX, villianY, playerX, playerY) < 25) {

      if (!game.hasSword) {
        console.log('gzuz')
        game.gameOver = true
        noLoop()
        // console.log(game.gameOver)
      } else {
        game.winState = true

      }
    }
  }
}






