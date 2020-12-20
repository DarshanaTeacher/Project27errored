
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stand;
var bob1, bob2, bob3, bob4, bob5;
var string1;// string2, string3, string4, string5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var options = {
		isStatic: true
	}
	stand = Bodies.rectangle(400, 100, 300, 20, options);
	World.add(world, stand);

	
	bob1 = new Ball(300, 500);
	bob2 = new Ball(350, 500);
	bob3 = new Ball(400, 500);
	bob4 = new Ball(450, 500);
	bob5 = new Ball(500, 500);

	string1 = new Joint(bob1.body,stand.body);
	//string2 = new Joint(stand, bob2);
	//string3 = new Joint(stand, bob3);
	//string4 = new Joint(stand, bob4);
	//string5 = new Joint(stand, bob5);
	
	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  rectMode(CENTER);
  fill(255);
  rect(stand.position.x, stand.position.y, 400, 20);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  //string1.display();
  //string2.display();
 // string3.display();
 // string4.display();
 // string5.display();
  
  drawSprites();
 
}



