class Mandalorian {

    // propiedades del mandaloriano

    constructor () {
        this.x = 50; // posicion desde la izquierda de la pantalla del juego
        this.y = 300; // posicion desde la parte de arriba de la pantalla de juego
        this.w = 80; // ancho del mandaloriano
        this.h = 120; // alto del mandaloriano

        this.disparoObj = new Disparo ()

        this.disparoObj.x = this.x + this.w;
        this.disparoObj.y = this.y + 25

        // la imagen del mandaloriano (el Nodo)
        this.node = document.createElement("img")
        this.node.src = "./images/mandaloriano.png"

        // agregarlo a la caja de juego
        gameBoxNode.append(this.node)

        // ajustamos los valores del nodo
        this.node.style.width = `${this.w}px`
        this.node.style.height = `${this.h}px`
        this.node.style.position = "absolute"
        this.node.style.top = `${this.y}px`
        this.node.style.left = `${this.x}px`

        this.node.style.pointerEvents = "none";
        // la linea de arriba es para evitar interactuar con el elemento por error al clickar sobre el

        this.speed = 40
        this.disparoObj.speed = 30


    }

    // MÉTODOS DEL MANDALORIANO

    movimientoHaciaArriba () {
        
        this.y -= this.speed;
        this.node.style.top = `${this.y}px`
            
    }

    movimientoHaciaAbajo () {

        this.y += this.speed;
        this.node.style.top = `${this.y}px`

    }

    // AQUÍ DEBE IR ACCIÓN DE DISPARAR

    /*disparar () {
       this.disparoObj.x += this.disparoObj.speed
       this.disparoObj.node.style.left = `${this.disparoObj.x}px`

    }*/



}