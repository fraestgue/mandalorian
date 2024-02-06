// elementos de DOM & variables globales
const preGrameScreenNode = document.querySelector("#pre-game");
const gameSreenNode = document.querySelector("#game-screen");
const gameOverScreenNode = document.querySelector("#gameover-screen")
const starBtnNode = document.querySelector("#start-btn")
const gameBoxNode = document.querySelector("#game-box")
let gameObj; // en la pantalla inicial el juego no existe aun 


// FUNCION PRINCIPAL
function startGame () {
    console.log("clicando")

    // ocultar pre-game screen
    preGrameScreenNode.style.display = "none";

    // mostrar pantalla de juego
    gameSreenNode.style.display = "flex";
    gameObj = new Game () // se liga la class Game

    gameObj.start()
    gameObj.enemysAppear()
    gameObj.disparo()
}



// ADD EVENT LISTENER
starBtnNode.addEventListener("click", startGame)
// se pasa la funcion starGame como funcion de callback


//gameBoxNode.gameObj.mandalorianObj.movimiento()
window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") {
       gameObj.mandalorianObj.movimientoHaciaArriba()
    } else if (event.key === "ArrowDown") {
        gameObj.mandalorianObj.movimientoHaciaAbajo()
    }
   /* if (event.key === "a") {
        gameObj.mandalorianObj.disparoObj.disparar()
        console.log(event.key)
    }*/
    console.log(event.key)
})







// DOS funciones para el personaje: 

// la primera mover hacia arriba (lineas 35 y 36)
// la segunda el movimiento hacia abajo (38 y 39)
    


