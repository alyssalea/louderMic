function setup() {
  createCanvas (windowWidth,windowHeight);
  mic = new p5.AudioIn()
  mic.start();
}

function draw() {
  background (200,0,0);
  noStroke();
  fill(0);
  micLevel = mic.getLevel();
  adjustedMicLevel = micLevel * 5000;
  fill(0,adjustedMicLevel,200);
  ellipse(width/2, height/2,adjustedMicLevel,adjustedMicLevel);
  adjustedMicLevel = micLevel * 3000;
  fill(255,0,200);
  ellipse(width/2, height/2,adjustedMicLevel,adjustedMicLevel);
  adjustedMicLevel = micLevel * 2000;
  fill(100,255,200);
  ellipse(width/2, height/2,adjustedMicLevel,adjustedMicLevel);
  adjustedMicLevel = micLevel * 1000;
  fill(25,255,50);
  ellipse(width/2, height/2,adjustedMicLevel,adjustedMicLevel);
}
