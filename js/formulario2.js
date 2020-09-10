window.addEventListener('load',function (){
  var formulario=document.getElementById('formulario');
  var formularioMuestra=document.querySelector('.dashed');

  formulario.addEventListener('submit',function(){
    console.log('ejecutando');
    formularioMuestra.style.display='block';

    var nombre=document.querySelector('#nombresF').value;
    var apellido=document.querySelector('#apellidosF').value;
    var edad=document.querySelector('#edadF').value;

    var nombreM=document.querySelector('#nombreMostrado');
    var apellidoM=document.querySelector('#apellidoMostrado');
    var edadM=document.querySelector('#edadMostrado');

    if (nombre.trim()==null || nombre.trim().length==0) {
      alert('el nombre no es correcto');
      document.querySelector('#nombresF').innerHTML='el nombre no es válido';
      return false;
    }
    else {
      nombreM.style.display='none';
    }
    if (apellido.trim()==null || apellido.trim().length==0) {
      alert('El apellido no es correcto');
      document.querySelector('#apellidosF').innerHTML='El apellido no es valido';
    }

    nombreM.innerHTML=nombre;
    apellidoM.innerHTML=apellido;
    edadM.innerHTML=parseInt(edad);


  });


});
