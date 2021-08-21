const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,rope,ground;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;

function setup() {
  createCanvas(2000, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(1000,750,700,20);
  ball = new Ball(200,600,100,100);
  rope = new Rope(ball.body,{x:700,y:30});
  box1 = new Box(1100,740,300,200)
  box2 = new Box(1100,740,300,200)
  box3 = new Box(1100,740,300,200)
  box4 = new Box(1100,740,300,200)
  
}

function draw() 
{
  background("skyblue");
  Engine.update(engine);
  ground.display();
  ball.display();
  rope.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  
}

function mouseDragged()
{
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}



