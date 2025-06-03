let taille = 200;
let angle = 0;
let couleur;

function setup() {
  createCanvas(400, 400);
  couleur = color(0, 0, 255);
  background(255);
}

function draw() {
  
  noStroke();
  fill(255, 255, 255, 20); 
  rect(0, 0, width, height);

  let r = map(sin(frameCount * 0.01), -1, 1, 0, 255);
  let b = map(cos(frameCount * 0.01), -1, 1, 100, 255);
  couleur = color(r, 0, b);

  fill(couleur);
  
  let taillePulse = taille * abs(sin(angle));
  circle(width / 2, height / 2, taillePulse);
  angle += 0.05;
}

function keyPressed() {
  if (key === 's') {
    save("drawing.png");
  }
}
