let t = 0;

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(100, 150, 255);

  fill(30, 100, 200);
  beginShape();
  for (let x = 0; x <= width; x += 10) {
    let y = height / 2 + sin((x * 0.05) + t) * 20;
    vertex(x, y);
  }
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);

  t += 0.05;
}
