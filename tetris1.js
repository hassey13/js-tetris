// TODO

// Fix line removal function

// Refactor shape generator / randomizer

// Add Preview box

// Remove side boxes

// Add stats/ history

// Add achievements

// Add move down / drop to bottom

// Add collisions thru boxes





var PreviewBox = {
  //opacity 0 bottom border is removed when piece starts falling
};
var ShapeHistory = {
  // sort option?
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
var convertPreviewToActive = function() {
  // need to make orientation true;
}
