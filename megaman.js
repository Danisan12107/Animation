class megaman {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./megaman.png"), 0,0, 172, 190, 6, 0.1);
    };

    update() {

    };

    draw(ctx) {
        //ctx.drawImage(ASSET_MANAGER.getAsset("./megaman.png"),20,20);
        this.animator.drawFrame(this.game.clockTick, ctx, 20,20);
    };
}