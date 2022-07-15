import {Trivia} from './Trivia.js'
import {Pregunta} from './Pregunta.js'
import {OpcionRespuesta} from './OpcionRespuesta.js'
import {Player} from './player.js'

//import {LocalStorageManager} from './LocalStorageManager'

/*Crear div que contendra la pregunta y el nombre del jugador*/
let divContenedor= document.querySelector("#divi");
/*Se crea el div y el h2 que contendran la pregunta*/
let divPregunta = document.createElement("div");
/*Se crea el div y el h2 que contendran las opciones de respuesta a la pregunta*/
let divOpciones = document.createElement("div");
/*Se crea el div que contendra los botones*/
let divBotones = document.createElement("div");
/*h2 que contendra la pregunta*/
let h2Pregunta = document.createElement("p");
/*Creamos el contenedor de la lista*/
let h2Nombreplayer = document.createElement("p");
/*Creamos el contenedor de la lista*/

/*div nombre del jugador*/
let divNombrejugador = document.createElement("div");

/*Crea mos la lista de opciones */
let opcionA = document.createElement("button");
let opcionB = document.createElement("button");
let opcionC = document.createElement("button");
let opcionD = document.createElement("button");
/*Creamos el mensaje del imput*/
let textImpu = document.createElement("p");
/*Creamos el imput donde el usuario ingresara su respuesta*/
let entradaRespuesta = document.createElement("input");
/*Creamos boton de enviar respuesta*/
const botonResponder = document.createElement("button");

let gamerTop;
let nombrejugador;
/*variables del metodo*/
let preguntaText;
let listOpciones;
let respuestaCorrecta;
let question;
let niveldeJuego = 1;
let contador = 1;
let puntosJugador = 0;
/*LocalStorage*/
(()=>{

init();

})();

function init(){
    cargarComponentes();
    cargarlocalStorage();

    if(localStorage.getItem('numerodeJugadores')>1 && niveldeJuego !=1){
        h2Nombreplayer.textContent=("Nombre : "+localStorage.getItem("jugador"+contador)+" puntos :"+
            localStorage.getItem("puntosJugador"+contador));
    }else{
        crearJuagdor();
    }

    cargarPregunta(niveldeJuego);
    h2Nombreplayer.textContent="Nombre : "+nombrejugador+ " Puntos :"+localStorage.getItem("puntosJugador"+contador);
}






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

function crearJuagdor(){
    nombrejugador= prompt('ingrese su nombre');
    h2Nombreplayer.textContent="Nombre : "+nombrejugador +" puntos :"+puntosJugador;
    localStorage.setItem("jugador"+contador,nombrejugador);
    localStorage.setItem("puntosJugador"+contador,0);
    localStorage.setItem("numerodeJugadores",contador);
}

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
        case 1: preguntaText = jsonPreguntas['preguntas'][0]['ciencias'][nivelJuego]['pregunta'];
                opcionATemporal =jsonPreguntas['preguntas'][0]['ciencias'][nivelJuego]['opcionA'];
                opcionBTemporal = jsonPreguntas['preguntas'][0]['ciencias'][nivelJuego]['opcionB'];
                opcionCTemporal = jsonPreguntas['preguntas'][0]['ciencias'][nivelJuego]['opcionC'];
                opcionDTemporal = jsonPreguntas['preguntas'][0]['ciencias'][nivelJuego]['opcionD'];
                respuestaCorrecta =  jsonPreguntas['preguntas'][0]['ciencias'][nivelJuego]['correcta'];
                listOpciones = [opcionATemporal,opcionBTemporal,opcionCTemporal,opcionDTemporal];
                question = new Pregunta(preguntaText,listOpciones);
                console.log(preguntaText);
                console.log(listOpciones);
                pintarPregunta(question,preguntaText);
                break;
        case 2: preguntaText = jsonPreguntas['preguntas'][1]['historia'][nivelJuego]['pregunta'];
                opcionATemporal =jsonPreguntas['preguntas'][1]['historia'][nivelJuego]['opcionA'];
                opcionBTemporal = jsonPreguntas['preguntas'][1]['historia'][nivelJuego]['opcionB'];
                opcionCTemporal = jsonPreguntas['preguntas'][1]['historia'][nivelJuego]['opcionC'];
                opcionDTemporal = jsonPreguntas['preguntas'][1]['historia'][nivelJuego]['opcionD'];
                respuestaCorrecta =  jsonPreguntas['preguntas'][1]['historia'][nivelJuego]['correcta'];
                listOpciones = [opcionATemporal,opcionBTemporal,opcionCTemporal,opcionDTemporal];
                question = new Pregunta(preguntaText,listOpciones);
                 console.log(preguntaText);
                 console.log(listOpciones);
                pintarPregunta(question,preguntaText);

            break;
        case 3: preguntaText = jsonPreguntas['preguntas'][2]['futbol'][nivelJuego]['pregunta'];
                opcionATemporal =jsonPreguntas['preguntas'][2]['futbol'][nivelJuego]['opcionA'];
                opcionBTemporal = jsonPreguntas['preguntas'][2]['futbol'][nivelJuego]['opcionB'];
                opcionCTemporal = jsonPreguntas['preguntas'][2]['futbol'][nivelJuego]['opcionC'];
                opcionDTemporal = jsonPreguntas['preguntas'][2]['futbol'][nivelJuego]['opcionD'];
                respuestaCorrecta =  jsonPreguntas['preguntas'][2]['futbol'][nivelJuego]['correcta'];
                 listOpciones = [opcionATemporal,opcionBTemporal,opcionCTemporal,opcionDTemporal];
                question = new Pregunta(preguntaText,listOpciones);

                 console.log(preguntaText);
                console.log(listOpciones);
                pintarPregunta(question,preguntaText);
            break;
        case 4: preguntaText = jsonPreguntas['preguntas'][3]['geografia'][nivelJuego]['pregunta'];
                opcionATemporal =jsonPreguntas['preguntas'][3]['geografia'][nivelJuego]['opcionA'];
                opcionBTemporal = jsonPreguntas['preguntas'][3]['geografia'][nivelJuego]['opcionB'];
                opcionCTemporal = jsonPreguntas['preguntas'][3]['geografia'][nivelJuego]['opcionC'];
                opcionDTemporal = jsonPreguntas['preguntas'][3]['geografia'][nivelJuego]['opcionD'];
                respuestaCorrecta =  jsonPreguntas['preguntas'][3]['geografia'][nivelJuego]['correcta'];
                 listOpciones = [opcionATemporal,opcionBTemporal,opcionCTemporal,opcionDTemporal];
                question = new Pregunta(preguntaText,listOpciones);
                console.log(preguntaText);
            console.log(listOpciones);
                pintarPregunta(question,preguntaText);
            break;
        case 5: preguntaText = jsonPreguntas['preguntas'][4]['arte'][nivelJuego]['pregunta'];
                opcionATemporal =jsonPreguntas['preguntas'][4]['arte'][nivelJuego]['opcionA'];
                opcionBTemporal = jsonPreguntas['preguntas'][4]['arte'][nivelJuego]['opcionB'];
                opcionCTemporal = jsonPreguntas['preguntas'][4]['arte'][nivelJuego]['opcionC'];
                opcionDTemporal = jsonPreguntas['preguntas'][4]['arte'][nivelJuego]['opcionD'];
                respuestaCorrecta =  jsonPreguntas['preguntas'][4]['arte'][nivelJuego]['correcta'];
                listOpciones = [opcionATemporal,opcionBTemporal,opcionCTemporal,opcionDTemporal];
                question = new Pregunta(preguntaText,listOpciones);
                console.log(preguntaText);
            console.log(listOpciones);
                pintarPregunta(question,preguntaText);
            break;
        default: console.log("Algo salio mal");
        break;
    }
}

function pintarPregunta(question,preguntaText){
    console.log(question._textoPregunta);
    h2Pregunta.textContent=preguntaText;
    //h2Pregunta.append(question._textoPregunta);

    /*llenamos las opciones*/

    console.log((question._listadeOpciones[0]));

    opcionA.textContent=("A. "+question._listadeOpciones[0]);
    opcionB.textContent=("B. "+question._listadeOpciones[1]);
    opcionC.textContent=("C. "+question._listadeOpciones[2]);
    opcionD.textContent=("D. "+question._listadeOpciones[3]);
    //console.log(("A. "+question._listadeOpciones[0]));


}

function cargarComponentes(){

    divPregunta.id = "divPregunta";
    divPregunta.className = "Contenedor";
    divNombrejugador.id = "divnombre";



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



    h2Pregunta.id = "h2Pregunta";
    h2Nombreplayer.id = "pPlayer"

    divOpciones.id="divOpciones"
    divOpciones.className = "Contenedor";

    divBotones.id="divBoton"


    textImpu.textContent="seleccione la respuesta respuestaCorrecta"
    divBotones.append(opcionA);
    divBotones.append(opcionB);
    divBotones.append(opcionC);
    divBotones.append(opcionD);


    /*Agregamos el mesaje imput al div opciones*/
    divOpciones.appendChild(textImpu);
    divOpciones.append(divBotones);


     /*agregamos boton al div opciones*/
    divNombrejugador.appendChild(h2Nombreplayer);


    divPregunta.appendChild(divNombrejugador);
    divPregunta.appendChild(h2Pregunta);
    divContenedor.appendChild(divPregunta);
    divContenedor.appendChild(divOpciones);

}

function generaraleatorio(topeSuperio,topeIngerior){
    return Math.floor(Math.random()*(topeSuperio-topeIngerior))+ topeIngerior;
}

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
        h2Nombreplayer.textContent="Nombre : "+nombrejugador+ " Puntos"+ puntosActuales;

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
        h2Nombreplayer.textContent="Nombre : "+nombrejugador+ " Puntos"+ puntosActuales;
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
        h2Nombreplayer.textContent="Nombre : "+nombrejugador+ " Puntos"+ puntosActuales;
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
        h2Nombreplayer.textContent="Nombre : "+nombrejugador+ " Puntos"+ puntosActuales;
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