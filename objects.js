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
