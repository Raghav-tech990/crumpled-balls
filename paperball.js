class Ball{

constructor(x,y,radius){
var options = {
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
}
this.raghav = Bodies.circle(x,y,radius,options)
this.radius=6;
World.add(world,this.raghav)
}
display(){
var pos=this.raghav.position
//push();
//translate(pos.x,pos.y);
//ellipsemode(CENTER);
//Fill(255);
ellipse(0,0,this.radius)
//Pop();
}

}