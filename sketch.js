const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine,myWorld;
var ball, ground;


function setup() {
  createCanvas(400,400);

  myEngine=Engine.create();// myEngine.world
  myWorld=myEngine.world;

  var ground_options={
    isStatic:true

  }

 
  ground=Bodies.rectangle(200,395,400,5,ground_options);
  World.add(myWorld,ground);


  var ball_options={
    restitution:1

  }

 
  ball=Bodies.circle(200,200,30,ball_options);
  World.add(myWorld,ball);

  
  //console.log(ground.position);
}

function draw() {
  background(255,0,255); 
  Engine.update(myEngine);
  rectMode(CENTER);
  fill("pink")
  rect(ground.position.x,ground.position.y,400,5);
  circle(ball.position.x,ball.position.y,30);

}