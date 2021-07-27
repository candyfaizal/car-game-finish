var canvas, backgroundImage;

var gameState = 0,finishedPlayers;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var obstale,obstale_Image;
var obstalegroup;
var car_sound,stop_Sound

var form, player, game;

var cars, car1, car2, car3, car4;
var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  track = loadImage("images/track.jpg");
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");
  obstale_Image = loadImage("images/f1.png")
  car_sound = loadSound("sound/car.mp3")
  stop_Sound = loadSound("sound/sliding.mp3")
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();
  gameState = 0;
  distance = 0;
 // finishedPlayers = 0;
  yVel = 0;
  xVel = 0;

  xSet = false;
  game = new Game();
  game.getState();
  game.start();

  obstalegroup=createGroup()

  for(var i =0;i<5;i++)
  {

  
  w=random(200,1000)
  h=random(-height*4,height-300)
  obstale = createSprite(w,h,20,20)
  obstale.addImage(obstale_Image)
  obstalegroup.add(obstale)
}
}


function draw(){
   //start the game
   background(200, 200, 255);
   

   //start the game
   if (playerCount === 2 ) {
     game.update(1);
   }
 
   //start the game for real
   if (gameState === 1) {
     game.play();
   }
   if (gameState === 2) {
     console.log("End");  

   }
   drawSprites();
  }
 
  
