class Game{

    constructor(){
        this.char = new Character(this)
        this.bricks = [new Brick(this,50, 400), new Brick(this,350,400), new Brick(this,200,280)]
        new Input(this)
    }


}