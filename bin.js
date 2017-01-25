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
