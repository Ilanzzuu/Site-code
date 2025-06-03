let baseSize = 30;

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(20);

  for (let i = 0; i < 10; i++) {
    let x = i * 40 + 20;
    let y = height / 2;
    let size = baseSize + sin(frameCount * 0.2 + i) * 15;
    fill(0, 100 + i * 15, 255);
    ellipse(x, y, size);
  }
}
