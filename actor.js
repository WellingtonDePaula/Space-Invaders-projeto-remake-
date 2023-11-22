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
    width: 9,
    height: 51,
    pos: [],
    velv: 10,
}

var specialShot = {
    width: 30,
    height: 70,
    pos: [],
    velv: 6,
}

/////////////////////////////

class Rectangle {
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}

/////////////////////////////
//the ship state(here is the state of the ship)
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
//draw the ship
function drawShip(){
    image(shipImage, ship.x, ship.y, ship.width, ship.height);
}

/////////////////////////////
//move the ship
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
//ship collision with the borders
function borderCollision(){
ship.futureX = ship.x + ship.keyPressed*ship.max_velh;
    if(ship.futureX <= 200 || ship.futureX >= 1155+ship.width){
        ship.state = "idle";
    }
}

/////////////////////////////
//input keys
function keyTyped(){
    if(key === 'z'){
        shotC.pos.push([ship.x, ship.y]);
    }

    if(key === 'x'){
        specialShot.pos.push([ship.x, ship.y]);
    }

}

/////////////////////////////

function drawShot() {

    for(i = 0; i < shotC.pos.length; i++){

        let shot = new Rectangle(shotC.pos[i][0], shotC.pos[i][1], shotC.width, shotC.height);

        shotC.pos[i][1] -= shotC.velv;

        if(shotC.pos[i][1] <= -20){
            shotC.pos.shift();
        }

        image(shotImage, shot.x + ship.width/2 - 5, shot.y - ship.height/2 - 12, shot.width, shot.height);
        
        //enemy collision with shot

        for(j = 0; j < enemy.pos.length; j++) {
            if(shotC.pos.length != 0) {
                if(enemy.pos[j][0] + enemy.width/2 - 5 >= shotC.pos[i][0] && enemy.pos[j][0] - enemy.width <= shotC.pos[i][0] && enemy.pos[j][1] + enemy.height >= shotC.pos[i][1] - shotC.height + 10) {
                    shotC.pos.splice(i, 1);
                    enemy.pos.splice(j, 1);
                }
            }
        }

        ////////////////////////////////

        if(shotC.pos.length != 0) {
            if(otherShip.x + otherShip.width/2 >= shotC.pos[i][0] && otherShip.x - otherShip.width/2 <= shotC.pos[i][0] && otherShip.y + otherShip.height >= shotC.pos[i][1] - shotC.height + 10 && otherShip.y + otherShip.height <= shotC.pos[i][1]){
                shotC.pos.splice(i, 1);
            }
        }
    }

    for(i = 0; i < specialShot.pos.length; i ++){

        let shot = new Rectangle(specialShot.pos[i][0], specialShot.pos[i][1], specialShot.width, specialShot.height);

        specialShot.pos[i][1] -= specialShot.velv;

        if(specialShot.pos[i][1] <= -20){
            specialShot.pos.shift();
        }

        image(shotImage, shot.x + ship.width/2 - 15, shot.y - ship.height/2 - 15, shot.width, shot.height);
        
    }
}

/////////////////////////////
