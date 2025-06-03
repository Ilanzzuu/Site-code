let x = 200;
let y = 200;
let angle = 0;

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(250, 240, 230, 50);
  angle += 0.05;
  x += cos(angle) * 2;
  y += sin(angle * 2) * 1.5;

  
  fill(150, 50, 200);
  ellipse(x, y, 15, 40);

  
  fill(200, 100, 250, 150);
  ellipse(x - 20, y, 30, 40);
  ellipse(x + 20, y, 30, 40);
}
