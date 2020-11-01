
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600,1200);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


//side1=new Dustbin(200,200,10,10)

 	ball=new Ball(1400,50,5)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites()
  ball.display()
}

function keypressed(){
	if(keycode === UP_ARROW){

	Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}