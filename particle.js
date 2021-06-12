class Particle{

constructor(){
var options={
  restitution:1,
  fricition:0.3,
  density:1  
}
  this.body=Bodies.circle(250,14,10,options)
 World.add(world,this.body)
 this.color=color(random(0,255),random(0,255),random(0,255))

}

display(){
  push()
  fill(this.color)
  translate(this.body.position.x,this.body.position.y)
  rotate(this.body.angle)
  ellipseMode(RADIUS)
  ellipse(0,0,10,10)
  pop()
}
}