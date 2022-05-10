const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;

function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,230,10);
  //polygon
 
  //level one
  block1 = new Block(300,275,30,40);
  //console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);


  //2ND STAND
  // LEVEL 1 

  box1 = new Block(640,160,30,40);
//console.log(box1);
box2 = new Block(670,160,30,40);
box3 = new Block(700,160,30,40);
box4 = new Block(730,160,30,40);
box5 = new Block(760,160,30,40);
box6= new Block(790,160,30,40);

// // LEVEL2
box7 = new Block(670,120,30,40);
box8 = new Block(700,120,30,40);
box9 = new Block(730,120,30,40);
box10 = new Block(760,120,30,40);

//LEVEL3
box11= new Block(700,80,30,40);
box12= new Block(730,80,30,40);
// LEVEL 4
box13= new Block(716,40,30,40);
// box14= new Block(770,120,30,40);

//ball = new Block(350,320,40,34)
ball = Bodies.circle(250,320,20,20)
World.add (world, ball)

slingshot= new Slingshot(ball, {x: 250, y:320})

}
function draw() {
  background(0); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  fill("BROWN");
  stand1.display();
  stand2.display();

  

  strokeWeight(2);
  stroke(15);

  fill("GREEN");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  fill("SILVER");
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  fill("RED");
  box11.display();
  box12.display();
  fill("BLUE");
   box13.display();
  

  fill("blue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("RED");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("SILVER");
  block13.display();
  block14.display();
  block15.display();
  fill("GREEN");
  block16.display();
 

//display.ball();

imageMode (CENTER)
image(polygon_img, ball.position.x, ball.position.y ,20,20)
slingshot.display();
}
