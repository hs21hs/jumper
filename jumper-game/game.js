class Game{

    constructor(){
        this.canvas = document.getElementById("gameScreen")
    
    this.game_width = this.canvas.width
    this.game_height = this.canvas.height
    
    this.ctx = this.canvas.getContext("2d")


        this.char = new Character(this)
        this.bricks = [new Brick(this,50, 400), new Brick(this,350,400), new Brick(this,200,280)]
        this.enemies = []
            new Input(this)
    }


}