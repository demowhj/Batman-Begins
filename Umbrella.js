class Umbrella{
    constructor(x,y){
        
        this.body = Bodies.circle(x, y, 165);
        World.add(world, this.body);

        this.x = x;
        this.y = y;

        this.boyWalking = loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png",)
        this.boy = createSprite(x, y);
        this.boy.addAnimation("walking",this.boyWalking);
        this.boy.scale = 0.5;
    }

    display(){
        // var pos = this.body.position;
        // var angle = this.body.angle;

        // push();
        // translate(pos.x, pos.y);
        // rotate(angle);
        // fill("blue");
        // ellipseMode(CENTER);
        // ellipse(0, 0, 20, 20);
        // pop();

        this.boy.x = this.body.position.x;
        this.boy.y = this.body.position.y;

    }
}