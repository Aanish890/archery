const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var Playerbase,ComputerBase;



function preloade() {

}


function setup() {
  canvas = createCanvas(1200,600);
  
   
  engine = Engine.create();
  world = engine.world;
	
   
   Playerbase = new PlayerBase(150, 350, 160, 310);
   ComputerBase = new Computerbase(200, 400, 240, 700);


 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   Playerbase.display();
   Computerbase.display();


   //display Player and computerplayer


}
