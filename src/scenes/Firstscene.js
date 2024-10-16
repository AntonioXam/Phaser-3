var AMOUNT_DIAMONDS = 30;


class Firstscene extends Phaser.Scene {
    constructor() {
        super('Firstscene');
    }
    init() {
        //variable que al pulsar el click izquierdo del ratón se cambia a true
        this.flagFirstMouseDown = false;
        
    }
    preload() {
        this.load.image('background','assets/images/background.png');
        this.load.spritesheet(
            'horse',
            'assets/images/horse.png',
                { frameWidth: 84, frameHeight: 156 }
            );
    
            this.load.spritesheet(
                'diamonds',
                'assets/images/diamonds.png',
                { frameWidth: 81, frameHeight: 84 }
            );
    }
    create() {   
        this.background = this.add.sprite(this.sys.game.canvas.width/2, this.sys.game.canvas.height/2, 'background');
        
        this.horse = this.add.sprite(42,78, 'horse',0);
        this.horse.x = this.sys.game.canvas.width/2;
        this.horse.y = this.sys.game.canvas.height/2;
        this.input.on('pointerdown', this.onTap, this);
        
    }
    update(time, delta) {
        if(this.flagFirstMouseDown){
        var pointerX = this.input.x;
        var pointerY = this.input.y;
        //mover el caballo hacia el puntero
        var distX = pointerX - this.horse.x;
        var distY = pointerY - this.horse.y;

        this.horse.x += distX * 0.02;
        this.horse.y += distY * 0.02;
        //bucle de juego para girar el caballo
        this.horse.angle += 0.5;
    }

    }

    //Funciones personalizadas
    onTap() {
        this.flagFirstMouseDown = true;
    }

}
export default Firstscene;


