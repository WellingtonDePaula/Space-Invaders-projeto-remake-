var windowWidth = innerWidth;
var windowHeight = innerHeight;

function setup() {
    createCanvas(windowWidth, windowHeight - 1);
}
function draw() {
    
    background(0);
    drawCenario()

    shipState();
    drawShip();
    moveShip();
    borderCollision();
    drawShot();

    drawEnemy();
    }
function drawCenario() {
    fill(30);
    rect(200, 0, 1095, windowHeight);
}