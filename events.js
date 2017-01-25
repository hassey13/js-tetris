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
