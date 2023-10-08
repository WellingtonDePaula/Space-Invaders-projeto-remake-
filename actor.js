var ship = {
    state: "idle",

    velh: 0,
    max_velh: 5,

    width: 70,
    height: 80,

    x: windowWidth/2 - 70/2,
    y: windowHeight/2 - 80/2,

    futureX: 0,

    right: 0,
    left: 0,
    keyPressed: 0,
}

/////////////////////////////

function shipState(){
    switch(ship.state){
        case "idle":
            {
                ship.velh = 0;
                if(ship.keyPressed != 0){
                    ship.state = "moving";
                }
                break;
            }
        case "moving":
            {
                ship.x += ship.velh;
                if(ship.keyPressed === 0 && ship.velh === 0){
                    ship.state = "idle";
                }
                break;
            }
    }
}

/////////////////////////////

function drawShip(){
    image(shipImage, ship.x, ship.y, ship.width, ship.height);
}

/////////////////////////////

function moveShip(){

    ship.right = 0;
    ship.left = 0;
    keyPressed = 0;

    if (keyIsDown(LEFT_ARROW)) {
        ship.left = 1;
      }

    if (keyIsDown(RIGHT_ARROW)) {
        ship.right = 1;
    }

    ship.keyPressed = ship.right - ship.left;
    ship.velh = ship.max_velh*ship.keyPressed;

    console.log(ship.left, ship.state);

}

/////////////////////////////

function borderCollision(){
ship.futureX = ship.x + ship.keyPressed*ship.max_velh;
    if(ship.futureX <= 200 || ship.futureX >= 1155+ship.width){
        ship.state = "idle";
    }
}