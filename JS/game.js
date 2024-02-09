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

    this.aliadosIntervalId;
    this.aliadosArr = [];
    this.aliadosAppearFrecuency = 10000;

    this.score = 0;
    this.lives = 3;

    this.groguAppearIntervalId;
    this.groguArr = [];
    this.groguAppearFrecuency = 20000;
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

  aliadosAppear() {
    this.aliadosIntervalId = setInterval(() => {
      let nuevoAliado = new Aliados();
      this.aliadosArr.push(nuevoAliado);
    }, this.aliadosAppearFrecuency);
  }

  groguAppear() {
    this.groguAppearIntervalId = setInterval(() => {
      let nuevoGrogu = new Grogu();
      this.groguArr.push(nuevoGrogu);
      
    }, this.groguAppearFrecuency);
  }

  disparar() {
    let nuevoDisparo = new Disparo(this.mandalorianObj.y);
    this.disparoArr.push(nuevoDisparo);
  }

  disparoEnemigo() {
    this.disparoEnemigoIntervalId = setInterval(() => {
      if (this.enemyArr.length === 0) {
        return; // no hagas nada si no hay elementos en el array
      }
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
    }, this.disparoEnemigoAppearFrecuency);
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

          // eliminar el enemigo y el disparo generado cuando colisionan
          this.enemyArr[indiceEnemigo].node.remove();
          this.disparoArr[indicenDisparo].node.remove();
          this.enemyArr.splice(indiceEnemigo, 1);
          this.disparoArr.splice(indicenDisparo, 1);
          scoreNode.innerText = Number.parseInt(scoreNode.innerText) + 40;

          /* 
              eachEnemyObj.node.remove()
              eachDisparoObj.node.remove()

              ESTO TENDRÍA LA MISMA FUNCIONALIDAD QUE EL CODIGO DE ARRIBA (LINEAS 110 Y 111)

              */
        }
      });
      // DETECTA LA COLISIÓN
    });
  }

  collitionCheckDisparoMAliado() {
    // necesito el disparo del mandaloriano // this.disparoObj
    // necesito cada uno de los aliados // eachAliadoObj
    this.disparoArr.forEach((eachDisparoObj, indicenDisparo) => {
      this.aliadosArr.forEach((eachAliadoObj, indiceAliado) => {
        if (
          eachDisparoObj.x < eachAliadoObj.x + eachAliadoObj.w &&
          eachDisparoObj.x + eachDisparoObj.w >
            eachAliadoObj.x + eachAliadoObj.w / 2 &&
          eachDisparoObj.y < eachAliadoObj.y + eachAliadoObj.h &&
          eachDisparoObj.y + eachDisparoObj.h > eachAliadoObj.y
        ) {
          // eliminar el Aliado y el disparo generado cuando colisionan
          this.aliadosArr[indiceAliado].node.remove();
          this.disparoArr[indicenDisparo].node.remove();
          this.aliadosArr.splice(indiceAliado, 1);
          this.disparoArr.splice(indicenDisparo, 1);
          scoreNode.innerText = Number.parseInt(scoreNode.innerText) - 60;
          dañoAliado.play()

          /* 
              eachAliadoObj.node.remove()
              eachDisparoObj.node.remove()

              ESTO TENDRÍA LA MISMA FUNCIONALIDAD QUE EL CODIGO DE ARRIBA (LINEAS 143 Y 144)

              */
        }
      });
    });
  }

  collitonCheckDisparoEnemigoMandaloriano() {
    // necesito el mandaloriano // this.mandalorianObj
    // necesito el disparo enemigo // this.disparoEnemigoObj
    this.disparoEnemigoArr.forEach(
      (eachDisparoEnemigo, disparoEnemigoIndex) => {
        if (
          this.mandalorianObj.x < eachDisparoEnemigo.x + eachDisparoEnemigo.w &&
          this.mandalorianObj.x + this.mandalorianObj.w >
            eachDisparoEnemigo.x &&
          this.mandalorianObj.y < eachDisparoEnemigo.y + eachDisparoEnemigo.h &&
          this.mandalorianObj.y + this.mandalorianObj.h > eachDisparoEnemigo.y
        ) {
          // detecta el impacto del disparo con el mandaloriano
          // reduce la cantidad de vidas del mandaloriano en 1
          // hacer condicional si las vidas son 0 entonces gamenOver

          this.mandalorianObj.lives -= 1;
          eachDisparoEnemigo.node.remove();
          this.disparoEnemigoArr.splice(disparoEnemigoIndex, 1);

          livesNode.innerText = Number.parseInt(livesNode.innerText) - 1;

          if (this.mandalorianObj.lives === 0) {
            this.gameOver();
            dañoMando.play()
          }
        }
      }
    );
  }

  collitionCheckMandalorianEnemys() {
    this.enemyArr.forEach((eachEnemyObj, enemyIndex) => {
      // necesito el mandalorian // this.mandalorianObj
      // necesito cada uno de los enemys // eachEnemyObj
      if (
        this.mandalorianObj.x < eachEnemyObj.x + eachEnemyObj.w &&
        this.mandalorianObj.x + this.mandalorianObj.w > eachEnemyObj.x &&
        this.mandalorianObj.y < eachEnemyObj.y + eachEnemyObj.h &&
        this.mandalorianObj.y + this.mandalorianObj.h > eachEnemyObj.y
      ) {
        // Collision detected!

        this.mandalorianObj.lives -= 1;
        eachEnemyObj.node.remove();
        this.enemyArr.splice(enemyIndex, 1);
        livesNode.innerText = Number.parseInt(livesNode.innerText) - 1;
        if (this.mandalorianObj.lives === 0) {
          this.gameOver();
          dañoMando.play()
        }
      }
    });
  }

  colitionCheckMandalorianoGrogu() {
    this.groguArr.forEach((eachGrogu, groguIndex) => {
      //necesito al mandaloriano // this.mandalorianObj
      //necesito a Grogu // eachGrogu
      if (
        this.mandalorianObj.x < eachGrogu.x + eachGrogu.w &&
        this.mandalorianObj.x + this.mandalorianObj.w > eachGrogu.x &&
        this.mandalorianObj.y < eachGrogu.y + eachGrogu.h &&
        this.mandalorianObj.y + this.mandalorianObj.h > eachGrogu.y
      ) {
        this.mandalorianObj.lives += 1;
        eachGrogu.node.remove();
        this.groguArr.splice(groguIndex, 1);
        livesNode.innerText = Number.parseInt(livesNode.innerText) + 1;
        groguSound.play();
        this.enemyArr.forEach((eachEnemyObj) => {
          eachEnemyObj.node.remove();
        });
        this.enemyArr.splice(0, this.enemyArr.length)
    
        this.disparoArr.forEach((eachDisparo) => {
          eachDisparo.node.remove();
        });
        this.disparoArr.splice(0, this.disparoArr.length)
    
        this.disparoEnemigoArr.forEach((eachDisparoEnemigo) => {
          eachDisparoEnemigo.node.remove();
        });
        this.disparoEnemigoArr.splice(0, this.disparoEnemigoArr.length)
      }
    });
  }

  checkIfEnemyLeftGameBox() {
    if (
      this.enemyArr[0] !== undefined &&
      this.enemyArr[0].x < this.enemyArr[0].w - 220
    ) {
      // si en el array hay al menos un elemento y si ese elmento salio del gamebox por la izquierda

      // remueve el elemento (REMOVER DE JS Y DEL DOM)
      this.enemyArr[0].node.remove();
      this.enemyArr.shift(); // esto siginifica eliminalo del array
      scoreNode.innerText = Number.parseInt(scoreNode.innerText) - 20;
    }
  }

  checkAliadoLeftGameBox() {
    if (
      this.aliadosArr[0] !== undefined &&
      this.aliadosArr[0].x < this.aliadosArr[0].w - 220
    ) {
      // si en el array hay al menos un elemento y si ese elmento salio del gamebox por la izquierda

      // remueve el elemento (REMOVER DE JS Y DEL DOM)
      this.aliadosArr[0].node.remove();
      this.aliadosArr.shift(); // esto siginifica eliminalo del array
      scoreNode.innerText = Number.parseInt(scoreNode.innerText) + 50;
    }
  }

  checkDisparoLeftGameBox() {
    if (
      this.disparoArr[0] !== undefined &&
      this.disparoArr[0].x > this.disparoArr[0].w + 750
    ) {
      // si en el array hay al menos un elemento y si ese elmento salio del gamebox por la derecha

      // remueve el elemento (REMOVER DE JS Y DEL DOM)
      this.disparoArr[0].node.remove();
      this.disparoArr.shift(); // esto siginifica eliminalo del array
    }
  }

  checkDisparoEnemigoLeftGameBox() {
    if (
      this.disparoEnemigoArr[0] !== undefined &&
      this.disparoEnemigoArr[0].x < this.disparoEnemigoArr[0].w - 40
    ) {
      // si en el array hay al menos un elemento y si ese elmento salio del gamebox por la izquierda

      // remueve el elemento (REMOVER DE JS Y DEL DOM)
      this.disparoEnemigoArr[0].node.remove();
      this.disparoEnemigoArr.shift(); // esto siginifica eliminalo del array
    }
  }

  chekGroguLeftGameBox() {
    if (
      this.groguArr[0] !== undefined &&
      this.groguArr[0].x < this.groguArr[0].w - 45
    ) {
      // si en el array hay al menos un elemento y si ese elmento salio del gamebox por la izquierda

      // remueve el elemento (REMOVER DE JS Y DEL DOM)
      this.groguArr[0].node.remove();
      this.groguArr.shift(); // esto siginifica eliminalo del array
      scoreNode.innerText = Number.parseInt(scoreNode.innerText) + 10;
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

    this.aliadosArr.forEach((eachAliado) => {
      eachAliado.movimientoAliados();
    });

    this.groguArr.forEach((eachGrogu) => {
      eachGrogu.movimientoGrogu();
    });

    this.collitionCheckMandalorianEnemys();
    this.collitionCheckDisparoEnemys();
    this.checkIfEnemyLeftGameBox();
    this.checkDisparoLeftGameBox();
    this.checkDisparoEnemigoLeftGameBox();
    this.collitonCheckDisparoEnemigoMandaloriano();
    this.collitionCheckDisparoMAliado();
    this.checkAliadoLeftGameBox();
    this.colitionCheckMandalorianoGrogu();
    this.chekGroguLeftGameBox();
  }

  start() {
    this.gameIntervalId = window.setInterval(() => {
      this.gameLoop();
    }, this.gameIntervalFRecuency);
  }

  gameOver() {
    clearInterval(this.gameIntervalId);
    clearInterval(this.enemysAppearIntervalId);
    clearInterval(this.enemysAppearIntervalId1);
    clearInterval(this.disparoEnemigoIntervalId);
    clearInterval(this.aliadosIntervalId);
    clearInterval(this.groguAppearIntervalId);

    this.enemyArr.forEach((eachEnemyObj) => {
      eachEnemyObj.node.remove();
    });

    this.disparoArr.forEach((eachDisparo) => {
      eachDisparo.node.remove();
    });

    this.disparoEnemigoArr.forEach((eachDisparoEnemigo) => {
      eachDisparoEnemigo.node.remove();
    });

    this.mandalorianObj.node.remove();

    this.aliadosArr.forEach((eachAliado) => {
      eachAliado.node.remove();
    });

    scoreNode.innerText = this.score;
    livesNode.innerText = this.lives;

    // todos estos remove son para eliminar los objetos y no aparezcan congelados cuando reiniciamos el juego desde gameOver

    // ocultamos la pagina de juego
    gameSreenNode.style.display = "none";

    // mostramos la pagina final
    gameOverScreenNode.style.display = "flex";
  }
}
