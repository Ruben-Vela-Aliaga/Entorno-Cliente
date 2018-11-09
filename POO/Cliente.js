

let playerMap= new WeakMap();

class Cliente{

    constructor ( nombre, direccion, dni ,telefono){
        this.nombre=nombre;
        this.direccion=direccion;
        this.dni=dni;
        this.telefono=telefono;




    }
    getNombre(){
     return  this.nombre;
    }
    setNombre(valor){
        this.nombre=valor;
    }
    setDireccion(valor){
        this.direccion=valor;
    }
    setDni(valor){
        this.dni=valor;
    }
    setTelefono(valor){
        this.telefono=valor;
    }

    getDireccion(){
        return this.nombre;
    }

    getDni(){
        return this.nombre;
    }

    getTelefono(){
        return this.nombre;
    }
}




