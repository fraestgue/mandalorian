class Aliados {
    constructor (type) {

        this.x =gameBoxNode.offsetWidth // ancho del gamebox en numero (600)

        
        this.y = Math.random() * 600; 
       

        this.w;
        this.h;


        this.node = document.createElement("img")
        this.type = ["c3po", "chiwaka", "esunatrampa", "ewok", "jawa", "r2d2"]
        this.type.forEach((eachType) => {
            if (eachType === "c3po") {
            this.node.src ="./images/c3po.png"
            this.w = 50;
            this.h = 65;
            } else if (eachType === "chiwaka") {
            this.node.src ="./images/chiwaka.png"
            this.w = 50;
            this.h = 65;
            } else if (eachType === "esunatrampa") {
            this.node.src ="./images/esunatrampa.png"
            this.w = 50;
            this.h = 65;
            } else if (eachType === "ewok") {
            this.node.src ="./images/ewok.png"
            this.w = 50;
            this.h = 65;
            } else if (eachType === "jawa") {
            this.node.src ="./images/jawa.png"
            this.w = 50;
            this.h = 65;
            } else if (eachType === "r2d2") {
            this.node.src ="./images/r2d2.png"
            this.w = 50;
            this.h = 65;
        } 
        })
        

        this.typeAleatorioIndex = Math.floor(Math.random() * this.type.length)
        this.aliado = type[this.typeAleatorioIndex]

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

      movimientoAliados() {
        
        this.x -= this.speed
        this.node.style.left = `${this.x}px`

    }
}