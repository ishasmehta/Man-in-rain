class Umbrella{
    constructor(x,y){
        var options = {
            friction:0.1,
            isStatic:true
        }
        //this.image = loadImage("images/Walking Frame/walking_1.png");
        var manImage = loadAnimation("images/Walking Frame/walking_8.png", "images/Walking Frame/walking_7.png", "images/Walking Frame/walking_6.png", "images/Walking Frame/walking_5.png", "images/Walking Frame/walking_4.png", "images/Walking Frame/walking_3.png", "images/Walking Frame/walking_2.png", "images/Walking Frame/walking_1.png");

        var man = createSprite(185,435,390,390);
        man.addAnimation("walking",manImage);
        man.scale = 0.5;
        this.body = Bodies.circle(x,y,100,options);
        World.add(world,this.body);
    } 
}