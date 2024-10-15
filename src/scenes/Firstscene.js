class Firstscene extends Phaser.Scene {
    constructor() {
        super('Firstscene');
    }
    init() {
        console.log("init");
    }
    preload() {
        this.load.image('background','assets/images/background.png');
        console.log("preload");
    }
    create() {   
        this.background = this.add.sprite(this.sys.game.canvas.width/2, this.sys.game.canvas.height/2, 'background');
        console.log(this.sys.game.canvas.width/2);
    }
    update(time, delta) {
        console.log("update");
    }

}
export default Firstscene;


