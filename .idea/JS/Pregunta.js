/**
 * @external
 */
export class Pregunta {

    _textoPregunta
    _listadeOpciones
    /**
     * Crea un objeto de tipo Pregunta.
     * @param {String}  textoPregunta- el texto que tendra la nueva opción.
     * @param {Object} listadeOpciones- El arreglo que continúe las opciones de respuesta a la pregunta.
     * @borrows listadeOpciones esta pensada para ser un objeto de la clase OpcionesRespuesta.js
     */
    constructor(textoPregunta,listadeOpciones) {
         this._textoPregunta = textoPregunta;
         this._listadeOpciones = listadeOpciones;
     }

    /**
     * Get del texto que representa la pregunta correspondiente al objeto.
     * @return {String} _textoPregunta value.
     */
    get textoPregunta() {
        return this._textoPregunta;
    }
    /**
     * Set retorna el  String que representa la pregunta.
     * @param {String} value - asigna el value como nuevo valor.
     */
    set textoPregunta(value) {
        this._textoPregunta = value;
    }

    /**
     * Get objeto que guarda un arreglo de Strings que representan las opciones de de la pregunta
     * @return {Object} _listadeOpciones value.
     */
    get listadeOpciones() {
        return this._listadeOpciones;
    }
    /**
     * Set de Objeto saigana un arreglo de Strings como lista de opciones
     * @param {Object} value - asigna el value como nuevo valor.
     */
    set listadeOpciones(value) {
        this._listadeOpciones = value;
    }

}