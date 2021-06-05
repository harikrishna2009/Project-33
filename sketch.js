var bgImg
var Character1,Character2
var snowImg,snow

function preload(){
  bgImg=loadImage("snow1.jpg")
  snowImg=loadImage("snow4.webp")
}
function setup() {
  createCanvas(800,400);
}

function draw() {
  background(bgImg);

  if(frameCount%60===0){
    snow=createSprite(Math.round(random(100,700)))
    snow.addImage("snow",snowImg)    
    snow.velocityY = 1
    snow.scale=0.1
  }
  drawSprites();
}