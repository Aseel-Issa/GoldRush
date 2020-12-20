
let game
let player1
let player2
const renderer = new Renderer()

const moveToCell = function(currentCell, nextCell, direction){
    let isBorderCell
    switch(direction){
        case 'right':
            isBorderCell = game.isRightBorderCell(currentCell.y)
            break;
        case 'left':
            isBorderCell = game.isLeftBorderCell(currentCell.y)
            break;
        case 'up':
            isBorderCell = game.isTopBorderCell(currentCell.x)
            break;
        case 'down':
            isBorderCell = game.isBottomBorderCell(currentCell.x)
            break;
        default:
            isBorderCell = false
    }
    if(!(game.isWallCell(nextCell.x, nextCell.y) || game.isPlayerCell(nextCell.x, nextCell.y) || isBorderCell)){
        let coins = 0
        if(game.isCoinCell(nextCell.x, nextCell.y)){
            coins = 10
        }
        game.alter(currentCell.x, currentCell.y, 'Empty')
        game.alter(nextCell.x, nextCell.y, currentCell.type)
        if(currentCell.type == 'Player1'){
            switch(direction){
                case 'right':
                    player1.y +=1
                    break;
                case 'left':
                    player1.y -=1
                    break;
                case 'up':
                    player1.x -=1
                    break;
                case 'down':
                    player1.x +=1
                    break;
                default:
            }          
            player1.coins+= coins
        }else{
            switch(direction){
                case 'right':
                    player2.y +=1
                    break;
                case 'left':
                    player2.y -=1
                    break;
                case 'up':
                    player2.x -=1
                    break;
                case 'down':
                    player2.x +=1
                    break;
                default:
            } 
            player2.coins+= coins
        }
    }
}

const moveRight = function(player){
    const nextCell = {x:player.x, y:player.y+1}
    moveToCell(player, nextCell, 'right')
}

const moveLeft = function(player){
    const nextCell = {x:player.x, y:player.y-1}
    moveToCell(player, nextCell, 'left')
}

const moveUp = function(player){
    const nextCell = {x:player.x-1, y:player.y}
    moveToCell(player, nextCell, 'up')
}

const moveDown = function(player){
    const nextCell = {x:player.x+1, y:player.y}
    moveToCell(player, nextCell, 'down')
}

// Up for player 1
const onPressW = function(){
    moveUp(player1)
    renderer.renderBoard(game.matrix)
    renderer.renderPlayer1(player1.coins)
}
// Left for player 1
const onPressA = function(){
    moveLeft(player1)
    renderer.renderBoard(game.matrix)
    renderer.renderPlayer1(player1.coins)
}
// Down for player 1
const onPressS = function(){
    moveDown(player1)
    renderer.renderBoard(game.matrix)
    renderer.renderPlayer1(player1.coins)
}
// Right for player 1
const onPressD = function(){
    moveRight(player1)
    renderer.renderBoard(game.matrix)
    renderer.renderPlayer1(player1.coins)
}

// Up for player 2
const onPressI = function(){
    moveUp(player2)
    renderer.renderBoard(game.matrix)
    renderer.renderPlayer2(player2.coins)
}
// Left for player 2
const onPressJ = function(){
    moveLeft(player2)
    renderer.renderBoard(game.matrix)
    renderer.renderPlayer2(player2.coins)
}
// Down for player 2
const onPressK = function(){
    moveDown(player1)
    renderer.renderBoard(game.matrix)
    renderer.renderPlayer2(player1.coins)
}
// Right for player 2
const onPressL = function(){
    moveRight(player2)
    renderer.renderBoard(game.matrix)
    renderer.renderPlayer2(player2.coins)
}


const start = function(){
    document.addEventListener("keydown", e => {
        //by pressing "Q" letter on your keyboard, the bulgarian keyboard will print "," (a comma) and you will get the value of the key being pressed
        console.log(e.key); // prints ","
        switch(e.key) {
            case 'w':
              onPressW()
              break;
            case 'a':
              onPressA()
              break;
            case 's':
              onPressS()
              break;
            case 'd':
              onPressD()
              break;
              case 'i':
              onPressI()
              break;
            case 'j':
              onPressJ()
              break;
            case 'k':
              onPressK()
              break;
            case 'l':
              onPressL()
              break;
            default:
              // code block
          }
    })
}

const isGameOver = function(){
        // if the summation of coins for both players equals the total coins, then the game is over
}

const endGame = function(){
    // remove event listener
}

const initGame = function(){
    game = new GoldRush()
    game.prepareGoldRush()
    player1 = {x:0, y:0, type:'Player1', coins:0}
    player2 = {x:game.matrix.length-1, y:game.matrix.length-1, type:'Player2', coins:0}

    renderer.renderBoard(game.matrix)
}

initGame()

