class Obstacle {
    constructor(game, x) {
        this.game = game;
        this.spriteWidth = 120;
        this.spriteHeight = 120;
        this.scaledWidth = this.spriteWidth * this.game.ratio;
        this.scaledHeight = this.spriteHeight * this.game.ratio;
        thus.x = x;
        this.y = this.game.height * 0.5 - this.height;
    }
    update() {
        this.x -= this.game.speed;
    }
}
