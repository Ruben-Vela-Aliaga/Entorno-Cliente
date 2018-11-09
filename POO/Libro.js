




export default class Libro{
    constructor ( titulo, autor, pais ,isbn){
    this.titulo=titulo;
    this.autor=autor;
    this.pais=pais;
    this.isbn=isbn;
}
getTitulo(){
    return  this.titulo;
   }
   setTitulo(valor){
       this.titulo=valor;
   }
   setAutor(valor){
       this.autor=valor;
   }
   setPais(valor){
       this.pais=valor;
   }
   setIsbn(valor){
       this.isbn=valor;
   }

   getAutor(){
       return this.autor;
   }

   getPais(){
       return this.pais;
   }

   getIsbn(){
       return this.isbn;
   }



}




