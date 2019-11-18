class Enemy{

    constructor(x,y){
        this.image = document.getElementById("enemy")
        this.position = {x:x, y:y}
        this.width = 20
        this.height = 50
        this.speedHor = 0
        this.speedVer = 0
        this.brick;
        
    }



    draw(ctx){
        ctx.drawImage(this.image, this.position.x,this.position.y,this.width,this.height)
    }

    update(){
        this.position.x += this.speedHor
        this.position.y += this.speedVer
    }

}