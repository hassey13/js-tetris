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

    // Start of checking to remove row

      //iterate thru array
        //should check if row is full
          //if full
            // remove row
            // shift all above down
            // update array by shifting all down
      //repeat
      function removeRow() {
        for (let i = 19; i >= 0; i--) {
          if(rowCount[i] === 10) {
            for (let c = 11; c < collisionsArray.length; c++) {
              if(collisionsArray[c][0] === Options.GameHeight - ((i+1) * Options.ShapeSize)) {
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
            if(score >= highScore) {
              highScore = score;
              HighScoreBoard.textContent = "High Score: " + highScore;
            }
            for (let r = i; r < rowCount.length; r++) {
              if (r < rowCount.length - 1) {
                rowCount[r] = rowCount[r+1]
              }
              else {
                rowCount[r] = 0
              }
            }
          }
        }
      }
      removeRow()
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
