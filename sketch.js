const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;


var Pilnko=[]
var divisions=[]
var particle=[]


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
 
 engine = Engine.create()
world= engine.world

 Engine.run(engine)

ground1= new Ground(240,790,480,20)
ground2= new Ground(0,400,20,800)
ground3= new Ground(480,400,20,800)

for(i=16;i,480;i=i+65){
  divisions.push(new Divisions(i,650))
}

for(i=0;i<=width;i=i+50){
  plinko.push(new Pilnko(i=50))
}
for(i=30;i<=width;i=i+50){
  plinko.push(new Pilnko(i=150))
}
for(i=60;i<=width;i=i+50){
  plinko.push(new Pilnko(i=250))
}
for(i=90;i<=width;i=i+50){
  plinko.push(new Pilnko(i=350))
}

yalgaar=loadSound("Yalgaar.mp3")


}

function draw() {
  background(255,255,255);  
  drawSprites();

ground1.display()
ground2.display()
ground3.display()

if( frameCount% 30===0){
particle.push(new Particle())
}

for(i=0;i<particle.length;i++){
  particle[i].display()
}

for(i=0;i<divisions.length;i++){
  divisions[i].display()
}

for(i=0;i<plinko.length;i++){
  Pilnko[i].display()
}


}