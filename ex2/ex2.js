function setup() {
  createCanvas(400, 400);
  
  let R = random(255);
  let V = random(255);
  let B = random(255);
  background(R, V, B);
  noStroke();
}

function draw() {
  drawWeirdShape(mouseX, mouseY);
}

function mouseClicked() {
  let R = random(255);
  let V = random(255);
  let B = random(255);
  fill(R, V, B);
}

function keyPressed() {
  if (key == "s") {
    save("drawing.png");
  }  
}

function drawWeirdShape(x, y) {
  push();
  translate(x, y);
  beginShape();
  for (let a = 0; a < TWO_PI; a += PI / 8) {
    let r = 20 + random(-10, 15);
    let sx = cos(a) * r;
    let sy = sin(a) * r;
    vertex(sx, sy);
  }
  endShape(CLOSE);
  pop();
}
