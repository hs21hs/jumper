class Character{

    constructor(game){
        this.game = game
        this.image = document.getElementById("img_char")
        this.width = 20
        this.height = 50
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
        
        // if (checker === 0){
        //     debugger
        // }
      

        const bottomOfCtx = 500
        //if hes jumping let him only go up 50 px
        if (this.position.y < this.placeholder-120){
            this.speedVer = -this.speedVer
        }
         
        //if hes falling and hits the bottom of screen set speedVer to 0 
        if (this.speedVer > 0 && bottomOfChar === bottomOfCtx) {
            this.speedVer = 0
        }

      

        this.position.y += this.speedVer
        this.position.x += this.speedHor
    }
}