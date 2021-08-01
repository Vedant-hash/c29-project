class SlingShot{
    constructor(bodyA,pointB){
   var options={
   bodyA:bodyA,
   pointB:pointB,
   stiffness:0.04,
   length:1
   }
   this.pointB=pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

    }
    display(){
    //complete the display function
    
    if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(48,22,8)
                strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

    fly(){
        this.sling.bodyA = null;
    

 
    
        }}