function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  for (let y = 0; y < height; y++) {
    let c = color(map(y, 0, height, 0, 255), 100, 255);
    stroke(c);
    line(0, y, width, y);
  }
}
