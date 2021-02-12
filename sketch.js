const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var drops = [];
var maxDrops = 100;
var thunder;
var count = 0;
function preload(){
    th1 = loadImage("images/thunderbolt/1.png");
    th2 = loadImage("images/thunderbolt/2.png");
    th3 = loadImage("images/thunderbolt/3.png");
    th4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
    createCanvas(400,600);

    engine = Engine.create();
    world = engine.world;

    

    for(var i=0; i<maxDrops; i++){
        drops.push(new Drops(random(0,400),random(-100,400)));
    }
   
    umbrella = new Umbrella(200,380);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    for(var i=0; i<maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }
    var rand = Math.round(random(1,4));
    if(frameCount % 100 === 0){
        count = frameCount + 10;
        thunder = createSprite(random(0,400),50,10,10);
        switch(rand){
            case 1: thunder.addImage(th1);
                    break;
            case 2: thunder.addImage(th2);
                    break;  
            case 3: thunder.addImage(th3);
                    break;  
            case 4: thunder.addImage(th4);
                    break;  
            default: break;
        }
        thunder.scale = random(0.3,0.5);
    }
    if(frameCount === count && thunder){
        thunder.destroy();
    }
    
    
    drawSprites();
}   



