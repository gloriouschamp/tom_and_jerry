var cat, catImg1, catImg2, catImg3, catImg4;
var mouse, mouseImg1, mouseImg2, mouseImg3, mouseImg4;
var tom, jerry;
var garden
function preload() {
    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png");
  mouseImg1 = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse4.png");
garden = loadImage("images/garden.png");

}

function setup(){
    createCanvas(1000,800);
    tom = createSprite(870, 600);
    tom.addAnimation(catImg1);
    tom.scale = 0.2;
    jerry = createSprite(200, 600);
    jerry.addAnimation(mouseImg1);
    jerry.scale = 0.15;
}

function draw() {

    background(garden);
 text(mouseX + ' , ' +  mouseY, 10, 45);
 if(tom.x - jerry.x < (tom.width - jerry.width)/2) {
     tom.addAnimation("catLastImage", catImg3);
     tom.changeAnimation("catLastImage" )
 }
 

    drawSprites();
}


function keyPressed(){
if(keyCode === LEFT_ARROW) {
    tom.velocityX = -5;
    tom.addAnimation("catRunning", catImg2);
    tom.changeAnimation("catRunning");

}

}



