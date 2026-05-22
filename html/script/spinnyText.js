/*CODE SOURCED FROM @karenanndonnachie GITHUB FILES AND EDITED BY ME!*/
var spin = 0;
var letterSize = 30;

/*styling*/
let ink = "#B00F64";
let line = "#ebbbd1";

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    textAlign(CENTER);
    frameRate(15);
    /*background(0, 0);*/

    createCanvas(windowWidth, windowHeight);
    textFont('Annie Use Your Telescope');
    angleMode(DEGREES);
    textAlign(CENTER, CENTER);
}

function draw() {
    clear();

    push();
    translate(width / 2, height / 3.5);
    /*rotate(spin);*/
    textSize(letterSize);

    /*animation*/
    spin += map(mouseX, 0, width, -1, 1);
    letterSize = map(mouseY, 10, height, 20, 200);

    /* circle! 
    stroke(line);
    strokeWeight(4);
    noFill();
    circle(0, 0, letterSize * 5);
    circle(0, 0, letterSize * 25);*/

    /* text styling */
    fill(ink);
    stroke(255);
    strokeWeight(5);
    text('my portfolio!', 0, -letterSize * 0.3);

    pop();
}