enemy = {
    pos: [[500, 300]],
    width: 40,
    height: 40,
}

function drawEnemy(){

    for(i = 0; i < enemy.pos.length; i++){

        let enemyShip = new Rectangle(enemy.pos[i][0], enemy.pos[i][1], enemy.width, enemy.height);

        image(enemyImage, enemyShip.x, enemyShip.y, enemyShip.width, enemyShip.height);

    }

}
