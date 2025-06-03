let angle = 0;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(30);
  translate(width / 2, height / 2);
  
  let size = 100 + 20 * sin(frameCount * 0.1);
  fill(200, 100, 255);
  
  push();
  rotate(angle);
  rect(0, 0, size, size);
  pop();
  
  angle += 0.02;
}
