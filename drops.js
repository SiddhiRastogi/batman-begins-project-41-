class Drop {
    constructor(x,y){
        var options = {
            restitution : 0.5,
            friction : 0.1

        }
     this.body = Bodies.circle(x, y, 5 )
     World.add(world,this.body);
     

    this.radius = 10;
    }

    update(){

        if(this.body.position.y > 600){
           Matter.Body.setPosition(this.body,{x:random(0,500),y:0})
        }
    }

    display(){
        ellipse(this.body.position.x , this.body.position.y , this.radius , this.radius);
    }
}
