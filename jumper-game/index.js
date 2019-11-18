document.addEventListener("DOMContentLoaded", first)

var checker;


function first(){
    function createEnemies(){
        const topBrick = game.bricks.filter(brick => brick.topBrick === true)
        const enemy = new Enemy()

            if (Math.random()>0.5){
            enemy.position.x = topBrick[0].position.x;
            enemy.position.y = topBrick[0].position.y - enemy.height;
            enemy.speedHor = 1
           
            game.enemies.push(enemy)
            }else{
                enemy.position.x = topBrick[1].position.x;
            enemy.position.y = topBrick[1].position.y - enemy.height;
            enemy.speedHor = -1
           
            game.enemies.push(enemy)
    }}
    const game = new Game()
setInterval(createEnemies,500)
    

    function gameLoop(timestamp){
        
        game.ctx.clearRect(0, 0, 500, 500)
        // setTimeout(function(){ debugger; }, 3000);
        game.char.draw(game.ctx)
        
        game.bricks.forEach(brick => brick.draw(game.ctx))
        game.bricks.forEach(brick => brick.update())

        game.enemies.forEach(enemy => enemy.draw(game.ctx))
        game.enemies.forEach(enemy => enemy.update())
        //game.brick.update()
        game.char.update()
        
        requestAnimationFrame(gameLoop)
            }
        
    

    requestAnimationFrame(gameLoop)

}
