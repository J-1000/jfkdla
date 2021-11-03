class Player {
  constructor() {
    this.x = 570;
    this.y = 350;
    this.width = 90;
     this.height = 69;
    this.speed = 4;
  }

 
  draw() {
      image(game.playerImage, this.x, this.y, this.width, this.height);
      // player hits boundary at walls of the room
      if (this.x < 1000) {
        this.x = this.x + this.speed;
      }
      if (this.x > 200) {
        this.x = this.x - this.speed;
      }
      if (this.y > 600) {
        this.y = this.y - this.speed;
      }
      if (this.y < 275) {
        this.y = this.y + this.speed;
       }
    }

  
    moveRight() {
      this.x += this.speed;
    }
  
    moveLeft() {
      this.x -= this.speed;
    }
  
    moveUp() {
      this.y -= this.speed;
    }
  
    moveDown() {
      this.y += this.speed;
    }

    



}
