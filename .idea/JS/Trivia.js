export class Trivia{

    constructor(pregunta, jugador, niveldeRonda) {
        this.preguntaL = pregunta;
        this.jugadorL = jugador;
        this.niveldeRondaL = niveldeRonda;
    }


    get pregunta() {
        return this.preguntaL;
    }

    set pregunta(value) {
        this.preguntaL = value;
    }

    get jugador() {
        return this.jugadorL;
    }

    set jugador(value) {
        this.jugadorL = value;
    }

    get niveldeRonda() {
        return this.niveldeRondaL;
    }

    set niveldeRonda(value) {
        this.niveldeRondaL = value;
    }
}

