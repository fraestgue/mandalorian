class Grogu {

    constructor() {
        this.y = Math.random() * 600;
        this.x = gameBoxNode.offsetWidth
        this.w = 50
        this.h = 40


        this.node = document.createElement("img")
        this.node.src = "./images/grogu.png"

        gameBoxNode.append(this.node)

        this.node.style.width = `${this.w}px`
        this.node.style.height = `${this.h}px`
        this.node.style.position = "absolute"
        this.node.style.top = `${this.y}px`
        this.node.style.left = `${this.x}px`

        this.node.style.pointerEvents = "none";

        this.speed = 2;


    }

    movimientoGrogu() {
        
        this.x -= this.speed
        this.node.style.left = `${this.x}px`
    }
}