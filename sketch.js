var dustbin1;
var dustbin2;
var dustbin3;
var paperobject;
var dustbinobj;
var groundObject;
var paper1;
var Ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var Groundop={
		isStatic:true
	} 
	Ground=Bodies.rectangle(400,650,800,20,Groundop)
	World.add(world,Ground)
	

	Engine.run(engine);
   
	paper1=new paper(200,630,50);
	dustbin1=new dustbin(700,630,20,50);
	dustbin2=new dustbin(600,630,20,50);
	dustbin3=new dustbin (650,630,82,20);
	paperobject=new paper(200,630,50);
	dustbinobj=new dustbin(650,630,82,20);
}


function draw() {
  rectMode(CENTER);
  background(0);
   paper1.display();
   dustbin1.display();
   dustbin2.display();
   dustbin3.display();
   rect(Ground.position.x,Ground.position.y,800,20)
  drawSprites();
 
}
 function keyPressed(){
     if (keyCode=== UP_ARROW){
		 Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
		 groundObject.display();
		 dustbinobj.display();
		 paperobject.display();

		 paperobject.display();
		 groundObject.display();
		 dustbinobj.display();
	 }
 }


