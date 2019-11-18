class Brick{

    constructor(game, x, y){
        this.position = {x: x, y: y}
        this.width = 150
        this.height = 20
        this.game = game

    }

    draw(ctx){
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    
    update(){
        const topOfChar = this.game.char.position.y
        const bottomOfChar = this.game.char.position.y + this.game.char. height
        const leftOfChar = this.game.char.position.x
        const rightOfChar = this.game.char.position.x + this.game.char.width
        

        const topOfBrick = this.position.y
        const bottomOfBrick = this.position.y + this.height
        const rightOfBrick = this.position.x+this.width
        const leftOfBrick = this.position.x
         

    //if his bottom hits the top of a brick 0 his speed
    if(bottomOfChar === topOfBrick && (leftOfChar < rightOfBrick && rightOfChar > leftOfBrick)&& this.game.char.speedVer > 0){
        this.game.char.speedVer = 0
        // checker = 0;
    }

    //if hes off the ground and his speed ver is 0 and his side is not sitting on a brick: +5 his ver speed

    if(bottomOfChar === topOfBrick && this.game.char.speedVer === 0 && (leftOfBrick=== rightOfChar +5 || rightOfBrick === leftOfChar -5) && (leftOfChar > rightOfBrick || rightOfChar < leftOfBrick)){
        this.game.char.speedVer = 5
        
    }
    //if his top hits the bottom of the break rev his yspeed
    }
}
