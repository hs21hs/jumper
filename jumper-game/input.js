class Input{
    
constructor(game){
    document.addEventListener("keydown", event => {
        switch (event.keyCode){
        
            case 32:
                if (game.char.speedVer === 0){
                
                    game.char.placeholder = game.char.position.y
                    game.char.speedVer = -5
                    
                }
            break;

            case 37:
                
                
                game.char.speedHor = -5
            break;

            case 39:
                
                game.char.placeholderHor = game.char.position.x
                game.char.speedHor = 5
            break;
        }
    })
    document.addEventListener("keyup", event => {
        switch (event.keyCode){

            case 37:
                if (game.char.speedHor < 0){
                    game.char.speedHor = 0
                }
            break;

            case 39:
                if (game.char.speedHor > 0){
                    game.char.speedHor = 0
                }
            break;
        }
    })

}



}