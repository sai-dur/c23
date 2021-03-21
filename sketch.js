const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;
    
     box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    box3= new Box(100,100,30,50);
    box4= new Box(300,200,20,20);
ground=new Ground(200,height,1200,50)
}

function draw(){
    background("yellow");
    Engine.update(engine);

box4.display();
        box3.display();
        box2.display();
    box1.display();
    ground.display();
}
