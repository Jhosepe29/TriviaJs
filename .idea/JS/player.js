/**
 * @external
 */
export class Player{
    _nombre
    _puntos
    /**
     * Crea un OpcionRespesta.
     * @param {String}  nombre- el texto que tendra el nombre del jugador.
     * @param {int} puntos el valor que representara los puntos del jugador en el juego
     */
    constructor(nombre, puntos) {
        this._nombre = nombre;
        this._puntos = puntos;
    }
    /**
     * Get el texto de nombre del jugador _nombre.
     * @return {String} el _nombren .
     */
    get nombre() {
        return this._nombre;
    }
    /**
     * Set del texto de nombre.
     * @param {String} value - asigna el value como String a nombre del jugador.
     */
    set nombre(value) {
        this._nombre = value;
    }
    /**
     * Get el valor de los puntos del jugador _puntos.
     * @return {int} _puntos.
     */
    get puntos() {
        return this._puntos;
    }
    /**
     * Set del texto de nombre.
     * @param {int} value - asigna el value como int a los puntos del jugador.
     */
    set puntos(value) {
        this._puntos = value;
    }
}