let x1 = 50;
let x2 = 300;
let y = 200;
let size = 60;
let angle = 0;

function setup() {
  createCanvas(400, 400);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  background(30);


  let r1 = map(sin(angle), -1, 1, 100, 255);
  let g1 = map(cos(angle), -1, 1, 100, 255);
  let b1 = map(sin(angle * 2), -1, 1, 100, 255);

  let r2 = map(cos(angle * 1.5), -1, 1, 100, 255);
  let g2 = map(sin(angle * 1.5), -1, 1, 100, 255);
  let b2 = map(cos(angle * 2), -1, 1, 100, 255);

  fill(r1, g1, b1);
  rect(x1, y + sin(angle) * 30, size, size);

  fill(r2, g2, b2);
  rect(x2, y + cos(angle) * 30, size, size);

  angle += 0.03;
}
