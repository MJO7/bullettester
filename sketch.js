var bullet,wall , rating , yes , shape;
var speed,weight,thickness ;
function setup() {
  createCanvas(1600,400);
  speed= random(223,321)
  weight = random(30,52)
  thickness = random(22,83)
  bullet = createSprite(50 , 200 , 50 , 10);
  bullet.shapeColor = "white"
  bullet.velocityX = speed
  yes = createSprite(1200, 200 , thickness ,height/2)
yes.shapeColor = "(80,80,80)"
  
 
}

function draw() {
  background("yellow");  
 bullet.collide(yes)
  drawSprites();
  

    if(0.5*weight*speed*speed/thickness*thickness*thickness < 10) {
      shape = createSprite(50 , 200 , 50 , 10);
      shape.shapeColor = "green"
    shape.x = bullet.x
    shape.y = bullet.y
    shape.velocityX = speed
   shape.visible=false
   if(bullet.x-yes.x <= bullet.width/2 + yes.width/2
    &&
    yes.x-bullet.x <= bullet.width/2 + yes.width/2){
      shape.visible = true
      shape.velocityX = 0
    }
  }
  
     
    
  if(0.5*weight*speed*speed/thickness*thickness*thickness > 10) {
    shape = createSprite(50 , 200 , 50 , 10);
    shape.shapeColor = "red"
  shape.x = bullet.x
  shape.y = bullet.y
  shape.velocityX = speed
 shape.visible=false
 if(bullet.x-yes.x <= bullet.width/2 + yes.width/2
  &&
  yes.x-bullet.x <= bullet.width/2 + yes.width/2){
    shape.visible = true
    shape.velocityX = 0
  }
}

}

