//Primero tomamos la decicion de la pc

function computerPlay() {
  let pcHand = Math.random() *3;
 
  let pcHandPlay ;
  // piedra papel y tijera tendran un valor de  3 2 y 1 respectivamente
   if (pcHand> 2) {
     pcHandPlay= 3;
   }else if(pcHand >1){
     pcHandPlay=2;
   }else  {
     pcHandPlay=1;
   }
//retorno el valor asignado 
return pcHandPlay;
// muestro mensaje 

}


function playerSelection() {
  // caputuro el texto de la caja de texto
  var jugada =  document.getElementById("playerDec").value;
// crep array de posibles jugadas existentes
  let plais = ["tijera", "papel", "piedra"];
  // comparo el texto en minuscula y lo comparo con lo predetrminado 
  let i=0;
  while (i<3) {
    // compare string con string para asignarle un valor numerico
    if (jugada.toLowerCase() == plais[i]) {
      return  i+1;
    }
    i ++;
  }
  alert("Debe ingresar una jugada adecuada")
}

function gameDeciscion(maquina, jugador) {

  let resultado;
  let estado = ["empate", "pierde", "gana"];
  let d = ["tijera", "papel", "piedra"];
// cruzo informacion de maquina con jugador y el resultado tendra un msg
// si no cae en nada entonces es un empate 

  if (jugador == 1) {
        if (maquina == 2) {
          resultado = 2;
        } else if (maquina == 3) {
          resultado =1;
        } else{
          resultado =0;
        }
  } else if(jugador == 2) {
        if (maquina == 1) {
          resultado =1;
        }else if (maquina == 3) {
          resultado =2;
        }else {
          resultado = 0;
        }
  }else if(jugador == 3) {
        if (maquina  == 1 ) {
          resultado=2;
        } else if(maquina == 2){
          resultado=1;
        }else {
          resultado =0;
        }

  }
let mensajeResultado ="El restudao es: ";
  document.getElementById("result_maquina").innerHTML= d[maquina-1];
  document.getElementById("result").innerHTML = mensajeResultado + estado[resultado] ;
  return resultado;
}

let jugador = 0;
let maquina = 0; 

function game(resultado) {

 if (resultado == 2) {
   jugador = jugador +1;
   if (jugador >= 5) {
     alert("GANASTE")
     jugador=0;
     maquina=0;
   }
 } else if(resultado == 1){
   maquina = maquina +1;
   if (maquina >= 5) {
     alert("PERDISTE LOOSER")
     jugador = 0;
     maquina = 0;
   } 
 }
  document.getElementById("puntaje_jugador").innerHTML= jugador;
  document.getElementById("puntaje_maquina").innerHTML = maquina;
}

function todos(){
  gameDeciscion(computerPlay(), playerSelection());
  let grato = gameDeciscion(computerPlay(), playerSelection());
  game(grato);


}

