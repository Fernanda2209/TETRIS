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
}