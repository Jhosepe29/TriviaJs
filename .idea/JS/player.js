export class Player{
    _nombre
    _puntos

    constructor(nombre, puntos) {
        this._nombre = nombre;
        this._puntos = puntos;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(value) {
        this._nombre = value;
    }

    get puntos() {
        return this._puntos;
    }

    set puntos(value) {
        this._puntos = value;
    }
}