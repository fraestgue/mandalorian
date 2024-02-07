class Game {
  // aqui estaran todas las propiedades (elementos) del juego

  constructor() {
    this.gameIntervalFRecuency = Math.round(1000 / 60); // 60fps o 60 veces por segundo. Recomendado no tocar

    // el mandaloriano (el Nodo)
    this.mandalorianObj = new Mandalorian(); // se liga la clase Mandalorian

    this.disparoObj = new Disparo();

    this.enemyObj = new Enemy();

    let disparoEnemigoObj = new Disparo();

    this.enemyArr = [];
    this.enemyAppearFrecuency1 = 3000;
    this.enemyAppearFrecuency2 = 4000;

    this.gameIntervalId; // se deja vacio al principio, luego se alamacena el Id cuando empieza el intervalo
    this.enemysAppearIntervalId;
    this.enemysAppearIntervalId1;

    this.disparoArr = [];

    this.disparoEnemigoArr = [];

    this.disparoEnemigoIntervalId;
    this.disparoEnemigoAppearFrecuency = 1500;
  }

  // MÉTODOS O ACCIONES DE JUEGO

  enemysAppear() {
    this.enemysAppearIntervalId = setInterval(() => {
      let nuevoEnemySt1 = new Enemy("st1");
      this.enemyArr.push(nuevoEnemySt1);
    }, this.enemyAppearFrecuency1);

    this.enemysAppearIntervalId1 = setInterval(() => {
      let nuevoEnemySt2 = new Enemy("st2");
      this.enemyArr.push(nuevoEnemySt2);
    }, this.enemyAppearFrecuency2);
  }

  disparar() {
    let nuevoDisparo = new Disparo(this.mandalorianObj.y);
    this.disparoArr.push(nuevoDisparo);
  }

  disparoEnemigo() {
    this.disparoEnemigoIntervalId = setInterval(() => {
      let enemigoAleatorioIndex = Math.floor(
        Math.random() * this.enemyArr.length
      ); // primero obtenemos el indice aleatorio del enemigo dentro del array de enemigos
      let enemigoAleatorio = this.enemyArr[enemigoAleatorioIndex];
      // obtenemos el enemigo aleatorio pasandole el indice al array
      let nuevoDisparoEnemigo = new DisparoEnemigo(
        enemigoAleatorio.y,
        enemigoAleatorio.x
      ); // cada nuevo disparo enemigo tiene que tener la posicion y e x del enemigo aleatorio que estamos cogiendo

      this.disparoEnemigoArr.push(nuevoDisparoEnemigo);
      // y aqui metemos el valor de nuevoDisparoEnemigo dentro del array de disparo enemigo

      console.log("enemigo disparando");
    }, this.disparoEnemigoAppearFrecuency);

    /*this.disparoEnemigoIntervalId = setInterval(() => {

        let nuevoDisparoEnemigo = new DisparoEnemigo (this.enemyObj.y, this.enemyObj.x)
        this.disparoEnemigoArr.push(nuevoDisparoEnemigo)

      }, this.disparoEnemigoAppearFrecuency)*/
  }

  collitionCheckDisparoEnemys() {
    // necesito el disparto // this.disparoObj
    // necesito cada uno de los enemigos // eachEnemyObj
    this.disparoArr.forEach((eachDisparoObj, indicenDisparo) => {
      this.enemyArr.forEach((eachEnemyObj, indiceEnemigo) => {
        if (
          eachDisparoObj.x < eachEnemyObj.x + eachEnemyObj.w &&
          eachDisparoObj.x + eachDisparoObj.w >
            eachEnemyObj.x + eachEnemyObj.w / 2 &&
          eachDisparoObj.y < eachEnemyObj.y + eachEnemyObj.h &&
          eachDisparoObj.y + eachDisparoObj.h > eachEnemyObj.y
        ) {
          console.log("el enemigo recibe el disparo");

          // eliminar el enemigo y el disparo generado cuando colisionan
          this.enemyArr[indiceEnemigo].node.remove();
          this.disparoArr[indicenDisparo].node.remove();
          this.enemyArr.splice(indiceEnemigo, 1);
          this.disparoArr.splice(indicenDisparo, 1);

          /* 
              eachEnemyObj.node.remove()
              eachDisparoObj.node.remove()

              ESTO TENDRÍA LA MISMA FUNCIONALIDAD QUE EL CODIGO DE ARRIBA (LINEAS 70 Y 71)

              */
        }
      });
      // DETECTA LA COLISIÓN
    });
  }

  collitonCheckDisparoEnemigoMandaloriano() {
    // necesito el mandaloriano // this.mandalorianObj
    // necesito el disparo enemigo // this.disparoEnemigoObj
    this.disparoEnemigoArr.forEach((eachDisparoEnemigo) => {
      if (
        this.mandalorianObj.x < eachDisparoEnemigo.x + eachDisparoEnemigo.w &&
        this.mandalorianObj.x + this.mandalorianObj.w > eachDisparoEnemigo.x &&
        this.mandalorianObj.y < eachDisparoEnemigo.y + eachDisparoEnemigo.h &&
        this.mandalorianObj.y + this.mandalorianObj.h > eachDisparoEnemigo.y
      ) {
        console.log("mandaloriano recibe disparo")
        // detecta el impacto del disparo con el mandaloriano
        this.gameOver();
      }
    })
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
        this.gameOver();
      }
    });
  }

  checkIfEnemyLeftGameBox() {
    if (
      this.enemyArr[0] !== undefined &&
      this.enemyArr[0].x < this.enemyArr[0].w - 220
    ) {
      // si en el array hay al menos un elemento y si ese elmento salio del gamebox por la izquierda
      console.log("enemigo saliendo");
      // remueve el elemento (REMOVER DE JS Y DEL DOM)
      this.enemyArr[0].node.remove();
      this.enemyArr.shift(); // esto siginifica eliminalo del array
    }
  }

  checkDisparoLeftGameBox() {
    if (
      this.disparoArr[0] !== undefined &&
      this.disparoArr[0].x > this.disparoArr[0].w + 750
    ) {
      // si en el array hay al menos un elemento y si ese elmento salio del gamebox por la derecha
      console.log("disparo saliendo");
      // remueve el elemento (REMOVER DE JS Y DEL DOM)
      this.disparoArr[0].node.remove();
      this.disparoArr.shift(); // esto siginifica eliminalo del array
    }
  }

  checkDisparoEnemigoLeftGameBox () {
    if (
      this.disparoEnemigoArr[0] !== undefined &&
      this.disparoEnemigoArr[0].x < this.disparoEnemigoArr[0].w - 40
    ) {
      // si en el array hay al menos un elemento y si ese elmento salio del gamebox por la izquierda
      console.log("disparo enemigo saliendo");
      // remueve el elemento (REMOVER DE JS Y DEL DOM)
      this.disparoEnemigoArr[0].node.remove();
      this.disparoEnemigoArr.shift(); // esto siginifica eliminalo del array
    }


  }

  gameLoop() {
    this.mandalorianObj.movimientoHaciaArriba();
    this.mandalorianObj.movimientoHaciaAbajo();

    this.enemyArr.forEach((eachEnemyObj) => {
      eachEnemyObj.automaticMovement();
    });

    this.disparoArr.forEach((eachDisparo) => {
      eachDisparo.movimientoAutomaticoDeDisparar();
    });
    this.disparoEnemigoArr.forEach((eachDisparoEnemigo) => {
      eachDisparoEnemigo.movimientoAutomaticoDeDispararEnemigo();
    });

    this.collitionCheckMandalorianEnemys();
    this.collitionCheckDisparoEnemys();
    this.checkIfEnemyLeftGameBox();
    this.checkDisparoLeftGameBox();
    this.checkDisparoEnemigoLeftGameBox();
    this.collitonCheckDisparoEnemigoMandaloriano();
  }

  start() {
    this.gameIntervalId = window.setInterval(() => {
      // console.log("probando intervalo")
      this.gameLoop();
    }, this.gameIntervalFRecuency);
  } 
  
  gameOver() {
    clearInterval(this.gameIntervalId);
    clearInterval(this.enemysAppearIntervalId);
    clearInterval(this.enemysAppearIntervalId1);
    clearInterval(this.disparoEnemigoIntervalId);

    // ocultamos la pagina de juego
    gameSreenNode.style.display = "none";

    // mostramos la pagina final
    gameOverScreenNode.style.display = "flex";
  }
}
