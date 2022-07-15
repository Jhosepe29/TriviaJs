let divpregunta = document.querySelector("#divi");
let divOpciones = document.createElement("ul");
divOpciones.id="opciones";

let  opciones = document.createElement("ul");
let opcionA = document.createElement("li");
let textA=document.createTextNode("Esta es la opcion A")
opcionA.appendChild(textA);
let opcionB = document.createElement("li");
let textB=document.createTextNode("Esta es la opcion B")
opcionB.appendChild(textB);
let opcionC = document.createElement("li");
let textC=document.createTextNode("Esta es la opcion C")
opcionC.appendChild(textC);
let opcionD = document.createElement("li");
let textD=document.createTextNode("Esta es la opcion D")
opcionD.appendChild(textD);

divOpciones.append(opcionA,opcionB,opcionC,opcionD);


/*
let radioOPcionA = document.createElement("input");
radioOPcionA.type = "radio";
radioOPcionA.value = "A";

let radioOPcionB = document.createElement("input");
radioOPcionB.type = "radio";
radioOPcionB.value = "B";

let radioOPcionC = document.createElement("input");
radioOPcionC.type = "radio";
radioOPcionC.value = "C";

let radioOPcionD = document.createElement("input");
radioOPcionD.type = "radio";
radioOPcionD.value = "D";
*/



//divOpciones.append(radioOPcionA,radioOPcionB,radioOPcionC,radioOPcionD);
let pregunta = document.createElement("p");
let textP = document.createTextNode("pregunta que ira en el div");

divpregunta.appendChild(pregunta);
pregunta.appendChild(textP);
divpregunta.appendChild(divOpciones);

function agregarPregunta(nivel){

}


