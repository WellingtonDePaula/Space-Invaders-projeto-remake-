var otherShip = {
    x: windowWidth + 500,
    y: 300,

    width: 70,
    height: 80,

    velh: 12,
}

//draw the obstacle
function drawOtherShip() {

    image(otherShipImage, otherShip.x, otherShip.y, otherShip.width, otherShip.height);

}

//////////////////////////////////
//move the obstacle
function moveOtherShip() {

    otherShip.x -= otherShip.velh;

    //return the obstacle to the initial position

    if(otherShip.x <= -250) {
        otherShip.x = windowWidth + 500;
    }
    console.log(windowWidth);
}