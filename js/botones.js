var boton=document.getElementsByClassName('botoncito');
var ventana=document.getElementsByClassName('ventana');
ventana[0].addEventListener('click',tamañoVentana);
ventana[1].addEventListener('click',tamañoVentana2);
var botonFocus=document.getElementsByClassName('botonFocus');
var textoFocus=document.getElementById('textoFocus');
botonFocus[0].addEventListener('focus',focus);
botonFocus[1].addEventListener('focus',focus2);
var botonTimer=document.getElementsByClassName('timer');
var conejilloTimer=document.getElementById('conejillo');
botonTimer[0].addEventListener('click',timer);

function timer()
{
  var tiempo=setInterval(function(){
    console.log('ejecutando');
    //conejilloTimer.style.background='yellow';
    if (conejilloTimer.style.background=='yellow') {
      conejilloTimer.style.background='orange';
    }
    else {
      conejilloTimer.style.background='yellow';
    };
  },750);
  var stop =document.querySelector('#alto');
  stop.addEventListener('click',function(){
    //alert('haz parado los Intervalos');
    clearInterval(tiempo);
  });

};


function focus()
{  textoFocus.focus();}
function focus2()
{  textoFocus.blur();}

function tamañoVentana2()
{
  var ancho=screen.width;
  var alto=screen.heigth;
  //alert(alto," de alto\n",ancho," de ancho");
  alert(alto);
  alert(ancho);
}
function tamañoVentana()
{
  var altura=window.innerHeight;
  var ancho=window.innerWidth;
  alert(altura);
  alert(ancho);
  document.innerHTML=altura;
}



function boton1()
{
  if(boton[0].value='No')
  {
    boton[0].value='Si';
    boton[1].value='No';
  }
  console.log(boton[0].value);

}
function boton2()
{
  if(boton[1].value='Si')
  {
    boton[1].value='No';
    boton[0].value='Si';
  }
  if(boton[0].value='No')
  {
    boton[0].value='No';
    boton[1].value='Si';
  }
  console.log(boton[1].value);

}
//PROBANDO 'QuerySelector'
var botonId=document.querySelector('#boton');
var botonClase=document.querySelector('.boton');
botonId.addEventListener('click',claseHoy);

function claseHoy()
{
  botonId.style.color='#fff';
  botonId.style.background='blue';
  botonId.value='Me haz hecho click wiii';
}
function intento()
{
  botonClase.style.background='orange';
  botonClase.style.color='#ddd';
  botonClase.value='Pasaste por mi encima!';
}
