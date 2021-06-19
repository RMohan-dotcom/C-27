class Chain{

constructor(bodyA,bodyB){
var opt={
bodyA:bodyA,
bodyB:bodyB,
stiffness:10,
length:2
}
this.c=Constraint.create(opt)
World.add(world,this.c)
}
display(){
    var pointA=this.c.bodyA.position
    var pointB=this.c.bodyB.position
    strokeWeight(4)
    line(pointA.x,pointA.y,pointB.x,pointB.y)
}



}