let circleColor;
let taille = 100;
let angle = 0;

function setup() {
  createCanvas(400, 400);
  circleColor = color(255, 0, 0);
  noStroke();
}

function draw() {
  background(30);
  let pulsation = taille + sin(angle) * 10;
  
  // Glow / halo autour du cercle
  for (let i = 10; i > 0; i--) {
    fill(red(circleColor), green(circleColor), blue(circleColor), 15); 
    
    ellipse(width / 2, height / 2, pulsation + i * 5);
  }

  // Cercle principal
  fill(circleColor);
  ellipse(width / 2, height / 2, pulsation);

  angle += 0.05;
}

function mousePressed() {
  if (dist(mouseX, mouseY, width / 2, height / 2) < taille / 2) {
    circleColor = color(random(255), random(255), random(255));
  }
}
