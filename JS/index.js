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
}



// ADD EVENT LISTENER
starBtnNode.addEventListener("click", startGame)
// se pasa la funcion starGame como funcion de callback


//gameBoxNode.gameObj.mandalorianObj.movimiento()

    


