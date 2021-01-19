
function setup() {
   createCanvas(720, 400)
   background(60)
   noLoop()
}

function draw() {
   drawTarget(10, 20, 500, 4)
}

function drawTarget(xpos, ypos, size, num) {
   var gray = 255 / num
   var steps = size / num

   for (let i = 0; i < num; i++) {
      fill(i + gray);
      ellipse(xpos, ypos, size - i * steps, size - i * steps);
   }
}
