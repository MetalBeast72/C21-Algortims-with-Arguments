var fixedRect, movingRect;
var car
var wall


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car = createSprite(150,200,50,30)
  car.shapeColor = "blue"
  car.velocityX= 3
  wall = createSprite(900,200,70,165)
  wall.shapeColor = "yellow"
}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

 if( isTouching(movingRect,fixedRect)){
   movingRect.shapeColor = "purple";
   fixedRect.shapeColor = "purple";
 }else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
 }
if (isTouching(car,wall)){
car.shapeColor="Red"
wall.shapeColor="red"
car.velocityX=0
}else{
car.shapeColor="blue"
car.velocityX= 3
wall.shapeColor="yellow"
}

  drawSprites();
}

// generic function with 2 objects










