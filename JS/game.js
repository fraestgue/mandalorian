class Game {
    // aqui estaran todas las propiedades (elementos) del juego

    constructor () {
        this.gameIntervalFRecuency = Math.round(1000 / 60); // 60fps o 60 veces por segundo. Recomendado no tocar

        // el mandaloriano (el Nodo)
        this.mandalorianObj = new Mandalorian (); // se liga la clase Mandalorian


        this.enemyArr = [];
        this.enemyAppearFrecuency = 2000;


        this.gameIntervalId; // se deja vacio al principio, luego se alamacena el Id cuando empieza el intervalo
        this.enemysAppearIntervalId;
    }

    // MÉTODOS O ACCIONES DE JUEGO

    enemysAppear () {


        this.enemysAppearIntervalId = setInterval (() => {
            let positionAppear = Math.random() * 600;

            let nuevoEnemySt1 = new Enemy("st1", positionAppear);
            this.enemyArr.push(nuevoEnemySt1);

            let nuevoEnemySt2 = new Enemy("st2", positionAppear);
            this.enemyArr.push(nuevoEnemySt2);



        }, this.enemyAppearFrecuency)

    }

    collitionCheckMandalorianEnemys() {
        this.enemyArr.forEach((eachEnemyObj) => {
          // necesito el mandalorian // this.mandalorianObj
          // necesito cada uno de los enemys // eachEnemyObj
          if (
            this.mandalorianObj.x < eachEnemyObj.x + eachEnemyObj.w &&
            this.mandalorianObj.x + this.mandalorianObj.w > eachEnemyObj.x &&
            this.mandalorianObj.y < eachEnemyObj.y + eachEnemyObj.h &&
            this.mandalorianObj.y + this.mandalorianObj.h > eachEnemyObj.y
          ) {
            // Collision detected!
            console.log("ha colisionado");
            this.gameOver()
          }
        });
      }


     gameOver () {
            clearInterval(this.gameIntervalId)
            clearInterval(this.enemysAppearIntervalId)
        
            // ocultamos la pagina de juego
            gameSreenNode.style.display = "none";
        
            // mostramos la pagina final
            gameOverScreenNode.style.display = "flex";
    }

    checkIfObstauloLeftGameBox() {
        if (this.enemyArr[0] !== undefined && this.enemyArr[0].x < this.enemyArr[0].w) {
                // si en el array hay al menos un elemento y si ese elmento salio del gamebox por la izquierda
                console.log("obstaculo saliendo")
                // remueve el elemento (REMOVER DE JS Y DEL DOM)
                this.enemyArr[0].node.remove()
                this.enemyArr.shift() // esto siginifica eliminalo del array
        }
       
      }

      gameLoop() {
        this.mandalorianObj.movimiento();
        
        this.enemyArr.forEach((eachEnemyObj) => {
            eachEnemyObj.automaticMovement();
        });
        this.collitionCheckMandalorianEnemys();
      }


      start() {
        this.gameIntervalId = window.setInterval(() => {
          // console.log("probando intervalo")
          this.gameLoop();
        }, this.gameIntervalFRecuency);
      }








}