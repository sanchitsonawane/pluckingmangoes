
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,manog7,mango8,mango9,mango10;
var world,boy;
var launchingForce=100;

function preload(){
	boy=loadImage("images/boy.png");
	//stone=loadImage("images/stone.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
	stoneObj=new stone(235,420,30);

	mango1=new mango(1100,100,30);
	mango2=new mango(1010,250,30);
	mango3=new mango(1000,90,30)
	mango4=new mango(1100,180,30);
	mango5=new mango(1100,180,50);
	mango6=new mango(1000,187,30);
	mango7=new mango(900,180,50);
	mango8=new mango(500,180,30);
	mango9=new mango(1150,150,30);
	mango10=new mango(1000,180,50);


	treeObj=new tree(1050,580);
	
	
	groundObject=new ground(width/2,600,width,20);
	launcherObject=new launcher(stoneObj.body,{x:235,y:420});
	var render = Render.create({ element: document.body, engine: engine, 
		options: { width: 1300, height: 600, wireframes: false } });
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  textSize(25); text("Press Space to get a second Chance to Play!!",50 ,50);

  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
mango4.display();
mango5.display();
mango5.display();
mango6.display();
mango7.display();
mango9.display();
mango10.display();
stoneObj.display();
launcherObject.display();


  groundObject.display();
  dectectcollision(stoneObj,mango1);
    dectectcollision(stoneObj,mango2);
	dectectcollision(stoneObj,mango3);
	dectectcollision(stoneObj,mango4);
	dectectcollision(stoneObj,mango5);
	dectectcollision(stoneObj,mango6);
	dectectcollision(stoneObj,mango8);
	dectectcollision(stoneObj,mango9);
	dectectcollision(stoneObj,mango10);
	dectectcollision(stoneObj,mango7);
  
}
function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	launcherObject.fly();
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stoneObj.body,{x:325,y:420});
		launcherObject.attach(stoneObj.body);

	}
}

function dectectcollision(stone1,mango){
mangoBodyPosition=mango.body.position;
stoneBodyPosition=stone.body.position;
var distance =dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
if(distance<=mango.r+stone1.r){
	Matter.Body.setStatic( mango.body,false);
}
}