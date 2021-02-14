
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var survivaltime


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  score=0;
  survivalTime=0;
  
  createCanvas(650,450);
  monkey = createSprite(75,408,10,10);
  monkey.addAnimation("monkey_running",monkey_running);
  monkey.scale=0.11;
  
  ground = createSprite(325,446,650,7);
  
  
  fruitGroup= new Group();
  obstaclesGroup= new Group();
  
}


function draw() {
 background("green");

  if(keyDown("space")&&monkey.y >= 380){
    monkey.velocityY=-10
  }
  monkey.velocityY = monkey.velocityY + 0.3
  monkey.collide(ground)
  
  
  
  ground.velocityX = -7 
 ground.x = ground.width/2;
  
   if(World.frameCount%200===0){
    fruit();
 }
  
  if(World.frameCount%300===0){
    obstacles();
 }
  
  if(monkey.isTouching(fruitGroup)){
     fruitGroup.destroyEach()
     score=score+1
    }

drawSprites(); 

  textSize(20);
  fill("white") 
  text("Score: "+ score, 400,50);
  
  fill("black")
var survivalTime = 
survivalTime + Math.round(getFrameRate()/60);
  text("Survival Time: "+ survivalTime,200,50); 

}

function fruit (){
banana=
createSprite(650,Math.round(random(170,230)),10,10);
banana.addImage(bananaImage);  
banana.velocityX = -5;
banana.scale = 0.1;
fruitGroup.add(banana);
}

function obstacles (){
stone=
createSprite(650,408,10,10);
stone.addImage(obstacleImage);  
stone.velocityX = -5;
stone.scale = 0.2  ;
obstaclesGroup.add(stone);
}