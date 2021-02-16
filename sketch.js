var speed,weight;
var car,wall;

function setup() {
  createCanvas(800,400);
  car=createSprite(50,200,50,50);
  car.shapeColor="cyan"
  wall=createSprite(700,200,50,150);
  wall.shapeColor="magenta"
  speed=random(55,90);
  weight=random(400,1500);
  car.velocityX=speed;

}

function draw() {
  background(255,255,255);  
  if(wall.x-car.x<car.width/2+wall.width/2){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
    if(deformation>180){
      car.shapeColor="red";
    }
    if(deformation>80 && deformation<180){
      car.shapeColor="yellow";
    }
    if(deformation<80){
      car.shapeColor="green";
    }
  }
  drawSprites();
}