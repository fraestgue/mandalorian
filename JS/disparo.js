class Disparo {

    constructor (posicionDelMandaloriano) {

        this.x = gameBoxNode.offsetWidth - 1100
        this.y =  posicionDelMandaloriano + 25; // aqui se le suma la posicion actual del unico Mandaloriano que deberia haber en el juego
        this.w = 30;
        this.h= 4;
       
        this.node = document.createElement("img")

        this.node.src = "./images/disparoazul.png"

        gameBoxNode.append(this.node)

        this.node.style.width = `${this.w}px`
        this.node.style.height = `${this.h}px`
        this.node.style.position = "absolute"
        this.node.style.top = `${this.y}px`
        this.node.style.left = `${this.x}px`
        
        this.node.style.pointerEvents = "none";

        this.speed = 7;

    }

    movimientoAutomaticoDeDisparar () {
        this.x += this.speed
        this.node.style.left = `${this.x}px`
 
     }
}





