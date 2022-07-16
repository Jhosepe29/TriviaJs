/**
 * @exports
 */

import {Pregunta} from './Pregunta.js'
import {OpcionRespuesta} from './OpcionRespuesta.js'
import {Player} from './player.js'

//import {LocalStorageManager} from './LocalStorageManager'

/**@summary
 * Trivia play es un divertido juego de pregunta dividido por categorías de conocimiento
 * que te retaran a medida que avances por sus niveles ya que aumentara su dificultad.
 * Por su propiedad y categoría y preguntas aleatorias ninguna ronda es igual a otra.
 * Anímate a jugar y aprender.
 * Este es un software desarrollado bajo las tres c.
 * Compromiso.
 * Calidez.
 * Cansancio.
 *
 * @global
 * Se definen los componentes HTML y se guardan en variables para su posterior uso.
 *@function empleando document.createElement
 * ***/
/*Se optiene el vinculo con el HTML*/
let divContenedor= document.querySelector("#divi");
/*Se crea el div que contendran la pregunta*/
let divPregunta = document.createElement("div");
/*Se crea el div que contendran las opciones de respuesta a la pregunta*/
let divOpciones = document.createElement("div");
/*Se crea el div que contendra los botones*/
let divBotones = document.createElement("div");
/*p que contendra la pregunta*/
let pPregunta = document.createElement("p");
/*Creamos el p para el nombre y los puntos del jugador*/
let pNombreyPuntos = document.createElement("p");
/*div nombre del jugador*/
let divNombrejugador = document.createElement("div");
/*Creamos la lista de opciones con botones */
let opcionA = document.createElement("button");
let opcionB = document.createElement("button");
let opcionC = document.createElement("button");
let opcionD = document.createElement("button");
/*Creamos el mensaje del imput*/
let textoMensajeOpciones = document.createElement("p");
/*Creamos boton de enviar respuesta*/
const botonResponder = document.createElement("button");


/**
 * @enum
 * @global
 * Se definen Variables tales como un contador que llevara el numero
 * de jugadores que han jugado el juego, nivel que guardara la ronda
 * y se usara como parámetro en una función y otra que se usaran en
 * toda la aplicación con nombreJugador, textoPregunta y listadeOpciones.
 * */
/*variables del metodo*/
let nombrejugador;
let textodelaPregunta;
let listadeOpciones;
let respuestaCorrecta;
let question;
let niveldeJuego = 1;
let contador = 1;
let puntosJugador = 0;
/*LocalStorage*/
/**
  * @function
 * * Es la función tipo flecha auto llamada que llama el método ini para que se
 * ejecuto de primero en la aplicación.
 */
(()=>{

init();

})();
/**
  * @function
 * Es la función que llama e inicializa la aplicación hace el llamado en el orden
 * de ejecución cargando primero las preguntas la localstorage luego los componentes
 * luego pidiendo el usuario final mente pintando la pregunta correspondientes.
 */
function init(){
    cargarComponentes();
    cargarlocalStorage();

    if(localStorage.getItem('numerodeJugadores')>1 && niveldeJuego !=1){
        pNombreyPuntos.textContent=("Nombre : "+localStorage.getItem("jugador"+contador)+" puntos :"+
            localStorage.getItem("puntosJugador"+contador));
    }else{
        crearJuagdor();
    }

    cargarPregunta(niveldeJuego);
    pNombreyPuntos.textContent="Nombre : "+nombrejugador+ " Puntos :"+localStorage.getItem("puntosJugador"+contador);
} /**
 * Preguntas es un JSON que contiene veinticinco preguntas divididas en cinco categorías
 * ciencia, historia, futbol, geografía y arte
 * @enum {JSON} preguntas
 * @function
 * sera cargada en la funcion cargarlocalStorage al localstorage del navegador.
 */
function cargarlocalStorage() {

    let jsonPreguntas = {
        preguntas: [
            {
                ciencias: [
                    {
                        pregunta: "¿Según su forma de alimentarse, consideramos a los cerdos?",
                        opcionA:"Herbívoros",
                        opcionB:"Carnívoros",
                        opcionC:"Omnívoros",
                        opcionD:"veganos",
                        correcta: "C"
                    },
                    {
                        pregunta: "¿Cómo se clasifican los animales según tengan columna vertebral o no?",
                        opcionA:"vivíparos",
                        opcionB:"Animales vertebrados y animales invertebrados",
                        opcionC:"Animales carnívoros, herbívoros u omnívoros",
                        opcionD:"ninguna de las anteriores",
                        correcta: "B"
                    },
                    {
                        pregunta: "¿Cómo se oxigena el cuerpo humano durante la respiración?",
                        opcionA:"En los pulmones el oxígeno inspirado pasa a la sangre",
                        opcionB:"Los pulmones aumentan el oxígeno que tiene el aire inspirado",
                        opcionC:"Los pulmones almacenan el oxígeno que se está inspirando",
                        opcionD:"En los pulmones el dióxido de carbono inspirado se transforma en oxígeno",
                        correcta: "A"
                    },
                    {
                        pregunta: "De acuerdo al modelo cinético molecular de los gases, ¿por qué al calentar el aire contenido en un globo, aumenta de tamaño?",
                        opcionA:"Porque aumenta la velocidad de las partículas de aire",
                        opcionB:"Porque aumenta el tamaño de las partículas de aire",
                        opcionC:"Porque aumenta la cantidad de partículas de aire",
                        opcionD:"Porque aumenta la masa de las partículas de aire",
                        correcta: "A"
                    },
                    {
                        pregunta: "    En una especie de planta el color rojo de los pétalos de las flores es dominante sobre el color blanco." +
                            " Al cruzar una planta heterocigota de flores rojas con una planta de flores blancas, ¿cuál será la proporción de su descendencia?",
                        opcionA:"100% de plantas con flores rojas",
                        opcionB:"75% de plantas con flores rojas",
                        opcionC:"25% de plantas con flores blancas",
                        opcionD:"50% de plantas con flores blancas",
                        correcta: "C"
                    }
                ]
            },

            {
                historia: [
                    {
                        pregunta: "¿De qué nacionalidad era Juana de Arco?",
                        opcionA:"Inglesa",
                        opcionB:"Italiana",
                        opcionC:"Francesa",
                        opcionD:"Española",
                        correcta: "C"
                    },
                    {
                        pregunta: "¿Qué famoso filósofo fue maestro de Alejandro Magno durante cinco años?",
                        opcionA:"Sócrates",
                        opcionB:"Aristóteles",
                        opcionC:"Platón",
                        opcionD:"Eracles",
                        correcta: "B"
                    },
                    {
                        pregunta: "¿Quién fue el último zar de Rusia?",
                        opcionA:"Nicolas II",
                        opcionB:"Pedro I el Grande",
                        opcionC:"Alejandro II",
                        opcionD:"Lenny",
                        correcta: "A"
                    },
                    {
                        pregunta: "¿Qué hecho inició la Segunda Guerra Mundial?",
                        opcionA:"Alemania invadió Polonia",
                        opcionB:"El asesinato del archiduque Francisco Fernando",
                        opcionC:"Hitler invadió Austria",
                        opcionD:"Murio un soldado aleman",
                        correcta: "A"
                    },
                    {
                        pregunta: "¿Dónde se han encontrado principalmente pinturas del período Paleolítico?",
                        opcionA:"No existen pinturas procedentes del Peleolítico",
                        opcionB:"En vasijas decoradas",
                        opcionC:"En arboles",
                        opcionD:"En cuevas",
                        correcta: "D"
                    }
                ]
            },
            {
                futbol: [
                    {
                        pregunta: "¿Qué selección ganó la Copa Mundial de Fútbol en Francia 98?",
                        opcionA:"Alemania",
                        opcionB:"Brasil",
                        opcionC:"Francia",
                        opcionD:"Argentina",
                        correcta: "C"
                    },
                    {
                        pregunta: "¿Cuántos jugadores componen un equipo de rugby?",
                        opcionA:"11",
                        opcionB:"20",
                        opcionC:"16",
                        opcionD:"15",
                        correcta: "D"
                    },
                    {
                        pregunta: "¿En qué país se inventó el voleibol?",
                        opcionA:"Estados unidos",
                        opcionB:"Venezuela",
                        opcionC:"Reino unidos",
                        opcionD:"Francia",
                        correcta: "A"
                    },
                    {
                        pregunta: "¿Quién ganó cuatro mundiales consecutivos de Fórmula 1?",
                        opcionA:"Varon Sheld",
                        opcionB:"juan Pablo Montoya",
                        opcionC:"sebastian Vettel",
                        opcionD:"Lugy Tornel",
                        corrcta: "C"
                    },
                    {
                        pregunta: "¿Cuántos títulos de motociclismo ha conseguido Valentino Rossi?",
                        opcionA:"5",
                        opcionB:"3",
                        opcionC:"1",
                        opcionD:"9",
                        correcta: "D"
                    }
                ]
            },
            {
                geografia: [
                    {
                        pregunta: "¿Cuál es la capital de Turquía?",
                        opcionA:"marypol",
                        opcionB:"Kaukaso",
                        opcionC:"Ankara",
                        opcionD:"Santask",
                        correcta: "C"
                    },
                    {
                        pregunta: "¿Cuál es el nombre del desierto de México?",
                        opcionA:"Sonora",
                        opcionB:"desierto tuxclan",
                        opcionC:"Pintaclau",
                        opcionD:"Azteson",
                        correcta: "A"
                    },
                    {
                        pregunta: "¿En qué isla italiana está Palermo?",
                        opcionA:"Suriname",
                        opcionB:"Bollonia",
                        opcionC:"Sicilia",
                        opcionD:"Caucaso",
                        correcta: "C"
                    },
                    {
                        pregunta: "¿Cuál es el estado más grande de los Estados Unidos?",
                        opcionA:"California",
                        opcionB:"New york",
                        opcionC:"Florida",
                        opcionD:"Alaska",
                        correcta: "D"
                    },
                    {
                        pregunta: "¿Cuál es el río más largo de Europa?",
                        opcionA:"Nilo",
                        opcionB:"Magdalena",
                        opcionC:"Volga",
                        opcionD:"Kairo",
                         correcta: "D"
                    }
                ]
            },

            {
                arte: [
                    {
                        pregunta: "¿pintó \"La Gioconda\"?",
                        opcionA:"Leonardo da vinci",
                        opcionB:"Tizano",
                        opcionC:"Miguel angel",
                        opcionD:"Pablo Picasso",
                        correcta: "A"
                    },
                    {
                        regunta: "¿como se llama este pintor que se cortó la oreja?",
                        opcionA:"Paul Cezanne",
                        opcionB:"Salvador Dali",
                        opcionC:"Vincent van gogh",
                        opcionD:"Herctor Herrera",
                        correcta: "C"
                    },
                    {
                        pregunta: "¿Cuál es el nombre de este famosísimo cuadro de Edvard Munch?",
                        opcines: ["El fantasma", "El grito",
                            "Mundo azul", "El hombrea"],
                        correcta: "B"
                    },
                    {
                        pregunta: "¿Quién de ellos NO fue un muralista mexicano?",
                        opcionA:"Pedro Lira",
                        opcionB:"Diego Rivera",
                        opcionC:"David Alfaro Siqueiros",
                        opcionD:"Jose Clemente Orozco",
                        correcta: "A"
                    },
                    {
                        pregunta: "¿Quién pintó esto la Capilla Sixtina de El Vaticano?",
                        opcionA:"Francisco de Goya",
                        opcionB:"Cravaggio",
                        opcionC:"Claude Monet",
                        opcionD:"Miguel Angel",
                        correcta: "D"
                    }
                ]

            }
        ]
    }

    localStorage.setItem("jsonPregunta", JSON.stringify(jsonPreguntas));

}
/**
 *
 * @function
 * Crea el jugador inicial pidiendo a través de la función prompt el nombre del jugador
 * e iniciando sus puntos en cero. También carga los datos a localstorage del navegador. .
 */
function crearJuagdor(){
    nombrejugador= prompt('ingrese su nombre');
    pNombreyPuntos.textContent="Nombre : "+nombrejugador +" puntos :"+puntosJugador;
    localStorage.setItem("jugador"+contador,nombrejugador);
    localStorage.setItem("puntosJugador"+contador,0);
    localStorage.setItem("numerodeJugadores",contador);
}
 /**
 * @param {int} nivel Es el parámetro que representa el nivel actual del juego.
 * @functionLa función cargarPregunta toma el nivel que le pasa como parámetro
 * para saber la dificulta de la pregunta y genere un numero aleatorio con
 * la función Random para escoger la categoría.
 * sera cargada en la funcion cargarlocalStorage al localstorage del navegador.
 * */
function cargarPregunta(nivel){
    let nivelJuego = nivel-1;
    let jsonToString = window.localStorage.getItem("jsonPregunta");

    let opcionATemporal;
    let opcionBTemporal;
    let opcionCTemporal;
    let opcionDTemporal;


    //console.log(jsonToString);

    let jsonPreguntas = JSON.parse(jsonToString);
    console.log(typeof (jsonPreguntas));

    let categoriaAleatoria = generaraleatorio(5,1);
    console.log(categoriaAleatoria);



    switch (categoriaAleatoria){
        case 1: textodelaPregunta = jsonPreguntas['preguntas'][0]['ciencias'][nivelJuego]['pregunta'];
                opcionATemporal =jsonPreguntas['preguntas'][0]['ciencias'][nivelJuego]['opcionA'];
                opcionBTemporal = jsonPreguntas['preguntas'][0]['ciencias'][nivelJuego]['opcionB'];
                opcionCTemporal = jsonPreguntas['preguntas'][0]['ciencias'][nivelJuego]['opcionC'];
                opcionDTemporal = jsonPreguntas['preguntas'][0]['ciencias'][nivelJuego]['opcionD'];
                respuestaCorrecta =  jsonPreguntas['preguntas'][0]['ciencias'][nivelJuego]['correcta'];
                listadeOpciones = [opcionATemporal,opcionBTemporal,opcionCTemporal,opcionDTemporal];
                question = new Pregunta(textodelaPregunta,listadeOpciones);
                console.log(textodelaPregunta);
                console.log(listadeOpciones);
                pintarPregunta(question,textodelaPregunta);
                break;
        case 2: textodelaPregunta = jsonPreguntas['preguntas'][1]['historia'][nivelJuego]['pregunta'];
                opcionATemporal =jsonPreguntas['preguntas'][1]['historia'][nivelJuego]['opcionA'];
                opcionBTemporal = jsonPreguntas['preguntas'][1]['historia'][nivelJuego]['opcionB'];
                opcionCTemporal = jsonPreguntas['preguntas'][1]['historia'][nivelJuego]['opcionC'];
                opcionDTemporal = jsonPreguntas['preguntas'][1]['historia'][nivelJuego]['opcionD'];
                respuestaCorrecta =  jsonPreguntas['preguntas'][1]['historia'][nivelJuego]['correcta'];
                listadeOpciones = [opcionATemporal,opcionBTemporal,opcionCTemporal,opcionDTemporal];
                question = new Pregunta(textodelaPregunta,listadeOpciones);
                 console.log(textodelaPregunta);
                 console.log(listadeOpciones);
                pintarPregunta(question,textodelaPregunta);

            break;
        case 3: textodelaPregunta = jsonPreguntas['preguntas'][2]['futbol'][nivelJuego]['pregunta'];
                opcionATemporal =jsonPreguntas['preguntas'][2]['futbol'][nivelJuego]['opcionA'];
                opcionBTemporal = jsonPreguntas['preguntas'][2]['futbol'][nivelJuego]['opcionB'];
                opcionCTemporal = jsonPreguntas['preguntas'][2]['futbol'][nivelJuego]['opcionC'];
                opcionDTemporal = jsonPreguntas['preguntas'][2]['futbol'][nivelJuego]['opcionD'];
                respuestaCorrecta =  jsonPreguntas['preguntas'][2]['futbol'][nivelJuego]['correcta'];
                 listadeOpciones = [opcionATemporal,opcionBTemporal,opcionCTemporal,opcionDTemporal];
                question = new Pregunta(textodelaPregunta,listadeOpciones);

                 console.log(textodelaPregunta);
                console.log(listadeOpciones);
                pintarPregunta(question,textodelaPregunta);
            break;
        case 4: textodelaPregunta = jsonPreguntas['preguntas'][3]['geografia'][nivelJuego]['pregunta'];
                opcionATemporal =jsonPreguntas['preguntas'][3]['geografia'][nivelJuego]['opcionA'];
                opcionBTemporal = jsonPreguntas['preguntas'][3]['geografia'][nivelJuego]['opcionB'];
                opcionCTemporal = jsonPreguntas['preguntas'][3]['geografia'][nivelJuego]['opcionC'];
                opcionDTemporal = jsonPreguntas['preguntas'][3]['geografia'][nivelJuego]['opcionD'];
                respuestaCorrecta =  jsonPreguntas['preguntas'][3]['geografia'][nivelJuego]['correcta'];
                 listadeOpciones = [opcionATemporal,opcionBTemporal,opcionCTemporal,opcionDTemporal];
                question = new Pregunta(textodelaPregunta,listadeOpciones);
                console.log(textodelaPregunta);
            console.log(listadeOpciones);
                pintarPregunta(question,textodelaPregunta);
            break;
        case 5: textodelaPregunta = jsonPreguntas['preguntas'][4]['arte'][nivelJuego]['pregunta'];
                opcionATemporal =jsonPreguntas['preguntas'][4]['arte'][nivelJuego]['opcionA'];
                opcionBTemporal = jsonPreguntas['preguntas'][4]['arte'][nivelJuego]['opcionB'];
                opcionCTemporal = jsonPreguntas['preguntas'][4]['arte'][nivelJuego]['opcionC'];
                opcionDTemporal = jsonPreguntas['preguntas'][4]['arte'][nivelJuego]['opcionD'];
                respuestaCorrecta =  jsonPreguntas['preguntas'][4]['arte'][nivelJuego]['correcta'];
                listadeOpciones = [opcionATemporal,opcionBTemporal,opcionCTemporal,opcionDTemporal];
                question = new Pregunta(textodelaPregunta,listadeOpciones);
                console.log(textodelaPregunta);
            console.log(listadeOpciones);
                pintarPregunta(question,textodelaPregunta);
            break;
        default: console.log("Algo salio mal");
        break;
    }
}
 /**
 * @param {Object} question Objeto de tipo pregunta que es generado en el metodo
 *  cargarPregunta.
 * @param {String} preguntaText+
 * @functionLa función cargarPregunta toma el nivel que le pasa como parámetro
 * para saber la dificulta de la pregunta y genere un numero aleatorio con
 * la función Random para escoger la categoría.
 * sera cargada en la funcion cargarlocalStorage al localstorage del navegador.
 * */
function pintarPregunta(question,preguntaText){
    console.log(question._textoPregunta);
    pPregunta.textContent=preguntaText;


    /*llenamos las opciones*/

    console.log((question._listadeOpciones[0]));

    opcionA.textContent=("A. "+question._listadeOpciones[0]);
    opcionB.textContent=("B. "+question._listadeOpciones[1]);
    opcionC.textContent=("C. "+question._listadeOpciones[2]);
    opcionD.textContent=("D. "+question._listadeOpciones[3]);
    //console.log(("A. "+question._listadeOpciones[0]));


}
/**
 *
 * @function
 * Es la función que toma el div inicial del HTML, agrega atributos como id, class
 * a los diferentes componentes del aplicativo tales como div, botones, p..
 */
function cargarComponentes(){

    divPregunta.id = "divPregunta";
    divPregunta.className = "Contenedor";
    divNombrejugador.id = "divnombre";


/**
 * se agrega el evento click a los botones,Se agregan las funciones que responderán
 * al evento para validar la respuesta escogida por el usuario.
 * @event
 * */
    opcionA.id="botonopcion";
    opcionA.className = "boton1";
    opcionA.addEventListener("click",escorecataA);

    opcionB.id="botonopcion";
    opcionB.className = "boton1";
    opcionB.addEventListener("click",escorecataB)

    opcionC.id="botonopcion";
    opcionC.className = "boton1";
    opcionC.addEventListener("click",escorecataC)

    opcionD.id="botonopcion";
    opcionD.className = "boton1";
    opcionD.addEventListener("click",escorecataD)



    pPregunta.id = "pPregunta";
    pNombreyPuntos.id = "pPlayer"

    divOpciones.id="divOpciones"
    divOpciones.className = "Contenedor";

    divBotones.id="divBoton"


    textoMensajeOpciones.textContent="seleccione la respuesta respuestaCorrecta"
    divBotones.append(opcionA);
    divBotones.append(opcionB);
    divBotones.append(opcionC);
    divBotones.append(opcionD);


    /*Agregamos el mesaje imput al div opciones*/
    divOpciones.appendChild(textoMensajeOpciones);
    divOpciones.append(divBotones);


     /*agregamos boton al div opciones
     * */
    divNombrejugador.appendChild(pNombreyPuntos);


    divPregunta.appendChild(divNombrejugador);
    divPregunta.appendChild(pPregunta);
    divContenedor.appendChild(divPregunta);
    divContenedor.appendChild(divOpciones);

}
/**
 * Create a point.
 * @param {number} topeSuperio - es el rango superor que no ira incluido en generazion de numeros aletorios.
 * @param {number} topeIngerior - un numero que reprersenta el valor minimo del rango a generar (si va incluido).
 */
function generaraleatorio(topeSuperio,topeIngerior){
    return Math.floor(Math.random()*(topeSuperio-topeIngerior))+ topeIngerior;
}

/**
  * @function
 * @description
 * Es la función que responderá si el usuario da clic en el botón A y validara
 * si la opción A es la respuesta correcta a la pregunta actual del sistema.
 * Haciendo el proceso de sumar los puntos en caso de acertar o de guardar los
 * datos y terminar el juego en caso de fallar
 *  todo esto con sus respectivas alertas.
 */
function escorecataA(){
    if('A' === respuestaCorrecta){
        alert("felicidade");

        let puntosActuales = localStorage.getItem("puntosJugadores"+contador);

            switch (niveldeJuego){
                case 1: puntosActuales += 100;
                        break;
                case 2: puntosActuales += 200;
                    break;
                case 3: puntosActuales += 300;
                    break;
                case 4: puntosActuales += 400;
                    break;
                case 5: puntosActuales += 500;
                    break;
            }

        niveldeJuego++;

        localStorage.setItem("puntosJugador"+contador,puntosActuales);
        pNombreyPuntos.textContent="Nombre : "+nombrejugador+ " Puntos: "+ puntosActuales;

        if(niveldeJuego<=5){
            cargarPregunta(niveldeJuego);
            console.log("esta entrando al if")
        }
        if(niveldeJuego==5){
            alert("Hasganado el juego")
            crearJuagdor();
        }
        return;
    }
    puntosJugador = localStorage.getItem("puntosJugador"+contador);
    alert("Opp!! La respuesta correcta era la "+ respuestaCorrecta);
    contador++;
    localStorage.setItem("jugador"+contador,nombrejugador);
    localStorage.setItem("puntosJugador"+contador,puntosJugador);
    localStorage.setItem("numerodeJugadores",contador);
    niveldeJuego=1;
    init();
}
/**
 * @function
 * @description
 * Es la función que responderá si el usuario da clic en el botón B y validara
 * si la opción B es la respuesta correcta a la pregunta actual del sistema.
 * Haciendo el proceso de sumar los puntos en caso de acertar o de guardar los
 * datos y terminar el juego en caso de fallar
 *  todo esto con sus respectivas alertas.
 */
function escorecataB(){
    if('B' === respuestaCorrecta){
        alert("felicidade");

        let puntosActuales = localStorage.getItem("puntosJugadores"+contador);

        switch (niveldeJuego){
            case 1: puntosActuales += 100;
                break;
            case 2: puntosActuales += 200;
                break;
            case 3: puntosActuales += 300;
                break;
            case 4: puntosActuales += 400;
                break;
            case 5: puntosActuales += 500;
                break;
        }

        niveldeJuego++;

        localStorage.setItem("puntosJugador"+contador,puntosActuales);
        pNombreyPuntos.textContent="Nombre : "+nombrejugador+ " Puntos: "+ puntosActuales;
        if(niveldeJuego<=5){
            cargarPregunta(niveldeJuego);
            console.log("esta entrando al if")
        }
        if(niveldeJuego==5){
            alert("Hasganado el juego")
            crearJuagdor();
        }
        return;
    }
    let puntos = localStorage.getItem("puntosJugador"+contador);
    alert("Opp!! La respuesta correcta era la "+ respuestaCorrecta);
    contador++;
    localStorage.setItem("jugador"+contador,nombrejugador);
    localStorage.setItem("puntosJugador"+contador,puntos);
    localStorage.setItem("numerodeJugadores",contador);
    niveldeJuego=1;
    init();
}
/**
 * @function
 * @description
 * Es la función que responderá si el usuario da clic en el botón C y validara
 * si la opción C es la respuesta correcta a la pregunta actual del sistema.
 * Haciendo el proceso de sumar los puntos en caso de acertar o de guardar los
 * datos y terminar el juego en caso de fallar
 *  todo esto con sus respectivas alertas.
 */
function escorecataC(){
    if('C' === respuestaCorrecta){
        alert("felicidade");

        let puntosActuales = localStorage.getItem("puntosJugadores"+contador);

        switch (niveldeJuego){
            case 1: puntosActuales += 100;
                break;
            case 2: puntosActuales += 200;
                break;
            case 3: puntosActuales += 300;
                break;
            case 4: puntosActuales += 400;
                break;
            case 5: puntosActuales += 500;
                break;
        }

        niveldeJuego++;

        localStorage.setItem("puntosJugador"+contador,puntosActuales);
        pNombreyPuntos.textContent="Nombre : "+nombrejugador+ " Puntos: "+ puntosActuales;
        if(niveldeJuego<=5){
            cargarPregunta(niveldeJuego);
            console.log("esta entrando al if")
        }
        if(niveldeJuego==5){
            alert("Hasganado el juego");
            crearJuagdor();
        }
        return;
    }
    let puntos = localStorage.getItem("puntosJugador"+contador);
    alert("Opp!! La respuesta correcta era la "+ respuestaCorrecta);
    contador++;
    localStorage.setItem("jugador"+contador,nombrejugador);
    localStorage.setItem("puntosJugador"+contador,puntos);
    localStorage.setItem("numerodeJugadores",contador);
    niveldeJuego=1;
    init();

}
/**
 * @function
 * @description
 * Es la función que responderá si el usuario da clic en el botón D y validara
 * si la opción D es la respuesta correcta a la pregunta actual del sistema.
 * Haciendo el proceso de sumar los puntos en caso de acertar o de guardar los
 * datos y terminar el juego en caso de fallar
 *  todo esto con sus respectivas alertas.
 */
function escorecataD(){
    if('D' === respuestaCorrecta){
        alert("felicidade");

        let puntosActuales = localStorage.getItem("puntosJugadores"+contador);

        switch (niveldeJuego){
            case 1: puntosActuales += 100;
                break;
            case 2: puntosActuales += 200;
                break;
            case 3: puntosActuales += 300;
                break;
            case 4: puntosActuales += 400;
                break;
            case 5: puntosActuales += 500;
                break;
        }

        niveldeJuego++;

        localStorage.setItem("puntosJugador"+contador,puntosActuales);
        pNombreyPuntos.textContent="Nombre : "+nombrejugador+ " Puntos: "+ puntosActuales;
        if(niveldeJuego<=5){
            cargarPregunta(niveldeJuego);
            console.log("esta entrando al if");
        }
        if(niveldeJuego==5){
            alert("Hasganado el juego");
            crearJuagdor();
        }
        return;
    }
    let puntos = localStorage.getItem("puntosJugador"+contador);
    alert("Opp!! La respuesta correcta era la "+ respuestaCorrecta);
    niveldeJuego=1;
    contador++;
    localStorage.setItem("jugador"+contador,nombrejugador);
    localStorage.setItem("puntosJugador"+contador,puntos);
    localStorage.setItem("numerodeJugadores",contador);
    init();

}