
function setup() {

    createCanvas(600, 600);
    
    background("white");
    
    }
    
    function draw() {
    
    stroke("blue");
    
    fill("black");
    
    if(mouseIsPressed){
    
    rect(mouseX, mouseY, 20, 35);
    
    }
    
    }
    