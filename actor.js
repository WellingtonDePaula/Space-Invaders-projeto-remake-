var ship = {
    state: "idle",

    velh: 0,
    max_velh: 5,

    width: 70,
    height: 80,

    x: windowWidth/2 - 70/2,
    y: 600,

    futureX: 0,

    right: 0,
    left: 0,
    keyPressed: 0,

}
var shotC = {
    width: 10,
    height: 50,
    pos: [],
}

class Rectangle {
    constructor(x, y, width, height, velv, max_velv){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velv = velv;
        this.max_velv = max_velv;
    }
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

    if(keyIsDown(LEFT_ARROW)){
        ship.left = 1;
    }

    if(keyIsDown(RIGHT_ARROW)){
        ship.right = 1;
    }

    ship.keyPressed = ship.right - ship.left;
    ship.velh = ship.max_velh*ship.keyPressed;

}

/////////////////////////////

function borderCollision(){
ship.futureX = ship.x + ship.keyPressed*ship.max_velh;
    if(ship.futureX <= 200 || ship.futureX >= 1155+ship.width){
        ship.state = "idle";
    }
}

/////////////////////////////

function keyTyped(){
    if(key === 'z'){
        shotC.pos.push([ship.x, ship.y]);
    }
}

function drawShot() {

    for(var i = 0; i < shotC.pos.length; i++){

        var shot = new Rectangle(shotC.pos[i][0], shotC.pos[i][1], shotC.width, shotC.height, 10, 10);

        fill(255);

        shotC.pos[i][1] -= shot.velv;

        if(shotC.pos[i][1] <= -20){
            shotC.pos.shift();
        }

        rect(shot.x + ship.width/2 - 5, shot.y - ship.height/2 - 12, shot.width, shot.height);
        
    }
}