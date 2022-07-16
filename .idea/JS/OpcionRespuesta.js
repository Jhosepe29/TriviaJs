/**
 * @external
 */
export class OpcionRespuesta {
    _textoOpcion
    /**
     * Crea un OpcionRespesta.
     * @param {String}  textoOpcion- el texto que tendra la nueva opción.
     */
    constructor(textoOpcion) {
        this._textoOpcion = textoOpcion;

    }
    /**
     * Get el texto de opción _texoOpcion.
     * @return {String} el _textoOpcion .
     */
    get textoOpcion() {
        return this._textoOpcion;
    }
    /**
     * Set del texto de opcion.
     * @param {String} value - asigna el value como nuevo valor.
     */
    set textoOpcion(value) {
        this._textoOpcion = value;
    }



}