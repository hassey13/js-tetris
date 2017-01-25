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
var blank = [0,0,0,0]; //For overwriting collisions table


// Generate Bottom line for collision
var collisionPopulate = function() {
  for(let i = 0; i <= 200; i += Options.ShapeSize) {
    collisionsArray.push([560, 580, i, i+Options.ShapeSize])
  };
};

// Game Status
var status = "false"; //figure out why this isn't working as boolean...
function statuslog() {
  if (status === "true") {
    console.log("Start!");
  }
  else {
    console.log("End!");
  };
};

// Object Definitions
var Options = {
  //Game Options
  "GameHeight" : 560,  //Got to change game edge for these 3 options
  "ShapeSize" : 20,
  "GameEnd" : 140,
// Colors
  //Shapes
  "StraightColor" : "blue",
  "SquareColor" : "white",
  "TColor" : "green",
  "LColor" : "orange",
  "ReverseRColor" : "pink",
  "ZColor" : "purple",
  "ReverseZColor" : "red",
  //Display
  "Background" : "black",
  "Sort" : "descending",
  // Start Speed
  "DropSpeed" : 2,  // Test might have to be divisible into 20
  // Key Bindings
  "LEFT" : 37, // Left Arrow
  "RIGHT" : 39, // Right Arrow
  "ROTATE" : 32, // Space Bar
  "DOWN" : 40 // Down Arrow
  // Add Pause?
};
var PreviewBox = {
  //opacity 0 bottom border is removed when piece starts falling
};
var ShapeHistory = {
  // sort option?
};
var Straight = {
  //Create shape classes in here rather than CSS?
  "Orientation" : 1,
  create: function() {
    var box1 = document.createElement('div');
    box1.className = 'active';
    box1.textContent = "1"
    Board.appendChild(box1);
    var box2 = document.createElement('div');
    box2.className = 'active';
    box2.style.top = `${Options.ShapeSize}px`;
    box2.textContent = "2"
    Board.appendChild(box2);
    var box3 = document.createElement('div');
    box3.className = 'active';
    box3.style.top = `${Options.ShapeSize*2}px`;
    box3.textContent = "3"
    Board.appendChild(box3);
    var box4 = document.createElement('div');
    box4.className = 'active';
    box4.style.top = `${Options.ShapeSize*3}px`;
    box4.textContent = "4"
    Board.appendChild(box4);
  },
  rotate: function() {
    // if(Straight.Orientation) {
    //   var current1 = document.getElementsByClassName('active')[0];
    //   var current2 = document.getElementsByClassName('active')[1];
    //   var current3 = document.getElementsByClassName('active')[2];
    //   var current4 = document.getElementsByClassName('active')[3];

    //   var top1 = positionToInteger(current1.style.top);
    //   current1.style.top = `${top1 + Options.ShapeSize*3}`;

    //   var top2 = positionToInteger(current2.style.top);
    //   var left2 = positionToInteger(current2.style.left);
    //   current2.style.top = `${top2 + Options.ShapeSize*2}`;
    //   current2.style.left = `${left2 + Options.ShapeSize}`;

    //   var top3 = positionToInteger(current3.style.top);
    //   var left3 = positionToInteger(current3.style.left);
    //   current3.style.top = `${top3 + Options.ShapeSize}`;
    //   current3.style.left = `${left3 + Options.ShapeSize*2}`;

    //   var left4 = positionToInteger(current4.style.left);
    //   current4.style.left = `${left4 + Options.ShapeSize*3}`;
    //   Straight.Orientation = false;
    // }
    // else {
    //   var current1 = document.getElementsByClassName('active')[0];
    //   var current2 = document.getElementsByClassName('active')[1];
    //   var current3 = document.getElementsByClassName('active')[2];
    //   var current4 = document.getElementsByClassName('active')[3];

    //   var top1 = positionToInteger(current1.style.top);
    //   current1.style.top = `${top1 - Options.ShapeSize*3}`;

    //   var top2 = positionToInteger(current2.style.top);
    //   var left2 = positionToInteger(current2.style.left);
    //   current2.style.top = `${top2 - Options.ShapeSize*2}`;
    //   current2.style.left = `${left2 - Options.ShapeSize}`;

    //   var top3 = positionToInteger(current3.style.top);
    //   var left3 = positionToInteger(current3.style.left);
    //   current3.style.top = `${top3 - Options.ShapeSize}`;
    //   current3.style.left = `${left3 - Options.ShapeSize*2}`;

    //   var left4 = positionToInteger(current4.style.left);
    //   current4.style.left = `${left4 - Options.ShapeSize*3}`;
    //   Straight.Orientation = true;
    // }
  }
};

var T = {
  "Orientation" : 1,
  create: function() {
    var box1 = document.createElement('div');
    box1.className = 'active';
    box1.style.left = `${Options.ShapeSize}px`;
    box1.textContent = "1"
    Board.appendChild(box1);
    var box2 = document.createElement('div');
    box2.className = 'active';
    box2.style.top = `${Options.ShapeSize}px`;
    box2.textContent = "2"
    Board.appendChild(box2);
    var box3 = document.createElement('div');
    box3.className = 'active';
    box3.style.top = `${Options.ShapeSize}px`;
    box3.style.left = `${Options.ShapeSize}px`;
    box3.textContent = "3"
    Board.appendChild(box3);
    var box4 = document.createElement('div');
    box4.className = 'active';
    box4.style.top = `${Options.ShapeSize}px`;
    box4.style.left = `${Options.ShapeSize*2}px`;
    box4.textContent = "4"
    Board.appendChild(box4);
  },
  rotate: function() {
    console.log("3");
    var current1 = document.getElementsByClassName('active')[0];
    var current2 = document.getElementsByClassName('active')[1];
    var current3 = document.getElementsByClassName('active')[2];
    var current4 = document.getElementsByClassName('active')[3];

    var top1 = positionToInteger(current1.style.top);
    current1.style.top = `${top1 + Options.ShapeSize*3}px`;

    var top2 = positionToInteger(current2.style.top);
    var left2 = positionToInteger(current2.style.left);
    current2.style.top = `${top2 + Options.ShapeSize*2}px`;
    current2.style.left = `${left2 + Options.ShapeSize}px`;

    var top3 = positionToInteger(current3.style.top);
    var left3 = positionToInteger(current3.style.left);
    current3.style.top = `${top3 + Options.ShapeSize}px`;
    current3.style.left = `${left3 + Options.ShapeSize*2}px`;

    var top4 = positionToInteger(current4.style.top);
    var left4 = positionToInteger(current4.style.left);
    current4.style.top = `${top4 + Options.ShapeSize}px`;
    current4.style.left = `${left4 + Options.ShapeSize*3}px`;
    console.log("4");
  }
};

var Square = {
  "Orientation" : 1,
  create: function() {
    var box1 = document.createElement('div');
    box1.className = 'active';
    box1.textContent = "1"
    Board.appendChild(box1);
    var box2 = document.createElement('div');
    box2.className = 'active';
    box2.style.left = `${Options.ShapeSize}px`;
    box2.textContent = "2"
    Board.appendChild(box2);
    var box3 = document.createElement('div');
    box3.className = 'active';
    box3.style.top = `${Options.ShapeSize}px`;
    box3.textContent = "3"
    Board.appendChild(box3);
    var box4 = document.createElement('div');
    box4.className = 'active';
    box4.style.top = `${Options.ShapeSize}px`;
    box4.style.left = `${Options.ShapeSize}px`;
    box4.textContent = "4"
    Board.appendChild(box4);

  },
  rotate: function() {
  }
};

var L = {
  "Orientation" : 1,
  create: function() {
    var box1 = document.createElement('div');
    box1.className = 'active';
    box1.textContent = "1"
    Board.appendChild(box1);
    var box2 = document.createElement('div');
    box2.className = 'active';
    box2.style.top = `${Options.ShapeSize}px`;
    box2.textContent = "2"
    Board.appendChild(box2);
    var box3 = document.createElement('div');
    box3.className = 'active';
    box3.style.top = `${Options.ShapeSize*2}px`;
    box3.textContent = "3"
    Board.appendChild(box3);
    var box4 = document.createElement('div');
    box4.className = 'active';
    box4.style.top = `${Options.ShapeSize*2}px`;
    box4.style.left = `${Options.ShapeSize}px`;
    box4.textContent = "4"
    Board.appendChild(box4);

  },
  rotate: function() {
  }
};

var ReverseL = {
  /*
    1
    2
   34
  */
  "Orientation" : 1,
  create: function() {
    var box1 = document.createElement('div');
    box1.className = 'active';
    box1.style.left = `${Options.ShapeSize}px`;
    box1.textContent = "1"
    Board.appendChild(box1);
    var box2 = document.createElement('div');
    box2.className = 'active';
    box2.style.top = `${Options.ShapeSize}px`;
    box2.style.left = `${Options.ShapeSize}px`;
    box2.textContent = "2"
    Board.appendChild(box2);
    var box3 = document.createElement('div');
    box3.className = 'active';
    box3.style.top = `${Options.ShapeSize*2}px`;
    box3.textContent = "3"
    Board.appendChild(box3);
    var box4 = document.createElement('div');
    box4.className = 'active';
    box4.style.top = `${Options.ShapeSize*2}px`;
    box4.style.left = `${Options.ShapeSize}px`;
    box4.textContent = "4"
    Board.appendChild(box4);

  },
  rotate: function() {
  }
};

var Z = {
  "Orientation" : 1,
  create: function() {
    var box1 = document.createElement('div');
    box1.className = 'active';
    box1.textContent = "1"
    Board.appendChild(box1);
    var box2 = document.createElement('div');
    box2.className = 'active';
    box2.style.left = `${Options.ShapeSize}px`;
    box2.textContent = "2"
    Board.appendChild(box2);
    var box3 = document.createElement('div');
    box3.className = 'active';
    box3.style.top = `${Options.ShapeSize}px`;
    box3.style.left = `${Options.ShapeSize}px`;
    box3.textContent = "3"
    Board.appendChild(box3);
    var box4 = document.createElement('div');
    box4.className = 'active';
    box4.style.top = `${Options.ShapeSize}px`;
    box4.style.left = `${Options.ShapeSize*2}px`;
    box4.textContent = "4"
    Board.appendChild(box4);

  },
  rotate: function() {
  }
};

            /*      1     2
                 12    1     12
                34     23   34
                        4
            */

var ReverseZ = {
  "Orientation" : 1,
  create: function() {
    var box1 = document.createElement('div');
    box1.className = 'active';
    box1.style.left = `${Options.ShapeSize}px`;
    box1.textContent = "1"
    Board.appendChild(box1);
    var box2 = document.createElement('div');
    box2.className = 'active';
    box2.style.left = `${Options.ShapeSize*2}px`;
    box2.textContent = "2"
    Board.appendChild(box2);
    var box3 = document.createElement('div');
    box3.className = 'active';
    box3.style.top = `${Options.ShapeSize}px`;
    box3.textContent = "3"
    Board.appendChild(box3);
    var box4 = document.createElement('div');
    box4.className = 'active';
    box4.style.top = `${Options.ShapeSize}px`;
    box4.style.left = `${Options.ShapeSize}px`;
    box4.textContent = "4"
    Board.appendChild(box4);

  },
  rotate: function() {
  }
};

//Functions


var classFinder = function() {  //Determines what class to assign to a placed shape
  var shapeClass = currentShapes[4];
  // shapeClass = shapeClass.toLowerCase();
  var current1 = document.getElementsByClassName('active')[0];
  var current2 = document.getElementsByClassName('active')[1];
  var current3 = document.getElementsByClassName('active')[2];
  var current4 = document.getElementsByClassName('active')[3];

  var top1 = positionToInteger(current1.style.top);
  var left1 = positionToInteger(current1.style.left);
  var bottom1 = top1 + Options.ShapeSize;
  var right1 = left1 + Options.ShapeSize;

  var top2 = positionToInteger(current2.style.top);
  var left2 = positionToInteger(current2.style.left);
  var bottom2 = top2 + Options.ShapeSize;
  var right2 = left2 + Options.ShapeSize;

  var top3 = positionToInteger(current3.style.top);
  var left3 = positionToInteger(current3.style.left);
  var bottom3 = top3 + Options.ShapeSize;
  var right3 = left3 + Options.ShapeSize;

  var top4 = positionToInteger(current4.style.top);
  var left4 = positionToInteger(current4.style.left);
  var bottom4 = top4 + Options.ShapeSize;
  var right4 = left4 + Options.ShapeSize;

  switch(currentShapes[4]) {
    case 'Straight':
      current1.className = 'straight';
      current1.style.top = top1;
      current1.style.left = left1;

      current2.className = 'straight';
      current2.style.top = top2;
      current2.style.left = left2;

      current3.className = 'straight';
      current3.style.top = top3;
      current3.style.left = left3;

      current4.className = 'straight';
      current4.style.top = top4;
      current4.style.left = left4;
    break;
    case 'T':
    current1.className = 't';
    current1.style.top = top1;
    current1.style.left = left1;

    current2.className = 't';
    current2.style.top = top2;
    current2.style.left = left2;

    current3.className = 't';
    current3.style.top = top3;
    current3.style.left = left3;

    current4.className = 't';
    current4.style.top = top4;
    current4.style.left = left4;
    break;
    case 'Square':
    current1.className = 'square';
    current1.style.top = top1;
    current1.style.left = left1;

    current2.className = 'square';
    current2.style.top = top2;
    current2.style.left = left2;

    current3.className = 'square';
    current3.style.top = top3;
    current3.style.left = left3;

    current4.className = 'square';
    current4.style.top = top4;
    current4.style.left = left4;
    break;
    case 'L':
    current1.className = 'l';
    current1.style.top = top1;
    current1.style.left = left1;

    current2.className = 'l';
    current2.style.top = top2;
    current2.style.left = left2;

    current3.className = 'l';
    current3.style.top = top3;
    current3.style.left = left3;

    current4.className = 'l';
    current4.style.top = top4;
    current4.style.left = left4;
    break;
    case 'ReverseL':
    current1.className = 'reverseL';
    current1.style.top = top1;
    current1.style.left = left1;

    current2.className = 'reverseL';
    current2.style.top = top2;
    current2.style.left = left2;

    current3.className = 'reverseL';
    current3.style.top = top3;
    current3.style.left = left3;

    current4.className = 'reverseL';
    current4.style.top = top4;
    current4.style.left = left4;
    break;
    case 'Z':
    current1.className = 'z';
    current1.style.top = top1;
    current1.style.left = left1;

    current2.className = 'z';
    current2.style.top = top2;
    current2.style.left = left2;

    current3.className = 'z';
    current3.style.top = top3;
    current3.style.left = left3;

    current4.className = 'z';
    current4.style.top = top4;
    current4.style.left = left4;
    break;
    case 'ReverseZ':
    current1.className = 'reverseZ';
    current1.style.top = top1;
    current1.style.left = left1;

    current2.className = 'reverseZ';
    current2.style.top = top2;
    current2.style.left = left2;

    current3.className = 'reverseZ';
    current3.style.top = top3;
    current3.style.left = left3;

    current4.className = 'reverseZ';
    current4.style.top = top4;
    current4.style.left = left4;
    break;
    default:
    console.log("Error, shape class assignment mismatch");
  }
}
var dropFunction = function() {
  var current1 = document.getElementsByClassName('active')[0];
  var current2 = document.getElementsByClassName('active')[1];
  var current3 = document.getElementsByClassName('active')[2];
  var current4 = document.getElementsByClassName('active')[3];

  var top1 = positionToInteger(current1.style.top);
  var left1 = positionToInteger(current1.style.left);
  var bottom1 = top1 + Options.ShapeSize;
  var right1 = left1 + Options.ShapeSize;

  var top2 = positionToInteger(current2.style.top);
  var left2 = positionToInteger(current2.style.left);
  var bottom2 = top2 + Options.ShapeSize;
  var right2 = left2 + Options.ShapeSize;

  var top3 = positionToInteger(current3.style.top);
  var left3 = positionToInteger(current3.style.left);
  var bottom3 = top3 + Options.ShapeSize;
  var right3 = left3 + Options.ShapeSize;

  var top4 = positionToInteger(current4.style.top);
  var left4 = positionToInteger(current4.style.left);
  var bottom4 = top4 + Options.ShapeSize;
  var right4 = left4 + Options.ShapeSize;

  current1.style.top = `${top1 += Options.DropSpeed}px`;
  current2.style.top = `${top2 += Options.DropSpeed}px`;
  current3.style.top = `${top3 += Options.DropSpeed}px`;
  current4.style.top = `${top4 += Options.DropSpeed}px`;

  var bottom1 = top1 + Options.ShapeSize;
  var bottom2 = top2 + Options.ShapeSize;
  var bottom3 = top3 + Options.ShapeSize;
  var bottom4 = top4 + Options.ShapeSize;

  var shape1 = [top1,bottom1,left1,right1];
  var shape2 = [top2,bottom2,left2,right2];
  var shape3 = [top3,bottom3,left3,right3];
  var shape4 = [top4,bottom4,left4,right4];

  if (top1 % Options.ShapeSize === 0) {  //Only evaluates every complete shape size drop to save processing since it can't collide at that point
    currentShapes[0] = shape1;
    currentShapes[1] = shape2;
    currentShapes[2] = shape3;
    currentShapes[3] = shape4;

    //console.log(currentShapes); // For Debugging.


    //Bug, can move at this point and misalign shape/ collision.
    if(checkCollision()) {
      document.removeEventListener('keydown', moveShape);
      collisionsArray.push(currentShapes[0]);
      collisionsArray.push(currentShapes[1]);
      collisionsArray.push(currentShapes[2]);
      collisionsArray.push(currentShapes[3]);

      //Add to row count array
      var row = (Options.GameHeight - currentShapes[0][0]) / Options.ShapeSize;
      rowCount[row - 1] += 1;
      var row = (Options.GameHeight - currentShapes[1][0]) / Options.ShapeSize;
      rowCount[row - 1] += 1;
      var row = (Options.GameHeight - currentShapes[2][0]) / Options.ShapeSize;
      rowCount[row - 1] += 1;
      var row = (Options.GameHeight - currentShapes[3][0]) / Options.ShapeSize;
      rowCount[row - 1] += 1;
      console.log(rowCount);

      for (let i = 0; i < rowCount.length; i++) {
        if(rowCount[i] === 10) {
          // REMOVE ROW
            rowCount[i]
            if(lowestRowRemoved === 0) {
              lowestRowRemoved = i;
              rowChangeStatus = true;
            }
            rowsRemoved++;
            // Shift all row counts down?

          //FIND Indexes of blocks in that row
          for (let c = 11; c < collisionsArray.length; c++) {
            if(collisionsArray[c][0] === Options.GameHeight - ((i+1) * Options.ShapeSize)) {
                //rowRemoveIndexes.push(c);
                collisionsArray[c] = [0,0,0,0];
                $(`#game :nth-child(${c - 10})`).css("display", "none");
            }
            if(collisionsArray[c][0] < Options.GameHeight - ((i+1) * Options.ShapeSize)) {
                //console.log('CollisionChange: ' + collisionsArray[c][0])
                collisionsArray[c][0] += Options.ShapeSize; //Shift collision table history a row down
                $(`#game :nth-child(${c - 10})`).css( "top", `${collisionsArray[c][0]}px`);
                //console.log('CollisionChange: ' + collisionsArray[c][0])
                collisionsArray[c][1] += Options.ShapeSize;
            }
          }
          score++;
          ScoreBoard.textContent = "Lines Complete: " + score;
          //Add highscore logic
          if(score >= highScore) {
            highScore = score;
            HighScoreBoard.textContent = "High Score: " + highScore;
          };
        }
      }
      //Reset row counts from change

      if(rowChangeStatus) {
        for(let r = lowestRowRemoved - 1; r < rowCount.length; r++) {
          //passing 10s down... something is wrong.
          if(r <= 19 - rowsRemoved) {
            rowCount[r] = rowCount[r+1];
          }
          else {
            rowCount[r] = 0;
          }
        }
      }
      rowChangeStatus = false;
      lowestRowRemoved = 0;
      rowsRemoved = 0;

      // insert classshape tool.
      classFinder();
      //console.log("Shape should be: " + currentShapes[4])

      // Shape Shift to next in Queue
      currentShapes[4] = currentShapes[5];
      currentShapes[5] = '';
      shapeCreator();  // Eventually Shape Generate and create
      //console.log("Collision!")
      shapeGenerator();


      if(top1 === Options.GameEnd || top2 === Options.GameEnd || top3 === Options.GameEnd || top4 === Options.GameEnd) {
        endOfGame();
      }
      document.addEventListener('keydown', moveShape);
    };
  };
};
var futureCheckCollision = function() { //Used for movement checks to avoid overlap with other pieces

}
var checkCollision = function() {
  // Collision only matters for bottom
  for (let i = 0; i < collisionsArray.length; i++) {
    if (currentShapes[0][1] === collisionsArray[i][0] && currentShapes[0][2] === collisionsArray[i][2] && currentShapes[0][3] === collisionsArray[i][3] || currentShapes[1][1] === collisionsArray[i][0] && currentShapes[1][2] === collisionsArray[i][2] && currentShapes[1][3] === collisionsArray[i][3] || currentShapes[2][1] === collisionsArray[i][0] && currentShapes[2][2] === collisionsArray[i][2] && currentShapes[2][3] === collisionsArray[i][3] || currentShapes[3][1] === collisionsArray[i][0] && currentShapes[3][2] === collisionsArray[i][2] && currentShapes[3][3] === collisionsArray[i][3]) {
      return true;
    };
  };
  return false;
};
var animate = function() {
    if(status === "true") {
      requestAnimFrame(animate);
      dropFunction();
    };
};
var moveShape = function(e) {
  //User Movements
  var key = e.which;
  if(key === Options.LEFT) {
    moveShapeLeft();
  };
  if(key === Options.RIGHT) {
    moveShapeRight();
  };
  if(key === Options.DOWN) {
    moveShapeDown();
  };
  if(key === Options.ROTATE) {
    console.log("ROTATE");
    rotateShape();
  };
};
var moveShapeLeft = function() {
  var current1 = document.getElementsByClassName('active')[0];
  var current2 = document.getElementsByClassName('active')[1];
  var current3 = document.getElementsByClassName('active')[2];
  var current4 = document.getElementsByClassName('active')[3];
  window.requestAnimFrame(function() {
    var left1 = positionToInteger(current1.style.left)
    var left2 = positionToInteger(current2.style.left)
    var left3 = positionToInteger(current3.style.left)
    var left4 = positionToInteger(current4.style.left)

    if (left1 > 0 && left2 > 0 && left3 > 0 && left4 > 0 /* || object in the way */) {
      current1.style.left = `${left1 - Options.ShapeSize}px`;
      current2.style.left = `${left2 - Options.ShapeSize}px`;
      current3.style.left = `${left3 - Options.ShapeSize}px`;
      current4.style.left = `${left4 - Options.ShapeSize}px`;
    };
  });
};
var moveShapeRight = function() {
  var current1 = document.getElementsByClassName('active')[0];
  var current2 = document.getElementsByClassName('active')[1];
  var current3 = document.getElementsByClassName('active')[2];
  var current4 = document.getElementsByClassName('active')[3];
  window.requestAnimFrame(function() {
    var left1 = positionToInteger(current1.style.left)
    var left2 = positionToInteger(current2.style.left)
    var left3 = positionToInteger(current3.style.left)
    var left4 = positionToInteger(current4.style.left)

    if (left1 < 180 && left2 < 180 && left3 < 180 && left4 < 180 /* || object in the way make function that returns booleen for this...*/) {
      current1.style.left = `${left1 + Options.ShapeSize}px`;
      current2.style.left = `${left2 + Options.ShapeSize}px`;
      current3.style.left = `${left3 + Options.ShapeSize}px`;
      current4.style.left = `${left4 + Options.ShapeSize}px`;
    };
  });
};
var moveShapeDown = function() {  //Underconstruction.
  var current1 = document.getElementsByClassName('active')[0];
  var current2 = document.getElementsByClassName('active')[1];
  var current3 = document.getElementsByClassName('active')[2];
  var current4 = document.getElementsByClassName('active')[3];

  // window.requestAnimFrame(function() {
  //   var bottom1 = positionToInteger(current1.style.top) + Options.ShapeSize;
  //   var bottom2 = positionToInteger(current2.style.top) + Options.ShapeSize;
  //   var bottom3 = positionToInteger(current3.style.top) + Options.ShapeSize;
  //   var bottom4 = positionToInteger(current4.style.top) + Options.ShapeSize;
  //   for (let i = 0; i < collisionsArray.length; i++) {
  //     if(!(currentShapes[0][1] + Options.ShapeSize === collisionsArray[i][0] && currentShapes[0][2] === collisionsArray[i][2] && currentShapes[0][3] === collisionsArray[i][3] || currentShapes[1][1] + Options.ShapeSize === collisionsArray[i][0] && currentShapes[1][2] === collisionsArray[i][2] && currentShapes[1][3] === collisionsArray[i][3] || currentShapes[2][1] + Options.ShapeSize === collisionsArray[i][0] && currentShapes[2][2] === collisionsArray[i][2] && currentShapes[2][3] === collisionsArray[i][3] || currentShapes[3][1] + Options.ShapeSize === collisionsArray[i][0] && currentShapes[3][2] === collisionsArray[i][2] && currentShapes[3][3] === collisionsArray[i][3])) {
  //       current1.style.top = `${bottom1 + Options.ShapeSize}px`;
  //       current2.style.top = `${bottom2 + Options.ShapeSize}px`;
  //       current3.style.top = `${bottom3 + Options.ShapeSize}px`;
  //       current4.style.top = `${bottom4 + Options.ShapeSize}px`;
  //     }
  //   };
  // });
}
var rotateShape = function() {
  var current1 = document.getElementsByClassName('active')[0];
  var current2 = document.getElementsByClassName('active')[1];
  var current3 = document.getElementsByClassName('active')[2];
  var current4 = document.getElementsByClassName('active')[3];
  window.requestAnimFrame(function() {
    var left1 = positionToInteger(current1.style.left)
    var left2 = positionToInteger(current2.style.left)
    var left3 = positionToInteger(current3.style.left)
    var left4 = positionToInteger(current4.style.left)
    console.log("1")

    //inbounds left and right - add in object in the way
    if (left1 <= 180 && left2 <= 180 && left3 <= 180 && left4 <= 180 && left1 >= 0 && left2 >= 0 && left3 >= 0 && left4 >= 0 /* || object in the way */) {

      // Straight.rotate(); <--- Need to troubleshoot further.
      switch(currentShapes[4]) {
        case 'Straight':
          switch(Straight.Orientation) {
            case 1:
              var top1 = positionToInteger(current1.style.top);
              current1.style.top = `${top1 + Options.ShapeSize*3}px`;
              var top2 = positionToInteger(current2.style.top);
              current2.style.top = `${top2 + Options.ShapeSize*2}px`;
              current2.style.left = `${left2 + Options.ShapeSize}px`;
              var top3 = positionToInteger(current3.style.top);
              current3.style.top = `${top3 + Options.ShapeSize}px`;
              current3.style.left = `${left3 + Options.ShapeSize*2}px`;
              var top4 = positionToInteger(current4.style.top);
              current4.style.left = `${left4 + Options.ShapeSize*3}px`;
              Straight.Orientation = 2;
            break
            case 2:
              var top1 = positionToInteger(current1.style.top);
              current1.style.top = `${top1 - Options.ShapeSize*3}px`;
              var top2 = positionToInteger(current2.style.top);
              current2.style.top = `${top2 - Options.ShapeSize*2}px`;
              current2.style.left = `${left2 - Options.ShapeSize}px`;
              var top3 = positionToInteger(current3.style.top);
              current3.style.top = `${top3 - Options.ShapeSize}px`;
              current3.style.left = `${left3 - Options.ShapeSize*2}px`;
              var top4 = positionToInteger(current4.style.top);
              current4.style.left = `${left4 - Options.ShapeSize*3}px`;
              Straight.Orientation = 3;
            break;
            case 3:
              var top1 = positionToInteger(current1.style.top);
              current1.style.top = `${top1 + Options.ShapeSize*3}px`;
              var top2 = positionToInteger(current2.style.top);
              current2.style.top = `${top2 + Options.ShapeSize*2}px`;
              current2.style.left = `${left2 + Options.ShapeSize}px`;
              var top3 = positionToInteger(current3.style.top);
              current3.style.top = `${top3 + Options.ShapeSize}px`;
              current3.style.left = `${left3 + Options.ShapeSize*2}px`;
              var top4 = positionToInteger(current4.style.top);
              current4.style.left = `${left4 + Options.ShapeSize*3}px`;
              Straight.Orientation = 4;
            break;
            case 4:
              var top1 = positionToInteger(current1.style.top);
              current1.style.top = `${top1 - Options.ShapeSize*3}px`;
              var top2 = positionToInteger(current2.style.top);
              current2.style.top = `${top2 - Options.ShapeSize*2}px`;
              current2.style.left = `${left2 - Options.ShapeSize}px`;
              var top3 = positionToInteger(current3.style.top);
              current3.style.top = `${top3 - Options.ShapeSize}px`;
              current3.style.left = `${left3 - Options.ShapeSize*2}px`;
              var top4 = positionToInteger(current4.style.top);
              current4.style.left = `${left4 - Options.ShapeSize*3}px`;
              Straight.Orientation = 1;
            break;
            default:
            console.log('Rotation error');
          }
        break;
        case 'T':
          switch(T.Orientation) {
            case 1:
              var top1 = positionToInteger(current1.style.top);
              current1.style.top = `${top1 - Options.ShapeSize}px`;
              var top2 = positionToInteger(current2.style.top);
              current2.style.top = `${top2 - Options.ShapeSize}px`;
              current2.style.left = `${left2 + Options.ShapeSize}px`;
              var top3 = positionToInteger(current3.style.top);
              var left3 = positionToInteger(current3.style.left);
              current3.style.top = `${top3 - Options.ShapeSize}px`;
              current3.style.left = `${left3 + Options.ShapeSize}px`;
              var top4 = positionToInteger(current4.style.top);
              current4.style.left = `${left4 - Options.ShapeSize}px`;
              T.Orientation = 2;
/*  1    2   3    4
 1   1        1   1
234  23  123 23  234
     4    4   4
*/
            break
            case 2:
              var top1 = positionToInteger(current1.style.top)
              var left1 = positionToInteger(current1.style.left);
              current1.style.top = `${top1 + Options.ShapeSize}px`;
              current1.style.left = `${left1 - Options.ShapeSize}px`;
              T.Orientation = 3;
            break;
            case 3:
              var top1 = positionToInteger(current1.style.top)
              var left1 = positionToInteger(current1.style.left);
              current1.style.top = `${top1 - Options.ShapeSize}px`;
              current1.style.left = `${left1 + Options.ShapeSize}px`;
              var left2 = positionToInteger(current2.style.left);
              current2.style.left = `${left2 - Options.ShapeSize}px`;
              var left3 = positionToInteger(current3.style.left);
              current3.style.left = `${left3 - Options.ShapeSize}px`;
              T.Orientation = 4;
            break;
            case 4:
              var top4 = positionToInteger(current4.style.top);
              var left4 = positionToInteger(current4.style.left);
              current4.style.top = `${top4 - Options.ShapeSize}px`;
              current4.style.left = `${left4 + Options.ShapeSize}px`;
              T.Orientation = 1;
            break;
            default:
            console.log('Rotation error');
          }
        break;
        case 'Square':
          console.log("You don't rotate squares!")
        break;
        case 'L':
          switch(L.Orientation) {
            /*     1    2    3    4
               1        12         1
               2   123   3    1    2
               34  4     4  234    34
            */
            case 1:
              var top1 = positionToInteger(current1.style.top);
              current1.style.top = `${top1 + Options.ShapeSize}px`;
              var left2 = positionToInteger(current2.style.left);
              current2.style.left = `${left2 + Options.ShapeSize}px`;
              var top3 = positionToInteger(current3.style.top);
              var left3 = positionToInteger(current3.style.left);
              current3.style.top = `${top3 - Options.ShapeSize}px`;
              current3.style.left = `${left3 + Options.ShapeSize*2}px`;
              var top4 = positionToInteger(current4.style.top);
              current4.style.left = `${left4 - Options.ShapeSize}px`;
              L.Orientation = 2
            break
            case 2:
              var top1 = positionToInteger(current1.style.top);
              current1.style.top = `${top1 - Options.ShapeSize}px`;
              var top2 = positionToInteger(current2.style.top);
              current2.style.top = `${top2 - Options.ShapeSize}px`;
              var left3 = positionToInteger(current3.style.left);
              current3.style.left = `${left3 - Options.ShapeSize}px`;
              var left4 = positionToInteger(current4.style.left);
              current4.style.left = `${left4 + Options.ShapeSize}px`;
              L.Orientation = 3
            break;
            case 3:
              var top1 = positionToInteger(current1.style.top);
              var left1 = positionToInteger(current1.style.left);
              current1.style.top = `${top1 + Options.ShapeSize}px`;
              current1.style.left = `${left1 + Options.ShapeSize*2}px`;
              var top2 = positionToInteger(current2.style.top);
              current2.style.top = `${top2 + Options.ShapeSize*2}px`;
              current2.style.left = `${left2 - Options.ShapeSize}px`;
              var top3 = positionToInteger(current3.style.top);
              current3.style.top = `${top3 + Options.ShapeSize}px`;
              var top4 = positionToInteger(current4.style.top);
              current4.style.left = `${left4 + Options.ShapeSize}px`;
              L.Orientation = 4
            break;
            case 4:
              var top1 = positionToInteger(current1.style.top);
              var left1 = positionToInteger(current1.style.left);
              current1.style.top = `${top1 - Options.ShapeSize}px`;
              current1.style.left = `${left1 - Options.ShapeSize}px`;
              var top2 = positionToInteger(current2.style.top);
              var left2 = positionToInteger(current2.style.left);
              current2.style.top = `${top2 - Options.ShapeSize}px`;
              current2.style.left = `${left2 + Options.ShapeSize}px`;
              L.Orientation = 1
            break;
            default:
            console.log('Rotation error');
          }
        break;
        case 'ReverseL':
          switch(ReverseL.Orientation) {
            /*     1    2    3    4
                1        12         1
                2   1    3   123    2
               34   234  4     4   34
            */
            case 1:
              var top1 = positionToInteger(current1.style.top);
              var left1 = positionToInteger(current1.style.left);
              current1.style.top = `${top1 + Options.ShapeSize}px`;
              current1.style.left = `${left1 - Options.ShapeSize}px`;
              var top2 = positionToInteger(current2.style.top);
              var left2 = positionToInteger(current2.style.left);
              current2.style.top = `${top2 + Options.ShapeSize}px`;
              current2.style.left = `${left2 - Options.ShapeSize}px`;
              var left3 = positionToInteger(current3.style.left);
              current3.style.left = `${left3 + Options.ShapeSize}px`;
              var left4 = positionToInteger(current4.style.left);
              current4.style.left = `${left4 + Options.ShapeSize}px`;
              ReverseL.Orientation = 2;
            break
            case 2:
              var top1 = positionToInteger(current1.style.top);
              current1.style.top = `${top1 - Options.ShapeSize}px`;
              var top2 = positionToInteger(current2.style.top);
              var left2 = positionToInteger(current2.style.left);
              current2.style.top = `${top2 - Options.ShapeSize*2}px`;
              current2.style.left = `${left2 + Options.ShapeSize}px`;
              var top3 = positionToInteger(current3.style.top);
              var left3 = positionToInteger(current3.style.left);
              current3.style.top = `${top3 - Options.ShapeSize}px`;
              current3.style.left = `${left3 - Options.ShapeSize}px`;
              var top4 = positionToInteger(current4.style.top);
              current4.style.left = `${left4 - Options.ShapeSize*2}px`;
              ReverseL.Orientation = 3;
            break;
            case 3:
              var top1 = positionToInteger(current1.style.top);
              var left1 = positionToInteger(current1.style.left);
              current1.style.top = `${top1 + Options.ShapeSize}px`;
              current1.style.left = `${left1 - Options.ShapeSize}px`;
              var top2 = positionToInteger(current2.style.top);
              var left2 = positionToInteger(current2.style.left);
              current2.style.top = `${top2 + Options.ShapeSize}px`;
              current2.style.left = `${left2 - Options.ShapeSize}px`;
              var left3 = positionToInteger(current3.style.left);
              current3.style.left = `${left3 + Options.ShapeSize}px`;
              var left4 = positionToInteger(current4.style.left);
              current4.style.left = `${left4 + Options.ShapeSize}px`;
              ReverseL.Orientation = 4;
            break;
            case 4:
              var top1 = positionToInteger(current1.style.top);
              var left1 = positionToInteger(current1.style.left);
              current1.style.top = `${top1 - Options.ShapeSize}px`;
              current1.style.left = `${left1 + Options.ShapeSize*2}px`;
              var left2 = positionToInteger(current2.style.left);
              current2.style.left = `${left2 + Options.ShapeSize}px`;
              var top3 = positionToInteger(current3.style.top);
              current3.style.top = `${top3 + Options.ShapeSize}px`;
              current3.style.left = `${left3 - Options.ShapeSize}px`;
              ReverseL.Orientation = 1;
            break;
            default:
            console.log('Rotation error');
          }
        break;
        case 'Z':
          switch(Z.Orientation) {
            /*      1       2
               12     1     12
                34   23      34
                     4
            */
            case 1:
              var left1 = positionToInteger(current1.style.left);
              current1.style.left = `${left1 + Options.ShapeSize}px`;
              var top2 = positionToInteger(current2.style.top);
              current2.style.top = `${top2 + Options.ShapeSize}px`;
              current2.style.left = `${left2 - Options.ShapeSize}px`;
              var top4 = positionToInteger(current4.style.top);
              var left4 = positionToInteger(current4.style.left);
              current4.style.top = `${top4 + Options.ShapeSize}px`;
              current4.style.left = `${left4 - Options.ShapeSize*2}px`;
              Z.Orientation = 2
            break
            case 2:
              var left1 = positionToInteger(current1.style.left);
              current1.style.left = `${left1 - Options.ShapeSize}px`;
              var top2 = positionToInteger(current2.style.top);
              current2.style.top = `${top2 - Options.ShapeSize}px`;
              current2.style.left = `${left2 + Options.ShapeSize}px`;
              var top4 = positionToInteger(current4.style.top);
              var left4 = positionToInteger(current4.style.left);
              current4.style.top = `${top4 - Options.ShapeSize}px`;
              current4.style.left = `${left4 + Options.ShapeSize*2}px`;
              Z.Orientation = 1
            break;
            default:
            console.log('Rotation error');
          }
        break;
        case 'ReverseZ':
          switch(ReverseZ.Orientation) {
            /*         1     2
                 12     1      12
                34      23    34
                         4
            */
            case 1:
              var top2 = positionToInteger(current2.style.top);
              var left2 = positionToInteger(current2.style.left);
              current2.style.top = `${top2 + Options.ShapeSize}px`;
              current2.style.left = `${left2 - Options.ShapeSize}px`;
              var left3 = positionToInteger(current3.style.left);
              current3.style.left = `${left3 + Options.ShapeSize*2}px`;
              var top4 = positionToInteger(current4.style.top);
              var left4 = positionToInteger(current4.style.left);
              current4.style.top = `${top4 + Options.ShapeSize}px`;
              current4.style.left = `${left4 + Options.ShapeSize}px`;
              ReverseZ.Orientation = 2;
            break
            case 2:
              var top2 = positionToInteger(current2.style.top);
              var left2 = positionToInteger(current2.style.left);
              current2.style.top = `${top2 - Options.ShapeSize}px`;
              current2.style.left = `${left2 + Options.ShapeSize}px`;
              var left3 = positionToInteger(current3.style.left);
              current3.style.left = `${left3 - Options.ShapeSize*2}px`;
              var top4 = positionToInteger(current4.style.top);
              var left4 = positionToInteger(current4.style.left);
              current4.style.top = `${top4 - Options.ShapeSize}px`;
              current4.style.left = `${left4 - Options.ShapeSize}px`;
              ReverseZ.Orientation = 1;
            break;
            default:
            console.log('Rotation error');
          }
        break;
        default:
        console.log("Error, shape creator mismatch");
      }
    };
  });
};
var convertPreviewToActive = function() {
  // need to make orientation true;
}
var shapeGenerator = function() {
  //7 Shapes  // 14.285714285714286 each
  var Shape = Math.random() * 100;
  //Straight
  if(Shape >= 0 && Shape <= 14.285714285714286) {
    //create Straight
    if(currentShapes.length <= 4) {
      currentShapes[4] = 'Straight';
      // shapeGenerator();
    }
    if(currentShapes.length >= 5) {
      currentShapes[5] = 'Straight';
    }
    console.log("Straight");
  };
  //Square
  if(Shape >= 14.285714285714286 && Shape <= 28.571428571428573) {
    //create Square
    if(currentShapes.length <= 4) {
      currentShapes[4] = 'Square';
      // shapeGenerator();
    }
    if(currentShapes.length >= 5) {
      currentShapes[5] = 'Square';
    }
    console.log("Square");
  };
  //T
  if(Shape >= 28.571428571428573 && Shape <= 42.85714285714286) {
    //create T
    if(currentShapes.length <= 4) {
      currentShapes[4] = 'T';
      // shapeGenerator();
    }
    if(currentShapes.length >= 5) {
      currentShapes[5] = 'T';
    }
    console.log("T");
  };
  //L
  if(Shape >= 42.85714285714286 && Shape <= 57.142857142857146) {
    //create L
    if(currentShapes.length <= 4) {
      currentShapes[4] = 'L';
      // shapeGenerator();
    }
    if(currentShapes.length >= 5) {
      currentShapes[5] = 'L';
    }
    console.log("L");
  };
  //ReverseL
  if(Shape >= 57.142857142857146 && Shape <= 71.42857142857143) {
    //create ReverseL
    if(currentShapes.length <= 4) {
      currentShapes[4] = 'ReverseL';
      // shapeGenerator();
    }
    if(currentShapes.length >= 5) {
      currentShapes[5] = 'ReverseL';
    }
    console.log("Reverse L");
  };
  //Z
  if(Shape >= 71.42857142857143 && Shape <= 85.71428571428572) {
    //create Z
    if(currentShapes.length <= 4) {
      currentShapes[4] = 'Z';
      // shapeGenerator();
    }
    if(currentShapes.length >= 5) {
      currentShapes[5] = 'Z';
    }
    console.log("Z");
  };
  //ReverseZ
  if(Shape >= 85.71428571428572 && Shape <= 100) {
    //create ReverseZ
    if(currentShapes.length === 4) {
      currentShapes[4] = 'ReverseZ';
      // shapeGenerator();
    }
    if(currentShapes.length >= 5) {
      currentShapes[5] = 'ReverseZ';
    }
    console.log("Reverse Z");
  };
};
var shapeCreator = function() {
  switch(currentShapes[4]) {
    case 'Straight':
    Straight.create();
    Straight.Orientation = 1;
    break;
    case 'T':
    T.create();
    T.Orientation = 1;
    break;
    case 'Square':
    Square.create();
    Square.Orientation = 1;
    break;
    case 'L':
    L.create();
    L.Orientation = 1;
    break;
    case 'ReverseL':
    ReverseL.create();
    ReverseL.Orientation = 1;
    break;
    case 'Z':
    Z.create();
    Z.Orientation = 1;
    break;
    case 'ReverseZ':
    ReverseZ.create();
    ReverseZ.Orientation = 1;
    break;
    default:
    console.log("Error, shape creator mismatch");
  }
}
var positionToInteger = function(p) {
  return parseInt(p.split('px')[0]) || 0
};
window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              window.oRequestAnimationFrame      ||
              window.msRequestAnimationFrame     ||
              function(/* function */ callback, /* DOMElement */ element){
                window.setTimeout(callback, 1000 / 60);
              };
    })();
var createGameEdgeBoxes = function() {
  // WhiteSpace
  var whiteSpace = Options.GameEnd + 18
  var box = document.createElement('div');
  box.className = 'gameEdgeBox';
  box.style.height = `${whiteSpace}px`
  EdgeLeft.appendChild(box);
  var box = document.createElement('div');
  box.className = 'gameEdgeBox';
  box.style.height = `${whiteSpace}px`
  EdgeRight.appendChild(box);

  // Game Area Boxes
  var boxesNeeded = (Options.GameHeight - Options.GameEnd - Options.ShapeSize) / Options.ShapeSize;
  while(boxesNeeded !== 0) {
    var box = document.createElement('div')
    box.className = 'gameEdgeBox';
    box.textContent = `${boxesNeeded}`
    EdgeLeft.appendChild(box);
    var box = document.createElement('div')
    box.className = 'gameEdgeBox';
    box.textContent = `${boxesNeeded}`
    EdgeRight.appendChild(box);
    boxesNeeded -= 1;
  }
}
var endOfGame = function() {  // Eventually want an end game freeze or animation...
  status = "false";
  statuslog();
  if(score >= highScore) {
    highScore = score;
    HighScoreBoard.textContent = `High Score: ${highScore}`
  };
  document.removeEventListener('keydown', moveShape);
  End.style.visibility = "hidden";
  Clear.style.visibility = "visible";
  Start.style.visibility = "visible";
};
var clearGame = function() {
  while (Board.hasChildNodes()) {
    Board.removeChild(Board.lastChild);
  };
  currentShapes = [[0],[0],[0],[0]];
  collisionsArray = [];
  rowCount = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
}
var startOfGame = function() {
  // For testing
  console.log(currentShapes.length);
  shapeGenerator();
  shapeGenerator();
  createGameEdgeBoxes(); // Only run once..
  shapeCreator();
  //Actual
  status = "true";
  statuslog();
  document.addEventListener('keydown', moveShape);
  Start.style.visibility = "hidden";
  End.style.visibility = "visible";
  Clear.style.visibility = "hidden";
  score = 0;
  animate();
  collisionPopulate();
};
