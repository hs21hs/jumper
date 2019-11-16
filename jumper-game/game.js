class Game{

    constructor(){
        this.char = new Character(this)
        this.brick = new Brick()
        new Input(this)
    }


}