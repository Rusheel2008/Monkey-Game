var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananasGroup, obstaclesGroup
var survivalTime = 0  ;
var background1pic
var invisibleground;
var play
var logo
var hurt
var backtohome

var SERVE = 1;
var PLAY= 2;
var END = 0;
var gameState = SERVE;
var instruction;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  background1pic = loadImage("Animated-Pics-Wallpapers-034.jpg")
 play = loadImage("Play.png")
  logo = loadImage("Untitled.png")
  hurt = loadImage("REAL HURT.png")
  backtohome = loadImage("BAck to home.png")
  instruction = loadImage("INSTRUCTION.png")
}



function setup() {
  createCanvas(800,600)
  
 //invisibleground = createSprite(400,580,800,10)
  //  invisibleground.velocityX = -4
  
bananasGroup = createGroup();
  obstaclesGroup = createGroup();
  
  ground = createSprite(400,300,800,800)
    ground.addImage(background1pic)
    
    ground.velocityX = -4;
    ground.x = ground.width/2
    ground.scale = 0.7
  
  ground.visible = false;
  
    object= createSprite(100,483,70,70);
    object.addAnimation("moving",monkey_running);
    object.scale = 0.3
    
    object.visible = false;
  
  gamelogo = createSprite(400,70,600,50)
  gamelogo.addImage(logo)
  gamelogo.scale = 0.4
  gamelogo.visible = true;
  
  instructions = createSprite(400,350,60,60)
  instructions.addImage(instruction)
  instructions.scale = 0.45
  instructions.visible = true;
  
 playbutton = createSprite(400,460,10,10)
  playbutton.addImage(play)
  playbutton.scale = 0.2
  playbutton.visible = true;
  
  invisibleground = createSprite(600,600,10000,10)
  invisibleground.visible = false;
  
  finalshow = createSprite(400,300,800,800)
  finalshow.addImage(hurt)
  finalshow.visible = false;
}




function draw() {
  
 
if (gameState === SERVE){
  background("PINK")
  

  
    
  
  
  
  if(mousePressedOver(playbutton)){
    gameState = PLAY;
    
  }  
  
  
  
}
  else if (gameState === PLAY){
    
   // background("black");
    ground.visible= true;
    gamelogo.visible = false;
    instructions.visible = false;
    playbutton.visible = false;
    
    object.visible=true;
    
    if(ground.x < 0) {
      ground.x = ground.width/2;
    }
    
    
    
    stroke("white")
    textSize(20)
    fill("white")
    text ("Score: "+ survivalTime, 500,50)
    
    stroke("black")
    textSize(20)
    fill("balck")
    survivalTime = Math.ceil(frameCount/frameRate())
    text("Survival Time: "+survivalTime,100,50)
    

    
    
    if(keyDown("space")&& object.y >=50) {
        object.velocityY = -70;
        
    }
    
    object.velocityY = object.velocityY + 15
    
    spawnBananas();
    spawnObstacles();
    
    object.collide(invisibleground)
    
    if(obstaclesGroup.isTouching(object)){
      gameState = END;
    }
    
    
  }
  else if (gameState === END){
    object.visible  = false;
    bananasGroup.visible = false;
    obstaclesGroup.visible = false;
    ground.velocityX = 0;
    ground.visible = false;
    
    finalshow.visible = true;
    finalshow.scale = 0.55
    
    
    
  }

  drawSprites();
}

function spawnBananas(){
  if(frameCount % 80 === 0){
    var banana = createSprite(150,400,20,20)
    banana.y = (Math.round(random(200,300)))
    banana.addImage(bananaImage)
    banana.scale = 0.1
    banana.velocityX = -5
    
    banana.lifettime = 400;
    
   
    
    bananasGroup.add(banana);
    
  }
}

function spawnObstacles(){
  if (frameCount % 300 === 0){
    var Obstacle = createSprite(600,400,40,10);
    Obstacle.y = Math.round(random(530,570));
    Obstacle.addImage(obstacleImage);
    Obstacle.scale = 0.3
    Obstacle.velocityX = -4
    
    
    Obstacle.lifetime = 400;
    
    
    obstaclesGroup.add(Obstacle);
    
    
  }
}





