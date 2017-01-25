// DOM IDs
var Board = document.getElementById('game');
var EdgeLeft = document.getElementById('gameEdgeLeft');
var EdgeRight = document.getElementById('gameEdgeRight');
var Start = document.getElementById('start');
var End = document.getElementById('end');
var Clear = document.getElementById('clear');
var ScoreBoard = document.getElementById('LinesComplete');
var HighScoreBoard = document.getElementById('HighScore');

// Memory
var history = [];  // Program by pushing from current shapes.  Why is this needed?
var shapeCounter = [];  // Make internal to the object?
var currentShapes = [[0],[0],[0],[0]];  // Each box coordinates are pushed in index 0 - 3 are the boxes 4 is the type of shape and 5 in the next shape in line.
var collisionsArray = [];  //  Organized [top,bottom,left,right]

var rowCount = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];  // 10 is full row
var rowRemoveIndexes = [];
var rowsRemoved = 0;
var lowestRowRemoved = 0;
var rowChangeStatus = false;

// Scoring
var score = 0;
var highScore = 0;
