class Notifs{

    constructor() {
        this.x = 50;
        this.y = 100;
        this.width = 294;
        this.height = 210;
      }

     

      


      gameOver() {

        image(game.gameOverImage, this.x, this.y, this.width, this.height);
       
      } 


    
    win(){
    
    image(game.winImage,this.x, this.y, this.width, this.height)

    }





}