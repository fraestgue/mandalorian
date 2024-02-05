class Game {
    // aqui estaran todas las propiedades (elementos) del juego

    constructor () {
        this.gameIntervalFRecuency = Math.round(1000 / 60); // 60fps o 60 veces por segundo. Recomendado no tocar

        // el mandaloriano (el Nodo)
        this.mandalorianObj = new Mandaloriano();

        this.enemyArr = [];
        this.enemyAppearFrecuency = 2000;


        this.gameIntervalId; // se deja vacio al principio, luego se alamacena el Id cuando empieza el intervalo
        this.enemysAppearIntervalId;
    }

    // MÉTODOS

    enemysAppear () {


        this.enemysAppearIntervalId = setInterval (() => {
            let positionAppear = Math.random() * 600;
        })
    }









}