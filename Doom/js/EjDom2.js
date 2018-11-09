function pulsado(id) {
    document.getElementById(id).classList.remove("Sombra");
    document.getElementById(id).classList.remove("PonerSombra");
    document.getElementById(id).classList.add("QuitarSombra");

}
function soltar(id) {

    document.getElementById(id).classList.remove("QuitarSombra");

    document.getElementById(id).classList.add("PonerSombra");


}
function PonerBorde(id) {

    document.getElementById(id).classList.add("hacerRedondo");
    document.getElementById(id).classList.remove("QuitarRedondo");


}
function QuitarBorde(id) {
    document.getElementById(id).classList.remove("hacerRedondo");
    document.getElementById(id).classList.add("QuitarRedondo");
    document.getElementById(id).classList.remove("PonerSombraInterior");


}
function PonerSombraInterior(id) {
    document.getElementById(id).classList.add("PonerSombraInterior");
}
function EliminarCuadro(id) {




    if (id == "Cuadro1") {
        var div = document.getElementById(id);
        var padre = div.parentNode;
        padre.removeChild(div);
    }
    if (id == "Contenedor2") {
        var div = document.getElementById(id);
        var padre = div.parentNode;
        padre.removeChild(div);
    }
    if (id == "Contenedor3") {
        var div = document.getElementById(id);
        var padre = div.parentNode;
        padre.removeChild(div);
    }
    if (id == "Contenedor4") {
        var div = document.getElementById(id);
        var padre = div.parentNode;
        padre.removeChild(div);
    }
}
