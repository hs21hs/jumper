class Character{

    constructor(game){
        this.game = game
        this.image = document.getElementById("img_char")
        this.width = 80
        this.height = 80
        this.position = {x: 250, y:500 - this.height}
        this.speedVer = 0
        this.speedHor = 0
        this.placeholder = 0
        this.placeholderHor = 0
    }

    draw(ctx){
        ctx.drawImage(this.image, this.position.x,this.position.y,this.width,this.height)
    }

    update(){
        //defining points of objects
        const topOfChar = this.position.y
        const bottomOfChar = this.position.y + this. height
        const leftOfChar = this.position.x
        const rightOfChar = this.position.x + this.width
        

        const topOfBrick = this.game.brick.position.y
        const bottomOfBrick = this.game.brick.position.y + this.game.brick.height
        const rightOfBrick = this.game.brick.position.x+this.game.brick.width
        const leftOfBrick = this.game.brick.position.x

        const bottomOfCtx = 500
        //if hes jumping let him only go up 50 px
        if (this.position.y < this.placeholder-120){
            this.speedVer = -this.speedVer
        }
        // if hes moving right or left stop after 5px
        if (this.position.x > this.placeholderHor+5 || this.position.x < this.placeholderHor-5 ){
            this.speedHor = 0
        }
         
       

         //if hes falling and hits the bottom of screen set speedVer to 0 
        if (this.speedVer > 0 && bottomOfChar === bottomOfCtx) {
                this.speedVer = 0
            }

        //if his bottom hits the top of a brick 0 his speed
        if(bottomOfChar === topOfBrick && (leftOfChar < rightOfBrick && rightOfChar > leftOfBrick)&& this.speedVer > 0){
            this.speedVer = 0
        }

        //if hes off the ground and his speed ver is 0 and his side is not sitting on a brick: +5 his ver speed

        if(this.position.y < 500- this.height && this.speedVer=== 0 && (leftOfChar > rightOfBrick || rightOfChar < leftOfBrick)){
            this.speedVer = 5
        }
        //if his top hits the bottom of the break rev his yspeed

        this.position.y += this.speedVer
        this.position.x += this.speedHor
    }
}