class modeloJuego {//Se Crea la clase modelojuego
    constructor(ctx) {//Se inicializa el constructor con un parametro
        this.ctx = ctx //Se indica el atributo
        this.fallingPiece = null //Valor booleano 
        this.grid = this.makeStartingGrid()//Inicia el método dentro del constructor
    }

    makeStartingGrid() {
        let grid = [] //Se crea el arreglo vacío grid
        for (var i = 0; i < ROWS; i++) {//Inicializamos un ciclo for anidado para las filas
            grid.push([])//Se agrega un espacio al arreglo en el último lugar
            for (var j = 0; j < COLS; j++) {//Iniciamos el otro for para las columnas
                grid[grid.length - 1].push(0)//Llenamos el arreglo con el tamaño -1
            }
        }
        return grid //Nos devuelve el arreglo
    }

    collision(x, y, candidate=null) {
        const shape = candidate || this.fallingPiece.shape 
        const n = shape.length 
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (shape[i][j] > 0) {
                    let p = x + j 
                    let q = y + i  
                    if (p >= 0 && p < COLS && q < ROWS) {
                        // in bounds
                        if (this.grid[q][p] > 0) {
                            return true
                        }
                    } else {
                        return true
                    }
                }
            }
        }
        return false
    }

    renderGameState() {
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[i].length; j++) {
                let cell = this.grid[i][j] 
                this.ctx.fillStyle = COLORS[cell] 
                this.ctx.fillRect(j, i, 1, 1)
            }
        }

        if (this.fallingPiece !== null) {
            this.fallingPiece.renderPiece()
        }
    }


    moveDown() {
        if (this.fallingPiece === null) {
            this.renderGameState() 
            return
        } else if (this.collision(this.fallingPiece.x, this.fallingPiece.y + 1)) {
            const shape = this.fallingPiece.shape 
            const x = this.fallingPiece.x 
            const y = this.fallingPiece.y 
            shape.map((row, i) => {
                row.map((cell, j) => {
                    let p = x + j 
                    let q = y + i 
                    if (p >= 0 && p < COLS && q < ROWS && cell > 0) {
                        this.grid[q][p] = shape[i][j]
                    }
                })
            })

            // Fin del Juego
            if (this.fallingPiece.y === 0) {
                alert("Game over!") 
                this.grid = this.makeStartingGrid()
                score = 0;
            }
            this.fallingPiece = null
        } else {
            this.fallingPiece.y += 1
        }
        this.renderGameState()
    }

    move(right) {
        if (this.fallingPiece === null) {
            return
        }

        let x = this.fallingPiece.x 
        let y = this.fallingPiece.y 
        if (right) {
            // move right
            if (!this.collision(x + 1, y)) {
                this.fallingPiece.x += 1
            }
        } else {
            // move left
            if (!this.collision(x - 1, y)) {
                this.fallingPiece.x -= 1
            }
        }
        this.renderGameState()
    }

    rotate() {
        if (this.fallingPiece !== null) {
            let shape = [...this.fallingPiece.shape.map((row) => [...row])]
            // transpose of matrix 
            for (let y = 0; y < shape.length; ++y) {
                for (let x = 0; x < y; ++x) {
                    [shape[x][y], shape[y][x]] = 
                    [shape[y][x], shape[x][y]]
                }
            }
            // reverse order of rows 
            shape.forEach((row => row.reverse()))
            if (!this.collision(this.fallingPiece.x, this.fallingPiece.y, shape)) {
                this.fallingPiece.shape = shape
            }
        }
        this.renderGameState()
    }
}