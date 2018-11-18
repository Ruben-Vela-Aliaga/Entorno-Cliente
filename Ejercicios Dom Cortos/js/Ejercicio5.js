document.addEventListener("DOMContentLoaded",cargar);
function cargar(){
    document.getElementById("botonCuadrado").addEventListener("click",cuadradoNum)
    document.getElementById("half-button").addEventListener("click",mitadNum)
    document.getElementById("botonPorcentaje").addEventListener("click",Porcentajes)
    document.getElementById("botonArea").addEventListener("click",AreaCirculo)

}
function cuadradoNum(){
    var num =document.getElementById("cuadrado").value;
    var res= num*num;
    var parrafo=document.createElement("p");
    var texto=document.createTextNode(res);
    parrafo.appendChild(texto);
    document.getElementById("Solucion").appendChild(parrafo);

}
function mitadNum(){
    var num =document.getElementById("half-input").value;
    var res= num/2;
    var parrafo=document.createElement("p");
    var texto=document.createTextNode(res);
    parrafo.appendChild(texto);
    document.getElementById("Solucion").appendChild(parrafo);
}
function Porcentajes(){
    var porcentaje =document.getElementById("porcentaje1").value;
    var num =document.getElementById("porcentaje2").value;
    var res= (porcentaje/100)*num;
    var parrafo=document.createElement("p");
    var texto=document.createTextNode(res);
    parrafo.appendChild(texto);
    document.getElementById("Solucion").appendChild(parrafo);
}
function AreaCirculo(){
  
    var radio =document.getElementById("area").value;

    var res= (radio*radio)*Math.PI;
    var parrafo=document.createElement("p");
    var texto=document.createTextNode(res);
    parrafo.appendChild(texto);
    document.getElementById("Solucion").appendChild(parrafo);
}