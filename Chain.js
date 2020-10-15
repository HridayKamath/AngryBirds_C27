class Chain{

    constructor(body1,body2){

      var options = {
       
        bodyA: body1,
        bodyB: body2,
        stiffness: 0.5,
        length: 40

      }

      this.bodyA = body1;
      this.bodyB = body2;

      this.chain = Constraint.create(options);
      World.add(world,this.chain);


    }

     displayLine(){

           fill("black");
           strokeWeight(5);
           stroke("black");
           line(this.bodyA.position.x,this.bodyA.position.y,this.bodyB.position.x,this.bodyB.position.y);

     }


};