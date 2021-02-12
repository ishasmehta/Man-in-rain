class Drops{
     constructor(x,y){
         var options = {
             friction: 0.1,
             density: 0.5,
             restitution: 0.1
         }
         this.body = Bodies.circle(x,y,2,options);
         World.add(world,this.body);
     } 
     update(){
         if(this.body.position.y > height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(-100,400)});
         } 
     }
     display(){
        push();
        fill("lightblue");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,2,2);
        pop();
     }
}