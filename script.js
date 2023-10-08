var windowWidth = innerWidth;
var windowHeight = innerHeight;

function setup() {
    createCanvas(windowWidth, windowHeight);
}
function draw() {
    background(0);
    desenhaCenario()

    shipState();
    drawShip();
    moveShip();
    }
function desenhaCenario() {
    fill(30);
    rect(200, 0, 1095, windowHeight);
}