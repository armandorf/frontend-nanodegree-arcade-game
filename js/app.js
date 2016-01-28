// Enemies our player must avoid
var Enemy = function(x, y) {    
    // 'x' and 'y' coordinates of the enemy
    this.x = x;
    this.y = y;
    
    // steps per unit of time assigned randomly from 30 to 900
    this.steps = Math.random() * (901 - 30) + 30;
    
    // the image/sprite for our enemies
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    
    // reset value and randomly assign a new steps value
    if (this.x > 505) {
        this.steps = Math.random() * (901 - 60) + 60;
        this.x = -101;
    }
    this.x += (this.steps * dt);
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Player class
var Player = function(x, y) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
};

Player.prototype.update = function() {
    // if player has reached the water, reset to the middle-bottom grass block
    if (this.y < 73) {
        this.x = 202;
        this.y = 405;
    }
    
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keyPressed) {
    // when a valid key is pressed, handle action for key pressed
    if (keyPressed) {
        switch (keyPressed) {
            case 'left':
                if (this.x > 0) {
                    this.x -= 101;
                }
                break;
            case 'up':
                if (this.y > 0) {
                    this.y -= 83;
                }
                break;
            case 'right':
                if (this.x < 404) {
                    this.x += 101;
                }
                break;
            case 'down':
                if (this.y < 405) {
                    this.y += 83;
                }
                break;
        }
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];

// the vertical value is 60, so that the bug is centered in each stone block
allEnemies.push(new Enemy(-101, 60));
allEnemies.push(new Enemy(-101, 143));
allEnemies.push(new Enemy(-101, 143));
allEnemies.push(new Enemy(-101, 143));
allEnemies.push(new Enemy(-101, 226));
allEnemies.push(new Enemy(-101, 226));

// Place the player object in a variable called player
var player = new Player(202, 405);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
