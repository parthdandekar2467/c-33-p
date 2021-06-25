

function preload(){
  backgroundimg = loadImage("snow2.jpg");
  snowimg = loadImage("snow4.webp");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  
}

function draw() {
  
  background(255,255,255);  

 
 bg = createSprite(400, 200, 800, 400);
 bg.addImage(backgroundimg);

 if(frameCount % 20 === 0){
 snow = new Snow(random(10, 700))
 snow.velocityY = 4;
 }



  drawSprites();
}