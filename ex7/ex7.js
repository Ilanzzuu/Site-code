let diametre;

function setup() {
  createCanvas(400, 400);
  diametre = height / 3;
  frameRate(10); 
  noStroke();
}

function draw() {
  background(0);
  
  let y = height / 2;
  let x1 = width / 2 - diametre / 1.5;
  let x2 = width / 2 + diametre / 1.5;

  
  if (frameCount % 2 === 0) {
    fill(255, 0, 0); 
    ellipse(x1, y, diametre, diametre);
    fill(0); 
    ellipse(x2, y, diametre, diametre);
  } else {
    fill(0); 
    ellipse(x1, y, diametre, diametre);
    fill(0, 0, 255); 
    ellipse(x2, y, diametre, diametre);
  }
}
