const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
paperIMG = loadImage("paper.png");
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here
	Engine.run(engine);
	paper = new Paper(150,380);
	ground = new Ground(400,697.5,800,20);
	bin = new Dustbin(630,620,20,100);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  bin.display();
  
}

function keyPressed(){
if(keyCode === UP_ARROW){

Matter.Body.applyForce(paper.body,paper.body.position,{x:125,y:-150});

}
}