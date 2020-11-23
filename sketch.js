var towerimage,tower;
var door,doorImage;
var climber,climberImage;
var ghost,ghostImage;
var spookySound;
var doorsGroup
var climbersGroup;
var invisbaleBlockGroup;
var gameState="play"
function preload (){
 towerimage=loadImage("tower.png"); 
 doorImage = loadImage("door.png");
 climberImage=loadImage("climber.png"); 
  ghostImage=loadImage("ghost-standing.png")
 spookySound=loadSound("spooky.wav")    
}
function setup(){
 createCanvas (windowWidth,windowHeight); 
 tower=createSprite(300,300) 
  tower.addImage("tower",towerimage)
tower.velocityY=2
  
ghost=createSprite(300,300);  
 ghost.addImage("ghost",ghostImage);
  ghost.scale=0.5;
  
  doorsGroup=new Group();
  climbersGroup=new Group();
  invisbaleBlockGroup=new Group ();
}
function draw(){
 background(0) 
  if (gameState==="play"){
   if (tower.y>600){
    tower.y=300
  }
  if (keyDown("up")){
    ghost.velocityY=-10  
  }
  ghost.velocityY=ghost.velocityY+0.8

   if (keyDown("left_arrow")){
    ghost.x=ghost.x-3  
  }
  
  if (keyDown("right_arrow")){
    ghost.x=ghost.x+3  
  }
  spawnDoor();
    if(climbersGroup.isTouching(ghost)){
  ghost.velocityY=0     
}
    if (invisbaleBlockGroup.isTouching(ghost)||ghost.y>600){
    ghost.destroy()
    gameState="end"  
}
    drawSprites(); 
  } 
 if(gameState==="end"){
   stroke("yellow")
   fill("yellow")
   textSize(30)
   text("GAME OVER",230,250)
 }
  
}
function spawnDoor(){
 if(frameCount % 240 ===0 ) {
    door=createSprite(200,-50)
    climber=createSprite(200,10)
   invisableBlock=createSprite(200,15,climber.width,2)
   door.addImage("door",doorImage)
   climber.addImage("climber",climberImage)
door.velocityY=1
   climber.velocityY=1
    invisableBlock.velocityY=1
door.x=Math.round(random(120,400))
   climber.x=door.x
   invisableBlock.x=door.x 
   invisableBlock.visible=false
   ghost.depth=door.depth+1
   doorsGroup.add(door)
   climbersGroup.add(climber)
   invisbaleBlockGroup.add(invisableBlock)
    }
  
  
  
  
  
}
