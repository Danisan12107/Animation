class megaman {
    constructor(game) {
        this.game = game;
        this.animator  = new Amimator(ASSET_MANAGER.getAsset("./megaman.png"), 0, 0, 180, 192, 4, 0.1);
    };

    update() {

    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, 30, 30);
    };
}