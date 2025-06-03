let taille = 50;

function setup() {
  createCanvas(400, 400);
  frameRate(4); // rythme clignotement lent
}

function draw() {
  background(30);

  for (let x = 50; x < width; x += 100) {
    for (let y = 50; y < height; y += 100) {
      let on = (frameCount + x + y) % 2 === 0;
      fill(on ? 255 : 50, on ? 200 : 30, 0);
      push();
      translate(x, y);
      rotate(PI / 4);
      rect(0, 0, taille, taille);
      pop();
    }
  }
}
