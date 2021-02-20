class Rope {
    constructor(bodyA,pointB) {
      var options = {
          bodyA:bodyA,
          pointB:pointB,
          stiffness:1.2,
          length:250
      }
      this.rope = Constraint.create(options)
      this.pointB = pointB;
      
      World.add(world, this.rope);
    }
    display(){
      var posA =this.rope.bodyA.position;
      var pointB=this.pointB
      push()
     line(posA.x,posA.y,pointB.x,pointB.y)
      pop()
    }
  };
