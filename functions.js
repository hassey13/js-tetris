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
