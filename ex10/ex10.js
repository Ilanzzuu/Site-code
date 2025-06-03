let open = true;

function setup() {
  createCanvas(400, 400);
  frameRate(3);
}

function draw() {
  background(255);
  fill(200);
  ellipse(200, 200, 150);

  fill(0);
  if (open) {
    ellipse(170, 180, 10);
    ellipse(230, 180, 10);
  } else {
    rect(165, 178, 10, 4);
    rect(225, 178, 10, 4);
  }

  open = !open;
}
