let x = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  x += (mouseX - x) * 0.05;
  rect(x, 200, 50, 50);
}
