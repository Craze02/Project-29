const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);
  ground = new Ground(400,390,800,20);
  block8 = new Box(330,235,30,40);
  block9 = new Box(3360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(350,235,30,40);
  //3rd
  block13 = new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(320,195,30,40);
  //last
  block16 = new Box(390,155,30,40);
}

function draw() {
  background(255,255,255); 
  Engine.update(engine); 
  ground.display();
  block16.display();
  block15.display();
  block14.display();
  block13.display();
  block12.display();
  block11.display();
  block10.display();
  block9.display();
  block8.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}