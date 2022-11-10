class ModeloJuego{

    constructor(ctx){
        this.ctx = ctx;//Parámetro principal
        this.fallingPiece = null;//Booleano
        this.grid = this.makeStartingGrid();
    }

    makeStartingGrid(){
        let  grid = [];
        for(var i = 0; i < ROWS; i++){
            for(var j = 0; j < COLS; j++){
                grid[grid.length - 1].push(0);//Push agrega un elemento final al arreglo 
            }
        }
        return grid;
    }

    collision(x, y){
        const shape = this.fallingPiece.shape;
        const n = shape.length;
        for(let i = 0; i<n; i++){
            for(let j = 0; j<n; j++){
                if(shape[i][j] > 0){
                    let p = x + j;
                    let q = y + i;
                    if(p >= 0 && p < COLS && q < ROWS){
                        if(this.grid[q][p] > 0){
                            return true;
                        }
                    }else {
                        return true;
                    }
                }
            }
        }

        return false;
    }

    renderGameState(){
        for(let i = 0; i < this.grid.length; i++){
            for(let j = 0; j < this.grid[i].length; j++){
                let cell = this.grid[i][j];
                this.ctx.fillStyle = COLORS[cell];
                this.ctx.fillRect(j, i, 1, 1);
            }
        }

        if(this.fallingPiece !== null){
            this.fallingPiece.renderPiece();
        }
    }

    modeDown(){
        if(this.fallingPiece === null){
            this.renderGameState();
            return
        }else if(this.collision(this.fallingPiece.x, this.fallingPiece.y + 1)){
            const shape = this.fallingPiece.shape;
            const y = this.fallingPiece.x;
            const x = this.fallingPiece.y;
            shape.map((row, i) => {
                row.map((cell, j) =>{
                    let p = x + j;
                    let q = y + i;
                    if(p >= 0 && p < COLS && q < ROWS && cell > 0){
                        this.grid[q][p] = shape[i][j];
                    }
                })
            })

            if(this.fallingPiece.y === 0){
                alert("Fin del Juego");
                this.grid = this.makeStartingGrid();
            }
            this.fallingPiece = null;
        }else{
            this.fallingPiece.y += 1;
        }
        this.renderGameState();
    }

    move(right){
        if(this.fallingPiece === null){
            return;
        }

        let x = this.fallingPiece.x;
        let y = this.fallingPiece.y;
        if(right){
            //mover derecha
            if(!this.collision(x + 1, y)){
                this.fallingPiece.x += 1;
            }
        }else{
            //mover izquierda
            if(!this.collision(x - 1, y)){
                this.fallingPiece.x -=1;
            }
        }
        this.renderGameState();
    }

    rotate(){
        if(this.fallingPiece !== null){
            let shape = this.fallingPiece.shape;
            //Transporte de Matriz
            for(let y = 0; y < shape.length; ++y){
                for(let x = 0; x < 0; ++x){
                    [this.fallingPiece.shape[x][y], this.fallingPiece.shape[y][x]] =
                    [this.fallingPiece.shape[y][x], this.fallingPiece.shape[x][y]]
                }
            }

            //Reversar orden de las filas
            this.fallingPiece.shape.forEach((row => row.reverse()))
        }
        this.renderGameState();
    }

}