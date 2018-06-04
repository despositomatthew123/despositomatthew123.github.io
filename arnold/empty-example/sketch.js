var arnold;
var inhaber = [];
var steroids = [];
var xvel = 2;
var reverse_dir = false; // added flag to check if inhabers should reverse
var img;

function setup() {
  createCanvas(600, 400);
  img = loadImage("Arnold.png");
  arnold = new Arnold();
  for (var i = 0; i < 8; i++) {
    inhaber[i] = new Inhaber(i*40+20, 70);
  }
//   for (var i = 0; i < 4; i++) {
//     steroids[i] = new Steroid();

// }
}

function draw() {
  background(60);
  arnold.show();
  if (keyIsPressed === true) {
  }
  if (keyCode === RIGHT_ARROW) {
    arnold.move(3);
  }
  else if (keyCode === LEFT_ARROW) {
    arnold.move(-3);
  }


  for (var i = 0; i < inhaber.length; i++) {
    inhaber[i].show();
    inhaber[i].move();


    if ((inhaber[i].x + 10 > width) || (inhaber[i].x - 10 < 0)) {
      // console.log(inhaber[1].x - inhaber[0].x)
      reverse_dir = true; // this way direction reverses after all inhabers complete move
    }
  }

  if (reverse_dir) {
    xvel *= -1;
    reverse_dir = !reverse_dir;
  }

  for (var i = 0; i < steroids.length; i++) {
    steroids[i].show();
    steroids[i].move();



      for (var j = 0; j < inhaber.length; j++) {
      if (steroids[i].hits(inhaber[j])) {
        inhaber[j].grow();
        inhaber[j].explode();
        steroids[i].explosion();

        console.log("INJECTING");
      }
    }
  }

  for (var i = inhaber.length-1; i >= 0; i--) {
    if (inhaber[i].toDelete) {
      inhaber.splice(i, 1)
    }
}

  for (var i = steroids.length-1; i >= 0; i--) { // this loop was nested in the loop on line 59
    if (steroids[i].toDelete) {
      steroids.splice(i, 1)
    }
  }
}

  function keyPressed() {
//     if (keyCode === RIGHT_ARROW) {
//       arnold.move(3)
//     }
//     else if (keyCode === LEFT_ARROW) {
//     arnold.move(-3);
//   }
    if (keyCode === UP_ARROW) {
      var steroid = new Steroid(arnold.x+15, height)
      steroids.push(steroid);

    }
}
