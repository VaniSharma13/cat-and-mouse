var cat,mouse
var catImage1,catImage2,catImage3
var mouseImage1,mouseImage2,mouseImage3
var bg,bgImage

function preload() {
    //load the images here
    catImage1=loadAnimation("images/cat1.png");
    catImage2=loadAnimation("images/cat2.png","images/cat3.png")
   catImage3=loadAnimation("images/cat4.png");

   mouseImage1=loadAnimation("images/mouse1.png");
   mouseImage2=loadAnimation("images/mouse2.png","images/mouse3.png")
  mouseImage3=loadAnimation("images/mouse4.png");
  
  bgImage=loadImage("images/garden.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  cat=createSprite(800,600,50,50);
  cat.addAnimation("sitting",catImage1);
  cat.scale=0.2;

  mouse=createSprite(400,600,50,50);
  mouse.addAnimation("standing",mouseImage1);
  mouse.scale=0.1;

}

function draw() {

    background(bgImage);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<cat.width/2-mouse.width/2){
    cat.velocityX=0;
    cat.addAnimation("stop",catImage3);
    cat.changeAnimation("stop")

    mouse.addAnimation("stopMouse",mouseImage3);
    mouse.changeAnimation("stopMouse")
}

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    cat.velocityX=-4;
    cat.addAnimation("running",catImage2);
    cat.changeAnimation("running");

    mouse.addAnimation("teasing",mouseImage2);
    mouse.changeAnimation("teasing");

}

}
