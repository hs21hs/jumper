document.addEventListener("DOMContentLoaded", first)

var checker;


function first(){
    const canvas = document.getElementById("gameScreen")
    
    const game_width = canvas.width
    const game_height = canvas.height
    


    const ctx = canvas.getContext("2d")

    const game = new Game()

    function gameLoop(timestamp){
        
        ctx.clearRect(0, 0, game_width, game_height)
        
        game.char.draw(ctx)
        game.bricks.forEach(brick => brick.draw(ctx))
        game.bricks.forEach(brick => brick.update())
        //game.brick.update()
        game.char.update()
        

        requestAnimationFrame(gameLoop)
    }

    requestAnimationFrame(gameLoop)

}
