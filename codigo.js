while (true) {
  var cartaB=Math.floor(Math.random()*12+1);
  var cartaJ=Math.floor(Math.random()*12+1);
  if (cartaB==cartaJ) {
    cartaB=Math.floor(Math.random()*12+1);
    cartaJ=Math.floor(Math.random()*12+1);
  }
  else {
    break;
  }
}
var punt=0;

carta1=document.getElementById('cartaBanca');
carta2=document.getElementById('cartaJugador');
respuestaJ=document.getElementById('respuesta');
resultadoJ=document.getElementById('resultado');

carta2.innerHTML=`La carta del jugador es: ${cartaJ}`;


function decision (){
  if (respuesta.value=="menor") {
    if (cartaJ<cartaB) {
      punt=punt+1
      resultadoJ.innerHTML=`<h2>Has acertado!</h2>`;
    }
    else {
      punt=punt-1
      resultadoJ.innerHTML=`<h2>Has fallado!</h2>`;
    }
  }
  if (respuesta.value=="mayor") {
    if (cartaJ>cartaB) {
      punt=punt+1
      resultadoJ.innerHTML=`<h2>Has acertado!</h2>`;
    }
    else {
      punt=punt-1
      resultadoJ.innerHTML=`<h2>Has fallado!</h2>`;
    }
  }
  carta1.innerHTML=`La carta de la banca es: ${cartaB}`;
  respuestaJ.innerHTML=`Puntuación: ${punt}`;
}
