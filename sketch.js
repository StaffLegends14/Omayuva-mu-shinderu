const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var Ground,Ground2;

var bridge,con,spare,sussy_balls,sus,img,back;



function preload(){
  img = loadImage("./assets/stone.png")
  back = loadImage("assets/background.png");
  zomb = loadImage("assets/zombie.png");

}

function setup() {
  createCanvas(1858, 977);
  sus = new Group();
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  zombie = createSprite(0 + 400,height - 150,100,100);
  zombie.velocityX = 1;

  Ground = new Grown(width/20,height - 10,300,1200);
  Ground2 = new Grown(width/1.09,height - 10,300,1200,10,10);

  bridge = new Bridge(35,{x: 200,y:400});
  spare = Bodies.circle(Ground2.body.position.x + 100,Ground2.body.position.y - 800,20,{isStatic: true});
  con = new Join(bridge,spare);

  button = createImg('assets/axe.png');
  button.position(Ground2.body.position.x - 200,Ground2.body.position.y - 600);
  button.size(50,50);
  button.mouseClicked(drop);

  console.log(width + "," + height);

  imageMode(CENTER);

  
  cball = new Stone(9);
  cball2 = new Stone(9);
  cball3 = new Stone(9);
  cball4 = new Stone(9);
  cball5 = new Stone(9);
  cball6 = new Stone(9);
  
 

}

function draw() {
  background(51);
  Engine.update(engine);

 
  Ground.display();
  Ground2.display();
  image(back,width/2,height/2,1858,977)

  zombie.addImage(zomb);
  zombie.scale = 0.2
  ellipse(spare.position.x,spare.position.y,10,10);
  image(img,cball.body.position.x,cball.body.position.y,110,110);
  image(img,cball2.body.position.x,cball2.body.position.y,110,110);
  image(img,cball3.body.position.x,cball3.body.position.y,110,110);
  image(img,cball4.body.position.x,cball4.body.position.y,110,110);
  image(img,cball5.body.position.x,cball5.body.position.y,110,110);
  image(img,cball6.body.position.x,cball6.body.position.y,110,110);
  //cball6.body.position.y = height/10;

  bridge.show();

  //for(var i = 0;i <= 0;i++){
    //var x = random(width/2 - 200,width/2 + 300);
    //var y = random(-10, 140);

    //showBall(sussy_balls);

    //sus.push(sussy_balls);
  //}
  drawSprites();
}

function showBall(cball){
  cball = new Stone(9);
  image(img,cball.body.position.x,cball.body.position.y,110,110);
}

function drop()
{
  con.break();
  bridge.dettach();
  bridge = null; 
}

