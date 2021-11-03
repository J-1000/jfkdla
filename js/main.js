const game = new Game();

function preload() {
  game.preload();
}

function setup() {
  createCanvas(1200, 700);
  game.setup();


}

function draw() {


  game.draw()
  

  if (keyIsDown(40)) {
    game.player.moveDown()
  }
  if (keyIsDown(38)) {
    game.player.moveUp()
  }
  if (keyIsDown(37)) {
    game.player.moveLeft()
  }
  if (keyIsDown(39)) {
    game.player.moveRight() 
  }

}

function keyPressed() {
  if (keyCode === 39 || keyCode === 68) {
    game.player.moveRight();
  }
  if (keyCode === 37 || keyCode === 65) {
    game.player.moveLeft();
  }
  if (keyCode === 40 || keyCode === 83) {
    game.player.moveDown();
  }
  if (keyCode === 38 || keyCode == 87) {
    game.player.moveUp();
  }

  if (keyCode === 32) {

    if (game.isSwordGrabbable) {
      if (game.hasSword) {
        game.hasSword = false
      } else {
        game.hasSword = true
      }
    }
  }
}


