class Slingshot{
    constructor(body1,point1){
        var options={
            bodyA: body1,
            pointB: point1,
            length:20,
            stiffness:0.04
        }
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;

            //strokeWeight(12);	
            line(pointA.x,pointA.y,pointB.x,pointB.y);

        }
    }
}