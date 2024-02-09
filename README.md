# Mandalorian

## [Play the game!]

# Descripción

Mandalorian es un juego donde tienes que tratar de eliminar al mayor número de soldados de asalto posible, mientras salvas a los distintos aliados que aparecerán. El juego acaba cuando el Mandaloriano pierde todas sus vidas.

# Funcionalidades

- Puedes mover al personaje hacia arriba (con la flecha hacia arriba) y hacia abajo (con la flecha hacia abajo).
- Disparar pulsando la barra espaciadora
- Cada enemigo que elimines irá sumando puntos a tu Score.
- Cada aliado que elimines restará puntos a tu Score.
- Cada aliado que logre llegar al final sumará puntos a tu Score.
- Cada vez que el Mandaloriano se encuentre con Grogu recibirá una vida adicional.
- Cada impacto con el enemigo o con un disparo enemigo restará una vida al Mandaloriano

# Funcionalidades pendientes

- Crear un jefe final
- Cambiar el aspecto del Mandaloriano conforme avance el juego
- Almacenar Score para mostrarlo en la pantalla de Game Over

# Tecnologías empleadas

- HTML
- CSS
- JAVASCRIPT
- MANIPULACIÓN DE DOM
- CLASES
- JS AUDIO() Y JS IMAGEN ()

# ESTADOS

- Pantalla de inicio
- Pantalla de juego
- Pantalla de Game Over

# Estructura del proyecto 

## index.js

- Elementos de DOM y variables globales
- Funciones principales
    - startGame() 
       - gameObj.start()
       - gameObj.enemysAppear()
       - gameObj.disparoEnemigo()
       - gameObj.aliadosAppear()
       -  gameObj.groguAppear()
    - backToRestart
- AddEventListener

## game.js

- Game ()
    - this.gameIntervalFRecuency;
    - this.mandalorianObj;
    - this.disparoObj;
    - this.enemyObj;
    - this.enemyArr;
    - this.enemyAppearFrecuency1;
    - this.enemyAppearFrecuency2;
    - this.gameIntervalId;
    - this.enemysAppearIntervalId;
    - this.enemysAppearIntervalId1;
    - this.disparoArr;
    - this.disparoEnemigoArr;
    - this.disparoEnemigoIntervalId;
    - this.disparoEnemigoAppearFrecuency;
    - this.aliadosIntervalId;
    - this.aliadosArr;
    - this.aliadosAppearFrecuency;
    - this.score;
    - this.lives; 
    - this.groguAppearIntervalId;
    - this.groguArr;
    - this.groguAppearFrecuency;

- enemysAppear()
- aliadosAppear()
- groguAppear()
- disparar()
- disparoEnemigo()
- collitionCheckDisparoEnemys()
- collitionCheckDisparoMAliado()
- collitonCheckDisparoEnemigoMandaloriano()
- collitionCheckMandalorianEnemys()
- colitionCheckMandalorianoGrogu()
- checkIfEnemyLeftGameBox()
- checkAliadoLeftGameBox()
- checkDisparoLeftGameBox()
- checkDisparoEnemigoLeftGameBox()
- chekGroguLeftGameBox()
- gameLoop()
- start()
- gameOver()

## mandalorian.js

- Mandalorian ()
    - this.x;
    - this.y;
    - this.w;
    - this.h;
    - this.lives;
    - this.node;
    - this.node.src;
    - gameBoxNode.append(this.node);
    - this.node.style.width;
    - this.node.style.height;
    - this.node.style.position; 
    - this.node.style.top; 
    - this.node.style.left; 
    - this.node.style.pointerEvents;
    - this.speed;

-  movimientoHaciaArriba ()
- movimientoHaciaAbajo ()

## enemys.js

- Enemy(type)
    - this.x;
    - this.y;
    - this.w;
    - this.h;
    - this.node;
    - this.type;
    - this.node.src;
    - gameBoxNode.append(this.node);
    - this.node.style.width;
    - this.node.style.height;
    - this.node.style.position; 
    - this.node.style.top; 
    - this.node.style.left; 
    - this.node.style.pointerEvents;
    - this.speed;

- automaticMovement()

## disparo.js

- Disparo(posicionDelMandaloriano)
    - this.x;
    - this.y;
    - this.w;
    - this.h;
    - this.node;
    - this.node.src;
    - gameBoxNode.append(this.node);
    - this.node.style.width;
    - this.node.style.height;
    - this.node.style.position; 
    - this.node.style.top; 
    - this.node.style.left; 
    - this.node.style.pointerEvents;
    - this.speed;

- movimientoAutomaticoDeDisparar ()

## disparoEnemigo.js

- DisparoEnemigo(posicionDelEnemigoy, posicionDelEnemigox)
    - this.x;
    - this.y;
    - this.w;
    - this.h;
    - this.node;
    - this.node.src;
    - gameBoxNode.append(this.node);
    - this.node.style.width;
    - this.node.style.height;
    - this.node.style.position; 
    - this.node.style.top; 
    - this.node.style.left; 
    - this.node.style.pointerEvents;
    - this.speed;

- movimientoAutomaticoDeDispararEnemigo ()

## aliados.js

- Aliados()
    - this.x;
    - this.y;
    - this.w;
    - this.h;
    - this.node;
    - this.type;
    - this.node.src;
    - gameBoxNode.append(this.node);
    - this.node.style.width;
    - this.node.style.height;
    - this.node.style.position; 
    - this.node.style.top; 
    - this.node.style.left; 
    - this.node.style.pointerEvents;
    - this.speed;

- movimientoAliados()

## grogu.js

- Grogu()
    - this.x;
    - this.y;
    - this.w;
    - this.h;
    - this.node;
    - this.node.src;
    - gameBoxNode.append(this.node);
    - this.node.style.width;
    - this.node.style.height;
    - this.node.style.position; 
    - this.node.style.top; 
    - this.node.style.left; 
    - this.node.style.pointerEvents;
    - this.speed;

- movimientoGrogu()





