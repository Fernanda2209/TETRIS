class Piece { // The part class was created and will be used to represent the displacement of each figure individually.
    constructor(shape, ctx) { //The constructor is initialized with two parameters.
        this.shape = shape //The attribute or parameter shape is indicated.
        this.ctx = ctx //The attribute or parameter ctx is indicated.

        // Each part needs to have an x and y value to know its position within the canva.
        this.y = 0 
        this.x = Math.floor(COLS / 2) // It will start in the middle and the columns will be divided in two.
    }

    // Now we are going to represent the part by means of a method.

    renderPiece() {
        this.shape.map((row, i) => { // We are going to do this by means of a shape point map, with two parameters row and i
            row.map((cell, j) => { 
                if (cell > 0) { // The cell must be greater than 0 because it is not empty and represents a figure.
                    this.ctx.fillStyle = COLORS[cell] // It is assigned a color style that we find in constant.
                    this.ctx.fillRect(this.x + j, this.y + i, 1, 1)
                }
            })
        })
    }
}
