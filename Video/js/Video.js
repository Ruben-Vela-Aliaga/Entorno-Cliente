var count = 0.5;
var maxVolumen = 1;
var minVolumen = 0;
var clicks = 0;
var Tiempo = 10;
var intervalo;

var j=0;
var valorMax=1000;
function aumentar(){
    
    document.getElementById("valor").innerHTML=j;
    document.getElementById("barra").setAttribute('value',j=j+100);
    if(j>maximo){
        clearInterval(progreso);
    }

}
function contador() {
    document.getElementById("contador").innerText = --Tiempo;
    document.getElementById("VideoPubli").setAttribute('autoplay','autoplay');
    document.getElementById("barra").setAttribute('value',0);
    document.getElementById("barra").setAttribute('max',valorMax);
    if (!Tiempo) {
        clearInterval(intervalo);
        document.getElementById("Cerrar").style.display = "block";

    }

}


function Reload() {
    window.location = "file:///home/daw/Escritorio/Entorno%20cliente/Video/Video.html";
}


function CambiarVideo1() {
    var path= document.getElementById("Video").src;
    var path2=document.getElementById("Video2").src;

    document.getElementById("Video").src = path2;
        document.getElementById("Video2").src = path;
        
    restablecerPubli();

}

function CambiarVideo2() {
    var path= document.getElementById("Video").src;
    var path2=document.getElementById("Video3").src;
  
    document.getElementById("Video").src = path2;
    document.getElementById("Video3").src = path;
    restablecerPubli();

}
function CambiarVideo3() {
    var path= document.getElementById("Video").src;
    var path2=document.getElementById("Video4").src;
    document.getElementById("Video").src = path2;
    document.getElementById("Video4").src = path;
    restablecerPubli();

}
function CambiarVideo4() {
    var path= document.getElementById("Video").src;
    var path2=document.getElementById("Video5").src;
    document.getElementById("Video").src = path2;
    document.getElementById("Video5").src = path;
    restablecerPubli();

}


function tiempoPubli() {


    if (Tiempo <= 0) {
        clearInterval(intervalo);
        if (!clicks) {


            window.open("http://01luisrene.com", "nombrePop-Up", "width=380,height=500, top=85,left=50");

        } else {

            document.getElementById("Ocultar").style.display = "none";
            document.getElementById("barra").style.visibility="hidden";
            document.getElementById("VideoPubli").pause();
          

        }
        clicks++;
    }

}
function PausePlay() {

    if (document.getElementById("Video").paused) {
        document.getElementById("Video").play();
        document.getElementById("Reproducir").src = "img/pause.png";
    } else {
        document.getElementById("Video").pause();
        document.getElementById("Reproducir").src = "img/play.png";
    }
}
function Reiniciar() {
    document.getElementById("Video").currentTime = 0;
    if (document.getElementById("Reproducir").src == "img/pause.png") {
        document.getElementById("Reproducir").src = "img/play.png"

    }

}
function silenciar() {
    if (document.getElementById("Video").muted) {
        document.getElementById("Video").muted = false;
        document.getElementById("Silenciar").src = "img/desSilenciar.png";


    } else {
        document.getElementById("Video").muted = true;

        document.getElementById("Silenciar").src = "img/silenciar.png";

    }

}
function Adelantar() {
    adelantar = document.getElementById("Video").currentTime;
    adelantar = adelantar + 10;
    document.getElementById("Video").currentTime = adelantar;
}
function Rebobinar() {
    rebobinar = document.getElementById("Video").currentTime;
    rebobinar = rebobinar - 10;
    document.getElementById("Video").currentTime = rebobinar;
}
function masVolumen() {
    if (count < maxVolumen) {
        count = count + 0.1;
        document.getElementById("Video").volume = count;
    }
}
function menosVolumen() {
    if (count > minVolumen) {
        count = count - 0.1;
        document.getElementById("Video").volume = count;
    }
}
function cargar() {
    document.getElementById("Reproducir").addEventListener("click", PausePlay);
    document.getElementById("Reiniciar").addEventListener("click", Reiniciar);
    document.getElementById("Silenciar").addEventListener("click", silenciar);
    document.getElementById("MasVol").addEventListener("click", masVolumen);
    document.getElementById("MenosVol").addEventListener("click", menosVolumen);
    document.getElementById("Adelantar").addEventListener("click", Adelantar);
    document.getElementById("Rebobinar").addEventListener("click", Rebobinar);
    document.getElementById("Cerrar").addEventListener("click", tiempoPubli);
    document.getElementById("Video2").addEventListener("click", CambiarVideo1);
    document.getElementById("Video3").addEventListener("click", CambiarVideo2);
    document.getElementById("Video4").addEventListener("click", CambiarVideo3);
    document.getElementById("Video5").addEventListener("click", CambiarVideo4);
    intervalo = setInterval(contador, 1000);
    progreso = setInterval(aumentar, 1000);

}

function restablecerPubli() {
    document.getElementById("Ocultar").style.display = "block";
    document.getElementById("Cerrar").style.display = "none";
    document.getElementById("barra").style.visibility="visible";
    document.getElementById("Reproducir").src = "img/play.png";
    document.getElementById("VideoPubli").load();
    Tiempo = 11;
    j=-50;
    clearInterval(intervalo);
    clearInterval(progreso);
    intervalo = setInterval(contador, 1000);
    progreso = setInterval(aumentar, 1000);
    clicks = 0;
    tiempoPubli();
}


document.addEventListener("DOMContentLoaded", cargar);