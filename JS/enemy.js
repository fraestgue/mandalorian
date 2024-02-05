class Enemy {

    constructor (type) {

        this.x =gameBoxNode.offsetWidth // ancho del gamebox en numero (600)

        if (type === "st1") {
            this.y = Math.random() * 600; 
        } else if (type === "st2") {
            this.y = Math.random() * 600 ;
        }

        this.w;
        this.h;


        this.node = document.createElement("img")
        if (type === "st1") {
            this.node.src ="../images/st1.png"
            this.w = 150;
            this.h = 120;
        } else if (type === "st2") {
            this.node.src ="../images/st2.png"
            this.w = 80;
            this.h = 120;
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