var balloon, balloonImg, bgImg;
var database;

function preload(){
  bgImg = loadImage("Background.jpg");

  balloonImg = loadImage("airBalloon.png");
}

function setup() {
  createCanvas(500,500);
  
  database = firebase.database();

  balloon = createSprite(400, 200, 50, 50);
  balloon.addImage(balloonImg);
  balloon.scale = 0.1;
}

function draw() {
  background(bgImg);  

  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x - 10;
  }
  if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x + 10;
  }
  if(keyDown(UP_ARROW)){
    balloon.y = balloon.y - 10;
  }
  if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y + 10;
  }
  drawSprites();
}