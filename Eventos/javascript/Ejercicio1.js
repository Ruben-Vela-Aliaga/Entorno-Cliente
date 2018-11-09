function dni(DNI){
    DNI= DNI.value;
    var numero = DNI.substr(0,DNI.length-1);
    let = DNI.substr(DNI.length-1,1);
    numero = numero % 23;
  var letra='TRWAGMYFPDXBNJZSQVHLCKET';
    letra=letra.substring(numero,numero+1);
    if (letra!=let) {
      alert('Dni erroneo');
  }else{
      alert("Dni correcto")
  }
  }
  
  function passwd(pass1){
       var p1= document.getElementById("Password").value;
       var p2= document.getElementById("repPasword").value;

    let requisitos=/^[A-Z]|[a-z]\w{8,14}$/;
    if(p1 !=p2){
alert("Las contraseñas no son iguales");
    }
    else if(requisitos.test(p1)){
        alert("Contraseña Correcta");
    }else{
        alert("Requiere al menos 1 letra ,8 caracteres minimo y 15 como máximo");
    }

  }
   
  function passwd1(pass){
    pass = pass.value;

 let requisitos=/^([A-Z]|[a-z])+\w{8,14}$/;
  if(requisitos.test(pass)){
     alert("Contraseña Correcta");
 }else{
     alert("Requiere al menos 1 letra y 8 caracteres minimo");
 }

}

  
          
          function Correo(Email){
              Email = Email.value;
              re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
      if(!re.exec(Email)){
          alert('email no valido');
      }
      else alert('email valido');
      }
          

          function iP(ipaddress){
              ipaddress = ipaddress.value;
              if (/^(25[0-5]|2[0-4][url0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {  
                 alert("IP Correcta");
    }else{
    alert("IP no valida");  
    }  
  }  
  
  
          
          function url(url){
              url = url.value;
              if(/^(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/.test(url)){
                  alert("URL CORRECTA");
              }else{
                  alert("URL INCORRECTA")
              }
  
          }
      