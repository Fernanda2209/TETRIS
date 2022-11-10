
/* In this part we declare some of the variables that we are going to use in general during the project.*/

const GAME_CLOCK = 1000 
const BLOCK_SIDE_LENGTH = 30 
const ROWS = 20 
const COLS = 10 
const SCORE_WORTH = 10 


/* Within this variable we are going to draw the figures that we will use in the game, by means of numbers being
 0 the blank spaces and from 1 to 7 depending on the figure. */

const SHAPES = [
    [],

    /* In this first case or figure we are going to give shape through the numbers that we mentioned before, we have to 
    take into account that we are going to rotate the figures so we will work in two dimensions */

    [
        [0,0,0,0],
        [1,1,1,1],
        [0,0,0,0],
        [0,0,0,0]
    ], 

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

   /*  This variable is the one that contains the colors that the different figures will have as they appear. */
   
    '#000000',
    '#FF0000',
    '#00FF00',
    '#0000FF',
    '#FFFF00',
    '#00FFFF',
    '#10FF01',
    '#F000FF'
]