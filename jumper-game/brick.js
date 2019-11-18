class Brick{

    constructor(game, x, y, top = false){
        this.position = {x: x, y: y}
        this.width = 150
        this.height = 20
        this.game = game
        this.topBrick = top
        
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
    
        
        


    //if he falls atop of a brick, 0 his speed and crearte an enemy
    if(bottomOfChar === topOfBrick && (leftOfChar < rightOfBrick && rightOfChar > leftOfBrick)&& this.game.char.speedVer > 0){
        this.game.char.speedVer = 0
        
            
            // checker = 0;
        
    }

    //if hes off the ground and his speed ver is 0 and his side is not sitting on a brick: +5 his ver speed

    if(bottomOfChar === topOfBrick && this.game.char.speedVer === 0 && (leftOfBrick=== rightOfChar +5 || rightOfBrick === leftOfChar -5) && (leftOfChar > rightOfBrick || rightOfChar < leftOfBrick)){
        this.game.char.speedVer = 5
        
    }
    //if his top hits the bottom of the break rev his yspeed
    
    this.game.enemies.forEach(enemy => {
        const topOfEnemy = enemy.position.y
        const bottomOfEnemy = enemy.position.y + enemy.height
        const rightOfEnemy = enemy.position.x+enemy.width
        const leftOfEnemy = enemy.position.x

        if(bottomOfEnemy === topOfBrick && enemy.speedVer === 0 && (leftOfBrick=== rightOfEnemy +1 || rightOfBrick === leftOfEnemy -1) && (leftOfEnemy > rightOfBrick || rightOfEnemy < leftOfBrick)){
            enemy.speedVer = 1;
            enemy.speedHor = 0;
        }

        if(bottomOfEnemy === topOfBrick && (leftOfEnemy < rightOfBrick && rightOfEnemy > leftOfBrick)&& enemy.speedVer > 0){
            enemy.speedVer = 0;
            if (Math.random()>0.5){
                enemy.speedHor = 1
            }else{
                enemy.speedHor = -1
            }
        }
    });
    

}

    

}
