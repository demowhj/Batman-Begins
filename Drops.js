class Drops{
    constructor(x,y){
        var options = {
            // frictionAir:0.004
        }
        this.body = Bodies.circle(x, y, 3, options);
        World.add(world, this.body);

        this.x = x;
        this.y = y;

    }

    update(){
        if(this.body.position.y > 650){

            Matter.Body.setPosition(this.body, {x:this.x, y: this.y});
        }
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("blue");
        ellipseMode(CENTER);
        ellipse(0, 0, 6, 6);
        pop();

    }
}