class Game{

    constructor(){
        this.canvas = document.getElementById("gameScreen")
    
    this.game_width = this.canvas.width
    this.game_height = this.canvas.height
    
    this.ctx = this.canvas.getContext("2d")


        this.char = new Character(this)
        this.bricks = [new Brick(this,100, 200), new Brick(this,350,400),new Brick(this,270,350),new Brick(this,250,250), new Brick(this,350,150), new Brick(this,50,100,true),new Brick(this,450,100,true)]
        this.enemies = []
            new Input(this)
    }


}