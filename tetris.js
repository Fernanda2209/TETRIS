// setup 

/* In this section what we are going to do is to declare the variables that we need in a general way inside the
 tetris, for this we make use of the structure object and method by means of doument.getElemetById in this 
 case it is this way because the element is not a class. */

 let canvas = document.getElementById("game-canvas")
 let scoreboard = document.getElementById("scoreboard") 
 let ctx = canvas.getContext("2d") 
 ctx.scale(BLOCK_SIDE_LENGTH, BLOCK_SIDE_LENGTH) 
 let model = new modeloJuego(ctx)
 
 let score = 0 
 
 setInterval(() => {
     newGameState()
 }, GAME_CLOCK); 
 
 
 let newGameState = () => {
     fullSend() 
     if (model.fallingPiece === null) {
         const rand = Math.round(Math.random() * 6) + 1
         const newPiece = new Piece(SHAPES[rand], ctx) 
         model.fallingPiece = newPiece 
         model.moveDown()
     } else {
         model.moveDown()
         
     }
 }
 
 const fullSend = () => {
     const allFilled = (row) => {
         for (let x of row) {
             if (x === 0) {
                 return false
             }
         }
         return true
     }
 
     for (let i = 0; i < model.grid.length; i++) {
         if (allFilled(model.grid[i])) {
             score += SCORE_WORTH 
             model.grid.splice(i, 1) 
             model.grid.unshift([0,0,0,0,0,0,0,0,0,0])
         }
     }
 
     scoreboard.innerHTML = "Puntaje: " + String(score)
 }
 
 document.addEventListener("keydown", (e) => {
     e.preventDefault() 
     switch(e.key) {
         case "w":
             model.rotate() 
             break 
         case "d":
             model.move(true) 
             break 
         case "s": 
             model.moveDown() 
             break 
         case "a":
             model.move(false) 
             break
     }
 })
