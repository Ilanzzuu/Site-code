let size = 100;
let progress = 0;
let speed = 0.02;
let direction = 1;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(30);
  fill(0, 150, 255);
  translate(width/2, height/2);
  
  let dist = lerp(0, size, progress);
  
  
  rect(-dist, -dist, size/2);
  rect(dist, -dist, size/2);
  rect(-dist, dist, size/2);
  rect(dist, dist, size/2);
  
  progress += speed * direction;
  if(progress >= 1 || progress <= 0) direction *= -1;
}
