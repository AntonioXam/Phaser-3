// IMPORTAR LA PRIMERA ESCENA
import Firstscene from './scenes/Firstscene.js'

const config = {
    // OPCIONALES
    title: 'Titulo Juego',
    url: 'ces-vegamedia.es/',
    version: '0.0.1',

    // OPCIONAL
    pixelArt: true, // REMARCAR LOS PIXELES DE LAS IMAGENES

    // OBLIGATORIO
    type: Phaser.AUTO, // WEBGL O CANVAS O AUTOMATICO
    backgroundColor: '#34495E', // FONDO DEL LIENZO
    scale: {
        width: 1136, // TAMAÑO DEL LIENZO
        height: 640,
        parent: 'container', // ID DEL CONTENEDOR
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
    },
    scene: [Firstscene]

};
// CREAR LA INSTANCIA DEL JUEGO
const game = new Phaser.Game(config);


