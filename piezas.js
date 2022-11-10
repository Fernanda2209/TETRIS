class Piece {

   /*  The constructor is a special method to create and initialize an object created
     from a class, in this case we are going to use it from the Piece class. */

    constructor(shape, ctx) {

      /*   The this is so to speak a constructor, it is used to link a new object to the constructor
         from which it is being invoked or to give also a value to the parameter */

        this.shape = shape 
        this.ctx = ctx 
        this.y = 0 
        this.x = Math.floor(COLS / 2)
    }


    renderPiece() {
        this.shape.map((row, i) => {
            row.map((cell, j) => {
                if (cell > 0) {
                    this.ctx.fillStyle = COLORS[cell] 
                    this.ctx.fillRect(this.x + j, this.y + i, 1, 1)
                }
            })
        })
    }
}