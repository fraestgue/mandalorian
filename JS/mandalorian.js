class Mandalorian {

    // propiedades del mandaloriano

    constructor () {
        this.x = 50; // posicion desde la izquierda de la pantalla del juego
        this.y = 300; // posicion desde la parte de arriba de la pantalla de juego
        this.w = 80; // ancho del mandaloriano
        this.h = 120; // alto del mandaloriano

        // la imagen del mandaloriano (el Nodo)
        this.node = document.createElement("img")
        this.node.src = "../images/mandaloriano.png"

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

        this.speed = 20


    }

    // MÉTODOS DEL MANDALORIANO

    movimiento () {
        window.addEventListener("keydown", (event) => {
            if (event.key === "ArrowTop") {
                this.y -= this.speed;
                this.y.style.top = `${this.y}px`
            } else if (event.key === "ArrowBottom") {
                this.y += this.speed;
                this.y.style.top = `${this.y}px`
            }
        })
    }

    // AQUÍ DEBE IR ACCIÓN DE DISPARAR



}