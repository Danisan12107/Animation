class mario {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./mario.png"), 6,0, 37, 58, 8, 0.1);
        this.x = 0;
        this.y = 0;
        this.speed = 0.05;
    };

    update() {
        this.x += this.speed + this.game.clockTick;
        if(this.x > 1024) this.x = 0;
    };

    draw(ctx) {
        //ctx.drawImage(ASSET_MANAGER.getAsset("./mario.png"),20,20);
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}