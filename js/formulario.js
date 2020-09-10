/*
73-EJERCICIO COMPLETO CON EL DOM
window.addEventListener('load',function(){
  console.log('iniciando');
  var formulario=document.querySelector('#formulario');
  var respuestas=document.querySelector('.dashed');



  formulario.addEventListener('submit',function(){
    console.log('evento submit Capturado');
    respuestas.style.display='block';
    var nombre=document.querySelector('#nombresF').value;
    var apellido=document.getElementById('apellidosF').value;
    var edad=document.querySelector('#edadF').value;
    var elementos=[nombre,apellido,edad];
    //mostrando respuestas
    var indice;
    for (indice in elementos) {
      var parrafo=document.createElement('p');
      parrafo.append(elementos[indice]);
      respuestas.append(parrafo);
    };

  })
});
*/
//74-VALIDAR FORMULARIO CON JS
window.addEventListener('load',function(){
  console.log('iniciando');
  var formulario=document.querySelector('#formulario');
  var respuestas=document.querySelector('.dashed');

  formulario.addEventListener('submit',function(){
    console.log('evento submit Capturado');
    respuestas.style.display='block';
    var nombre=document.querySelector('#nombresF').value;
    var apellido=document.getElementById('apellidosF').value;
    var edad=parseInt(document.querySelector('#edadF').value);
    var elementos=[nombre,apellido,edad];
    //usando la funcion trim()
    if (apellido.trim()==null || apellido.trim().length == 0) {
      alert('El apellido no es válido');
      return false;
    }
    if (edad==null || edad.length <= 0 || isNaN(edad)) {
      alert('La edad no es válido');
      return false;
    }
    if (nombre.trim()==null || nombre.trim().length == 0) {
      alert('El nombre no es válido');
      return false;
    }
    //mostrando respuestas
    var indice;
    for (indice in elementos) {
      var parrafo=document.createElement('p');
      parrafo.append(elementos[indice]);
      respuestas.append(parrafo);

    };

  })
});
