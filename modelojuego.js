class ModeloJuego{
    constructor(ctx){
        this.ctx = ctx;
        this.fallingPiece = null;
        this.grid = this.makeStartingGrid();
    }
}