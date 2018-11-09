

function crearText() {


 
    var textArea1 = document.createElement("textarea");
    var texto = document.createTextNode("Esto es un text area");
    textArea1.appendChild(texto);
    document.getElementById("Dos").appendChild(textArea1);



}


function crearBoton() {


    var boton = document.createElement("button");

    var texto = document.createTextNode("Esto es un Boton");
    boton.appendChild(texto);
    document.getElementById("Cuatro").appendChild(boton);



}

function crearDiv() {


    var Div = document.createElement("div");

    var texto = document.createTextNode("Esto es un Div");
    Div.appendChild(texto);
    document.getElementById("Tres").appendChild(Div);



}
function crearParrafo() {


    var parrafo = document.createElement("p");

    var texto = document.createTextNode("Esto es Parrafo");
    parrafo.appendChild(texto);
    document.getElementById("Uno").appendChild(parrafo);



}