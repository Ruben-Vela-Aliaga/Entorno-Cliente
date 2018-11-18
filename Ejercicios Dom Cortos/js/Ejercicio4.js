document.addEventListener("DOMContentLoaded",cargar);
function cargar(){
    document.getElementById("añadir").addEventListener("click",AñadirTexto)
}
function AñadirTexto(){

    var fila=document.getElementById("fila").value;
    var columna=document.getElementById("columna").value;

    var texto =document.getElementById("texto").value;

    var res=document.getElementById("c"+fila+columna).innerHTML=texto;
}