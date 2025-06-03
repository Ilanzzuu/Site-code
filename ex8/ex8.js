let y = 200;
let speed = 2;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(200, y, 40, 40);
  y += speed;
  if (y > height || y < 0) speed *= -1;
}
