class Grogu {

    constructor() {
        this.y;
        this.x = 50
        this.w = 40
        this.h = 50


        this.node = document.createElement("img")
        this.node.src = "./images/grogu.png"

        this.node.style.width = `${this.w}px`
        this.node.style.height = `${this.h}px`
        this.node.style.position = "absolute"
        this.node.style.top = `${this.y}px`
        this.node.style.left = `${this.x}px`

        this.node.style.pointerEvents = "none";


    }
}