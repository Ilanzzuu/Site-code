class Bouncy {
  
  constructor(size, posX, posY, vitX, vitY){
    this.size = size;
    this.posX = posX;
    this.posY = posY;
    this.vitX = vitX;
    this.vitY = vitY;
    
  } // fin constructor
  
  
  
  bouger(){
    this.posX = this.posX + this.vitX;
    this.posY += this.vitY;  // posY = posY + vitY
  }
  
  rebondir(){
    if( this.posX + this.size > width || this.posX < 0 ){
      this.vitX = this.vitX * -1;
    }
    if( this.posY + this.size > height || this.posY < 0 ){
      this.vitY *= -1;  // vitY = vitY * -1;
    }
  }
  
  afficher(){
    stroke(0);
    square(this.posX, this.posY, this.size);
    noStroke();
    text(this.name, this.posX, this.posY-4);
  }
  
  update(){
    this.bouger();
    this.rebondir();
    this.afficher();
  }

}; // Bouncy Class

let machin = new Bouncy(16, 100, 200, 1.2, 1.7);
let truc = new Bouncy(16, 100, 200, 2, 4);
let coucou = new Bouncy(16, 100, 100, 10, 12);

let mesBouncies = [];

mesBouncies[0] = new Bouncy(50, 100, 200, 1.2, 1.7)
mesBouncies[1] = new Bouncy(50, 100, 200, 1.2, 1.7)
mesBouncies[2] = new Bouncy(50, 100, 200, 1.2, 1.7)

function setup() {
  createCanvas(400, 400);
  frameRate(120);
  
  for (let i = 0; i < 1000; i++){
    console.log (i);
    mesBouncies[i] = new Bouncy(16, 200, 200, random(-2,2), random(-2,2) );
  }
  
}

function draw() {
  background(220);
  
  for (let i = 0; i < mesBouncies.length; i++){
    console.log (i);
    mesBouncies[i].update();
  }
  
  
  mesBouncies[0].update();
  mesBouncies[1].update();
  mesBouncies[2].update();
}