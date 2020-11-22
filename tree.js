class Tree {
    constructor(x, y) {
      var options = {
         isStatic:true
      }
      this.body = Bodies.rectangle(x, y, 400, 500, options);
      this.width = 400;
      this.height = 500;
      
      World.add(world, this.body);
      this.image = loadImage("tree.png");
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };
  