const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world
var rand

var drops = []

function preload(){
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");

}

function setup(){
    engine = Engine.create();
    world = engine.world;

    Engine.run(engine);

   createCanvas(500,600);
    umbrella = new Umbrella(200,470);
    thunder = createSprite(230,10);
    

   if(frameCount%100==0){
    for(var i = 0 ; i<=100 ; i++){
        drops.push(new Drop(random(0,500),random(-50,400)));  
       }
       
   }
     
    
}

function draw(){
    background("black");

    for(var i = 0 ; i<=100 ; i++){
        drops[i].display();
        drops[i].update();
       }

       umbrella.display();
   
       rand = Math.round(random(1,4)); 
       console.log(rand);
       switch(rand){
           case 1 :  thunder.addImage(thunder1);
            break;
            case 2 : thunder.addImage(thunder2);
            break;
            case 3 : thunder.addImage(thunder3);
            break;
            case 4 : thunder.addImage(thunder4);   
        
       }

       drawSprites();
}   

