class Game{

    constructor(){
        this.char = new Character(this)
        this.bricks = [new Brick(this,100, 450), new Brick(this,200,400)]
        new Input(this)
    }


}