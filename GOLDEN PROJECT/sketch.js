var form;
var engine, world;
var hero,dragon;
var ground,ground2;
var backGroundIMG;
var heroIMG;
var dragonIMG;
var fireballImg;
var fireball;
var score = 0;

var gameState = "Start"

function preload(){
    backGroundIMG = loadImage("sprites/Scenery.jpg");
    heroIMG = loadImage("sprites/Knight 2.jpg");
    dragonIMG = loadImage("sprites/Dragon.gif")
    fireballImg = loadImage("sprites/Fireball.png")
}
function setup(){
    var canvas = createCanvas(800,400);
    
    form = new Form();
    hero = createSprite(50,350,50,50);
    hero.addImage(heroIMG);
    hero.scale = 0.3;
    dragon = createSprite(750,200,100,100);
    dragon.addImage(dragonIMG);
    dragon.scale = 0.1
    ground =createSprite(400,400,800,2);
    ground2 =createSprite(0,200,2,400);
}

function draw(){
    background(backGroundIMG)
    fill("red")
    text("Lives Lost :" + score,650,15)
    
    if(keyDown("space")){
        hero.velocityY = -5;
    }
    
    if(keyDown("left")){
        hero.velocityX = -3;
    }
    
    if(keyDown("right")){
        hero.velocityX = 3;
    }
    
    if (hero.isTouching(fireball)){
        score = score + 1;
    }
    
    hero.velocityY = hero.velocityY + 1;
    
    hero.collide(ground);
    hero.collide(ground2);
    
    form.display();
    hero.display();
    ground.display();
    Shootfireball();
    
    drawSprites();
}

function Shootfireball(){
        
    if (frameCount % 60 === 0){
        fireball = createSprite(650,200,30,30);
        fireball.velocityX = -5;
        fireball.velocityY = 2;
        fireball.y = Math.round(random(100,300))
        fireball.collide(ground);
        fireball.addImage(fireballIMG);
    }
    
}