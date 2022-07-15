export class OpcionRespuesta {
    _textoOpcion

    constructor(textoOpcion) {
        this._textoOpcion = textoOpcion;

    }


    get textoOpcion() {
        return this._textoOpcion;
    }

    set textoOpcion(value) {
        this._textoOpcion = value;
    }



}