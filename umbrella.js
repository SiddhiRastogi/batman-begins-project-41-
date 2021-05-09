class Umbrella {
    constructor(x,y){
        var options = {
            isStatic : true
        }
        this.umbrella = Bodies.circle(x,y,50,options);
        World.add(world,this.umbrella);
        this.image = loadImage("Walking Frame/walking_1.png");
    }

    display(){
        imageMode(CENTER);
        image(this.image,this.umbrella.position.x,this.umbrella.position.y,300,300);
     //   console.log("working");
    }
}