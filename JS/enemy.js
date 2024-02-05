class Enemy {

    constructor () {


        this.w = 40;
        this.h = 60;


        this.node = document.createElement("img")
        if (type === "st1") {
            this.node.src ="../images/st1.png"
        } else if (type === "st2") {
            this.node.src ="../images/st2.png"
        }

        this.node.style.pointerEvents = "none";

        gameBoxNode.append(this.node)

        // ajustamos los valores del nodo

        this.node.style.width = `${this.w}px`
        this.node.style.height = `${this.h}px`
        this.node.style.position = "absolute"
        this.node.style.top = `${this.y}px`
        this.node.style.left = `${this.x}px`

        this.speed = 2;

    }

      // metodos

      automaticMovement() {
        
        this.x -= this.speed
        this.node.style.left = `${this.x}px`

    }





}