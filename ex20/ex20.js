// Projet stylé : balles rebondissantes avec traînées colorées & fond dynamique

let balls = [];
let nbBalls = 5;
let particles = [];

function setup() {
  createCanvas(600, 400);
  colorMode(HSL, 360, 100, 100, 1);
  
  // Crée plusieurs balles avec des propriétés différentes
  for(let i=0; i < nbBalls; i++){
    balls.push(new Ball(
      random(20, 40),
      random(width),
      random(height),
      random(-4, 4),
      random(-3, 3),
      color(random(360), 80, 60)
    ));
  }
}

function draw() {
  // Fond dynamique : dégradé animé avec des cercles translucides
  background(210, 20, 15, 0.1);
  for(let i=0; i < 5; i++){
    noStroke();
    fill((frameCount + i * 60) % 360, 50, 70, 0.03);
    ellipse(width/2, height/2, width * i * 0.8, height * i * 0.8);
  }
  
  // Met à jour et affiche toutes les balles
  for(let b of balls){
    b.update();
    b.show();
  }
  
  // Met à jour et affiche toutes les particules
  for(let i = particles.length -1; i >= 0; i--){
    particles[i].update();
    particles[i].show();
    if(particles[i].alpha <= 0){
      particles.splice(i, 1);
    }
  }
}

// Classe Ball
class Ball {
  constructor(size, x, y, vx, vy, col){
    this.size = size;
    this.pos = createVector(x, y);
    this.vel = createVector(vx, vy);
    this.col = col;
    this.glowRadius = this.size * 1.7;
  }
  
  update(){
    this.pos.add(this.vel);
    
    // Rebond sur les bords avec changement de direction
    if(this.pos.x < this.size/2 || this.pos.x > width - this.size/2){
      this.vel.x *= -1;
      this.createParticles();
    }
    if(this.pos.y < this.size/2 || this.pos.y > height - this.size/2){
      this.vel.y *= -1;
      this.createParticles();
    }
    
    // Limite la position dans le canvas
    this.pos.x = constrain(this.pos.x, this.size/2, width - this.size/2);
    this.pos.y = constrain(this.pos.y, this.size/2, height - this.size/2);
    
    // Crée des particules à chaque frame (traînée lumineuse)
    this.createParticles();
  }
  
  createParticles(){
    // Ajoute une particule aux alentours de la balle
    let p = new Particle(
      this.pos.x + random(-this.size/4, this.size/4),
      this.pos.y + random(-this.size/4, this.size/4),
      this.col
    );
    particles.push(p);
  }
  
  show(){
    noStroke();
    // Glow: plusieurs ellipses translucides avec dégradé HSL
    for(let i = 5; i > 0; i--){
      fill(hue(this.col), saturation(this.col), brightness(this.col), 0.1 * (i/5));
      ellipse(this.pos.x, this.pos.y, this.glowRadius * i / 5);
    }
    
    // Balle prinpale
    fill(this.col);
    ellipse(this.pos.x, this.pos.y, this.size);
  }
}

class Particle {
  constructor(x, y, col){
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(random(0.5, 1.5));
    this.alpha = 0.8;
    this.col = col;
    this.size = random(4, 8);
  }
  
  update(){
    this.pos.add(this.vel);
    this.alpha -= 0.02;
  }
  
  show(){
    noStroke();
    fill(hue(this.col), saturation(this.col), brightness(this.col), this.alpha);
    ellipse(this.pos.x, this.pos.y, this.size);
  }
}