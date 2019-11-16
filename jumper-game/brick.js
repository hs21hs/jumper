class Brick{

    constructor(){
        this.position = {x: 50, y: 450}
        this.width = 150
        this.height = 20


    }

    draw(ctx){
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

}
