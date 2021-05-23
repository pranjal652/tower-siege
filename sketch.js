const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var polygon,world;
var block1, block2, block3, block4, block5, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16, block18, block19, block20, block21, block22, block23, block24, block25;
var ground1, ground2;
var slingshot;

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
    world = engine.world;

    polygon = new Polygon(150,240,50);
    slingshot = new Slingshot(polygon.body,{x:150, y:240});

    ground1 = new Ground(550,480,238,10);
    ground2 = new Ground(900,300,180,10);

    block1 = new Blocka(460,455,30,40);
    block2 = new Blocka(490,455,30,40);
    block3 = new Blocka(520,455,30,40);
    block4 = new Blocka(550,455,30,40);
    block5 = new Blocka(580,455,30,40);
    block6 = new Blocka(610,455,30,40);
    block7 = new Blocka(640,455,30,40);

    block8 = new Blockb(490,415,30,40);
    block9 = new Blockb(520,415,30,40);
    block10 = new Blockb(550,415,30,40);
    block11 = new Blockb(580,415,30,40);
    block12 = new Blockb(610,415,30,40);

    block13 = new Blockc(520,375,30,40);
    block14 = new Blockc(550,375,30,40);
    block15 = new Blockc(580,375,30,40);

    block16 = new Blockd(550,335,30,40);

    block17 = new Blocka(840,275,30,40);
    block18 = new Blocka(870,275,30,40);
    block19 = new Blocka(900,275,30,40);
    block20 = new Blocka(930,275,30,40);
    block21 = new Blocka(960,275,30,40);

    block22 = new Blockc(870,235,30,40);
    block23 = new Blockc(900,235,30,40);
    block24 = new Blockc(930,235,30,40);

    block25 = new Blockb(900,195,30,40);

    Engine.run(engine);
}

function draw() {
    background(56,44,44);

    ground1.display();
    ground2.display();

    polygon.display();
    //slingshot.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    block13.display();
    block14.display();
    block15.display();

    block16.display();

    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();

    block22.display();
    block23.display();
    block24.display();

    block25.display();

    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}