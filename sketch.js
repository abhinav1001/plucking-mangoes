
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var back;
var slingshot,stone1;
function preload()
{
	back=loadImage("background1.jpg");
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree1=new trees(800,350,500,500);
	mango1=new mangoes(750,350,50,50);
	mango2=new mangoes(800,250,50,50);
	mango3=new mangoes(820,150,50,50);
	mango4=new mangoes(900,450,50,50);
	boy1=new boy(300,500,200,200);
	stone1=new stone(250,500,50,50);
	slingshot = new SlingShot(stone.body,{x:250, y:500});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(back);
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display()
  boy1.display();
  stone1.display();
  slingshot.display();  
  drawSprites();
 
}

/*function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}*/

