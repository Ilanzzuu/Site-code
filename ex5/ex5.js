let Bouncy = {
  size: 25,
  posX: 100,
  posY: 200,
  vitX: 3,
  vitY: 2,
  color: [255, 0, 0],
  shape: "circle",
  
  bouger: function () {
    this.posX += this.vitX;
    this.posY += this.vitY;
  },

  rebondir: function () {
    if (this.posX + this.size > width || this.posX < 0) {
      this.vitX *= -1;
      this.changeColor();
    }
    if (this.posY + this.size > height || this.posY < 0) {
      this.vitY *= -1;
      this.changeColor();
    }
  },
  
  changeColor: function () {
    this.color = [random(255), random(255), random(255)];
  },

  afficher: function () {
    fill(this.color);
    noStroke();
    if (this.shape === "circle") {
      ellipse(this.posX, this.posY, this.size);
    } else {
      rect(this.posX, this.posY, this.size, this.size);
    }
  },

  update: function () {
    this.bouger();
    this.rebondir();
    this.afficher();
  }
};

let SquareBouncy = Object.create(Bouncy);
SquareBouncy.shape = "square";
SquareBouncy.posX = 200;
SquareBouncy.posY = 100;
SquareBouncy.vitX = 4;
SquareBouncy.vitY = 3;
SquareBouncy.color = [0, 0, 255];

function setup() {
  createCanvas(500, 500);
  frameRate(60);
  background(30);
}

function draw() {
  background(30, 30, 30, 40); // Effet de traînée
  Bouncy.update();
  SquareBouncy.update();
}
