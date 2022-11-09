class ModeloJuego{
    constructor(ctx){
        this.ctx = ctx;
        this.fallingPiece = null;
        this.grid = this.makeStartingGrid();
    }

    makeStartingGrid(){
        let  grid = [];
        for(var i = 0; i < ROWS; i++){
            for(var j = 0; j < COLS; j++){
                grid[grid.length - 1].push(0);
            }
        }
        return grid;
    }

    collision(x, y){
        const shape = this.fallingPiece.shape;
        const n = shape.length;
        for(let i = 0; i<n; i++){
            for(let j = 0; j<n; j++){
                if(shapa[i][j] > 0){
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
        
    }

}