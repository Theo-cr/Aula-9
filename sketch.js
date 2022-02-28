var quadrado;

function setup() {
  createCanvas(700,600);
  quadrado=createSprite(350,300,15,15)
  quadrado.shapeColor="darkblue"
}

function draw() 
{
  background("Pink");
 if (keyDown("up")) {
 quadrado.y=quadrado.y-2
 
 }
 if (keyDown("down")) {
  quadrado.y=quadrado.y+2
  
  }
  if (keyDown("right")) {
    quadrado.x=quadrado.x-2
    
    }
    if (keyDown("left")) {
     quadrado.x=quadrado.x+2
     
     }
drawSprites()
}




