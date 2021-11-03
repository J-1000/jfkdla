class Interactable {

    constructor() {
      this.swordX = Math.floor(
        Math.random() * (1000 - 200) + 200
      )
      this.swordY = Math.floor(
        Math.random() * (600 - 275) + 275
      )
      this.swordWidth = 60;
      this.swordHeight = 60;
  
  
    }
  
    draw() {

      this.swordPlayerCollision(game.player);
      image(
        game.sword,
        this.swordX,
        this.swordY,
        this.swordWidth,
        this.swordHeight
      );
  
    }
  
  
    swordPlayerCollision(playerInfo) {
      let swordX = this.swordX + this.swordWidth / 1.1;
      let swordY = this.swordY + this.swordHeight / 1.2;
  
  
      let playerX = playerInfo.x + playerInfo.width / 3.1;
      let playerY = playerInfo.y + playerInfo.height / 3.5;
  
      
      if (dist(swordX, swordY, playerX, playerY) < 100) {
        console.log('sword')
        game.isSwordGrabbable = true
        if (game.hasSword === true) {
          this.swordX = playerX;
          this.swordY = playerY;
        }
  
  
      }
  
  
      // connect sword to player
      game.sword.resize(0, 0);
      image(
        game.sword,
        this.swordX,
        this.swordY,
        this.swordWidth,
        this.swordHeight
      );
  
    }
  }
  
  
  
  
  