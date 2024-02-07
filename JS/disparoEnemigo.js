class DisparoEnemigo {

    constructor (posicionDelEnemigoy, posicionDelEnemigox) {

        this.x = posicionDelEnemigox 
        this.y =  posicionDelEnemigoy + 25; // aqui se le suma la posicion actual del enemigo que deberia haber en el juego
        this.w = 30;
        this.h= 4;
       
        this.node = document.createElement("img")

        this.node.src = "./images/disparorojo.png"

        gameBoxNode.append(this.node)

        this.node.style.width = `${this.w}px`
        this.node.style.height = `${this.h}px`
        this.node.style.position = "absolute"
        this.node.style.top = `${this.y}px`
        this.node.style.left = `${this.x}px`
        
        this.node.style.pointerEvents = "none";

        this.speed = 7;

    }

    movimientoAutomaticoDeDispararEnemigo () {
        this.x += this.speed
        this.node.style.left = `${this.x}px`
 
     }
}