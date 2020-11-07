var car;
var wall;
var speed;
var weight;

function setup() {
  createCanvas(1100,400);
  car = createSprite(70, 200, 50, 50);
  wall = createSprite(1000, 200, 30, 200);
  wall.shapeColor = rgb(80,80,80);
  speed = random(55,92);
  car.velocityX = speed;
  weight = random(400,1502);
}

function draw() {

if(wall.x - car.x < (car.width + wall.width)/2){
  car.velocityX = 0;
  var deformation = 0.5 *speed * width* speed/22509;
  if(deformation < 180){

    car.shapeColor = rgb(255,0,0);
  }
  if(deformation < 180 && deformation > 100){

    car.shapeColor = rgb(230,230,0);

  }
  if(deformation < 100){

    car.shapeColor = rgb(0,225,0);

  }
}


  background(0);  
  drawSprites();
}