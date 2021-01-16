const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bruce, ground;
var maxDrops = 300;
var drops = [];
var thunder, thunderImg1, thunderImg2, thunderImg3, thunderImg4;

function preload(){
    thunderImg1 = loadImage("images/thunderbolt/1.png");
    thunderImg2 = loadImage("images/thunderbolt/2.png");
    thunderImg3 = loadImage("images/thunderbolt/3.png");
    thunderImg4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(700,750);
    
    bruce = new Umbrella(350,570);
    ground = new Ground(350,725,700,50);

    for(var i=0; i<maxDrops; i++){
        drops.push(new Drops(random(0, 700), random(0, 450)));
    }
}

function draw(){
    background(0);

    Engine.update(engine);

    ground.display();
    bruce.display();

    for(var i = 0; i < drops.length; i++){
        drops[i].display();
        drops[i].update();
    }

    lightening();
    drawSprites();
}   

function lightening(){
    if(frameCount % 100 === 0){    
        thunder = createSprite(random(150,550), random(50,200));
        
        var rand = Math.round(random(1,4));
        switch(rand){
            case 1: thunder.addImage(thunderImg1);
            break;

            case 2: thunder.addImage(thunderImg2);
            break;
            
            case 3: thunder.addImage(thunderImg3);
            break;
            
            case 4: thunder.addImage(thunderImg4);
            break;
        }

        thunder.lifetime = 15;
        thunder.scale = 0.6;
    }
}
