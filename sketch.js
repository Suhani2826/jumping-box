var canvas;
var music;
var surface1
var surface2
var surafce3
var surface4
var box1
var edges 

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    //create 4 different surfaces

    
    surface1=createSprite(90,600,200,60);
    surface1.shapeColor="red";
    surface2=createSprite(300,600,200,60);
    surface2.shapeColor="green";
    surface3=createSprite(510,600,200,60);
    surface3.shapeColor="yellow";
    surface4=createSprite(720,600,200,60);
    surface4.shapeColor="blue";
    

    //create box sprite and give velocity
    box1=createSprite(random(20,750),150,50,50);
    
    box1.shapeColor="white";
    box1.velocityY=10;
    box1.velocityX=5;
    
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    box1.bounceOff(edges);
    
//add condition to check if box touching surface and make it box
    if(surface1.isTouching(box1)&&box1.bounceOff(surface1)){
        box1.shapeColor="red"
        music.play();
    }
     
    if(surface2.isTouching(box1)&&box1.bounceOff(surface2)){
        box1.shapeColor="green"
        music.play();  
    }

    if(surface3.isTouching(box1)&&box1.bounceOff(surface3)){
        box1.shapeColor="yellow"
        music.play();
    }


    if(surface4.isTouching(box1)){
        box1.shapeColor="blue"
        music.stop();
        box1.velocityY=0;
        box1.velocityX=0;
    }

    

    
    drawSprites();
    
}
