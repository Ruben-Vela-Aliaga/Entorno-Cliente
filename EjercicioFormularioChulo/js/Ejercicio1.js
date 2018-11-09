var count=0;
function cargar(){
    document.getElementById("BotonEditar").addEventListener( "click",Editar);
    document.getElementById("BotonAñadir").addEventListener( "click",Anyadir);
    document.getElementById("BotonEliminar").addEventListener( "click",Eliminar);
}

function Editar(){

    var padre = this.parentNode;
    var abuelo = padre.parentNode;
    var contenedor = abuelo.parentNode;


    var inputs = contenedor.getElementsByTagName("input");
for (i = 0 ; i < inputs.length;i++){
    if( inputs[i].disabled == false){

            inputs[i].disabled = true;
        
        }else{
            inputs[i].disabled = false;
        }

}

}
function Eliminar(){
    var padre = this.parentNode;
    var abuelo = padre.parentNode;
    var Formulario = abuelo.parentNode;
    var contenedor = Formulario.parentNode;
	if( Formulario.id == "Formulario"){
		if(confirm("¿Esta seguro de que desea eliminar el formulario?")== true){
			
    contenedor.removeChild(Formulario);
		}
	}else{
		
    contenedor.removeChild(Formulario);
	}
	

}

    
    function Anyadir(){

        var clon =document.getElementById("Formulario").cloneNode(true);
    
        count++;
        clon.id="Formulario"+count;


        var array = clon.getElementsByTagName("input");
       
        for (i = 0; i < array.length; i++) {
            array[i].id = array[i].id + count;

        }
        
        var botones = clon.getElementsByTagName("button");
        botones[0].addEventListener("click",Eliminar);
        botones[1].addEventListener("click",Editar);

        var Padre = document.getElementById("Contenedor");
        Padre.appendChild(clon);
        
    }

    
    document.addEventListener("DOMContentLoaded",cargar);