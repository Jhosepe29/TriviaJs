export class Pregunta {
    _textoPregunta
    _listadeOpciones
    constructor(textoPregunta,listadeOpciones) {
         this._textoPregunta = textoPregunta;
         this._listadeOpciones = listadeOpciones;
     }


    get textoPregunta() {
        return this._textoPregunta;
    }

    set textoPregunta(value) {
        this._textoPregunta = value;
    }

    get listadeOpciones() {
        return this._listadeOpciones;
    }

    set listadeOpciones(value) {
        this._listadeOpciones = value;
    }

}