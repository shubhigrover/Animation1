var starImg,bgImg,snowflake
var star, starBody;
var child, childAnim,childImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("snow3.jpg");
	childAnim= loadAnimation("girl1.PNG","girl2.PNG","girl3.PNG","girl4.PNG","girl5.PNG","girl6.PNG")
	childImg=loadImage("girl1.PNG")
}

function setup() {
	createCanvas(1200, 600);

	child=createSprite(200,450)
	child.addImage("childpic",childImg)
	child.lifetime=100
	child.scale=2
	star = createSprite(875,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(875 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  if(star.y>300 && starBody.position.y>300){
	  Matter.Body.setStatic(starBody,true)
  }

  drawSprites();

}

function keyPressed() {

	if(keyCode===32){
		child=createSprite(200,450)
		child.addAnimation("child",childAnim)
		child.scale=2
	}	
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

}
