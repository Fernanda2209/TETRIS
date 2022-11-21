
/* We declare the global variables that we will use throughout the project */

const GAME_CLOCK = 1000 // Clock that we will use for the parts and the operation of the code in general
const BLOCK_SIDE_LENGTH = 30 //Length of each block
const ROWS = 20 // Number of rows
const COLS = 10 // Number of cols
const SCORE_WORTH = 10 // Value of the score

const SHAPES = [ 
    // We start with the matrix and the shape of each figure.
    [],
    [
        [0,0,0,0],
        [1,1,1,1],
        [0,0,0,0],
        [0,0,0,0]
    ], 
    // The number other than 0 draws the figure in space .
    // This process is done with the other figures.
    // Each figure is represented by a different number.

    [
        [2,0,0],
        [2,2,2],
        [0,0,0],
    ],

    [
        [0,0,3],
        [3,3,3],
        [0,0,0],
    ],

    [
        [4,4],
        [4,4],
    ],

    [
        [0,5,5],
        [5,5,0],
        [0,0,0],
    ],

    [
        [0,6,0],
        [6,6,6],
        [0,0,0],
    ],

    [
        [7,7,0],
        [0,7,7],
        [0,0,0],
    ],

]

const COLORS = [

    // create the color matrix
    // Each figure has its own color, we start with 0, which in this case is black, and we continue successively.

    '#000',
    '#E5BB35',
    '#46E3BA',
    '#64DB7A',
    '#F07896',
    '#60007D',
    '#7AC300',
    '#ECC43E',
    '#CC0019',
    '#AAD2DA',
    '#FE7210',
    '#FE7210'
    
]