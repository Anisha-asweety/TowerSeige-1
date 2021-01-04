const Engine=Matter.Engine
const World=Matter.World
const Body=Matter.Bodies

var ground
var stand 

function setup(){
background(0,0,0)
createCanvas(800,800)

stand=new Ground(700,500,30,20)
}

function draw(){
 
   stand.display();   
    drawSprites();
}