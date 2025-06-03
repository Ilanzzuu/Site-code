let taille = 1;

function setup() {
  createCanvas(600, 400);
  background(0, 149, 182);
}

function draw() {
  strokeWeight(2);
  noFill();

  stroke(255, 0, 0);
  triangle(
    150, 200 - taille / 2,
    150 - taille / 2, 200 + taille / 2,
    150 + taille / 2, 200 + taille / 2
  );

  stroke(0, 255, 0);
  triangle(
    450, 200 - taille / 2,
    450 - taille / 2, 200 + taille / 2,
    450 + taille / 2, 200 + taille / 2
  );

  stroke(255, 255, 0);
  triangle(
    300, 200 - taille / 2,
    300 - taille / 2, 200 + taille / 2,
    300 + taille / 2, 200 + taille / 2
  );

  taille += 5;
}
