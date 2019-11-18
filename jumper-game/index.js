document.addEventListener("DOMContentLoaded", first)

var checker;


function first(){
    

    const game = new Game()

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
