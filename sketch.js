var cannonBall, cannonBall_Image
var mainP, mainP_running, mainP_jumping
var enemy, enemy_image
var platform, platform_image

function preload()
{
mainP_running = loadAnimation("images/main character 2.png","images/main character 4.png","images/main character 6.png")
mainP_jumping = loadAnimation("images/main character 11.png","images/main character 12.png","images/main character 13.png")
enemy_image= loadImage("images/enemy.jpg")
platform_image= loadImage("images/ground-clipart 1.png")
cannonBall_Falling1= loadImage("images/cannonball 1.png")
cannonBall_Falling2= loadImage("images/cannonball 2.png")
cannonBall_Falling3= loadImage("images/cannonball 3.png")
}

function setup() {
	createCanvas(1000, 900);
  mainP=createSprite(125,600,50,300);
  mainP.addAnimation("running",mainP_running);
// mainP=createSprite(850,600,50,300);
// mainP.addAnimation("jumping",mainP_jumping);

    
  platform=createSprite(500,875,1000,20);
  platform.addImage(platform_image);
  platform.scale=0.25
// cannonBall=createSprite(500,150,50,300);
// cannonBall.addAnimation("Falling1",cannonBall_Falling1);
// cannonBall=createSprite(500,225,50,300);
// cannonBall.addAnimation("Falling2",cannonBall_Falling2);
// cannonBall=createSprite(500,300,50,300);
// cannonBall.addAnimation("Falling3",cannonBall_Falling3);
}


function draw() {  
  background(180);
 platform.velocityX=-1.5
 if(platform.x<0){
platform.x=500
 }
 spawnEnemy();
  drawSprites();


}
function spawnEnemy() {
  //write code here to spawn the enemy
  if (frameCount % 300 === 0) {
    var enemy=createSprite(1000,700,50,300);
   // enemy.y = Math.round(random(80,120));
    enemy.addImage("image",enemy_image);
    enemy.scale = 0.35;
    enemy.velocityX = -1.5;
    
     //assign lifetime to the variable
    enemy.lifetime = 2000;
    
    //adjust the depth
    //cloud.depth = trex.depth;
    //trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    //cloudsGroup.add(cloud);
  }
}


