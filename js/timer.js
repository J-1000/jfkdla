class Timer {
    constructor() {
      this.timer = 60 * 1;
      }
    

    swordAppear(sword){

        
        if (frameCount % 60 == 0 && this.timer > 0) {
            this.timer--;
          (this.timer)
        }
      
        if (this.timer <= 58){

        game.interactable.draw();
    }

}     


villianAppear(){

    if (this.timer <= 58) {
        game.villian.draw();
    
}
  
}
}

