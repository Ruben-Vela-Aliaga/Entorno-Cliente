


function Posiciones(event){


      var x = event.clientX;
      var y = event.clientY;

      var Posicion =document.getElementById("Coordenadas");
      Posicion.innerHTML= "X :"+x+" Y:"+y;

}
function cargar(){
    document.getElementById("Coordenadas").addEventListener("click" , Posiciones);
}

document.addEventListener("DOMContentLoaded",cargar);