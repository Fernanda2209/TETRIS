let canvas = document.getElementById("game-canvas") // Take the canvas, calling it by its id.
 let scoreboard = document.getElementById("scoreboard") // Calling up the score by its id.
 let ctx = canvas.getContext("2d") // We obtain the object context.
 ctx.scale(BLOCK_SIDE_LENGTH, BLOCK_SIDE_LENGTH) // Scale the context of the object for the length of the side of the block.
 let model = new modeloJuego(ctx)
 
 let score = 0 // Player's score
 

 // This will be the loop of the main game
 setInterval(() => {
     newGameState()
 }, GAME_CLOCK); 
 
 //Let's check if the lines are complete so we can eliminate them and increase the score.
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
 // Let's check if the lines are complete so we can eliminate them and increase the score.
 // Let's do it by means of a method that checks if any of the current lines is full, i.e. there is no 0. 
 const fullSend = () => {
     const allFilled = (row) => {
         for (let x of row) {
             if (x === 0) {
                 return false
             }
         }
         return true
     }
    // If the first or any line is full, the value of the score will be increased according to the value assigned to it, i.e., 10
     for (let i = 0; i < model.grid.length; i++) {
         if (allFilled(model.grid[i])) {
             score += SCORE_WORTH 
             model.grid.splice(i, 1) 
             model.grid.unshift([0,0,0,0,0,0,0,0,0,0]) // we add a new line, only 0 because it is empty
         }
     }
 
     scoreboard.innerHTML = "Puntaje: " + String(score)
 }
  // Keys for desktop version

  // We are going to handle the Dom by means of an event, in this case the program is going to be
  // listening for a keydown and will act in a different way depending on the key pressed

 document.addEventListener("keydown", (e) => {
     e.preventDefault() 
     switch(e.key) {
         case "w":
             model.rotate() //We make use of the functions that we declare in the game model, This event will rotate the figure
             break 
         case "d":
             model.move(true) //  We make use of the functions that we declare in the game model,This event will rotate the figure, This event will rotate move the figure to the right.
             break 
         case "s": 
             model.moveDown() // We make use of the functions that we declare in the game model, This event will rotate the figure downward.
             break 
         case "a":
             model.move(false) // We make use of the functions that we declare in the game model, This event will rotate move the figure to the left.
             break
     }
 }
 )
 // Buttons in mobile and tablet version

 // We take icon-rotate calling it by its id and add an event, this means that the program
 // will be listening and will act when the user clicks and the conditions are fulfilled

 document.getElementById("icon-rotate").addEventListener("click", () => {
         model.rotate() // We make use of the functions that we declare in the game model, This event will rotate the figure

     } )

  document.getElementById("icon-rigth").addEventListener("click", function() {
    model.move(true); // We make use of the functions that we declare in the game model,This event will rotate the figure, This event will rotate move the figure to the right.

  } )

  document.getElementById("icon-left").addEventListener("click", function() {
    model.move(false); // We make use of the functions that we declare in the game model, This event will rotate move the figure to the left.

  } )

  document.getElementById("icon-down").addEventListener("click", function() {
    model.moveDown(); // We make use of the functions that we declare in the game model, This event will rotate the figure downward.

  } )

