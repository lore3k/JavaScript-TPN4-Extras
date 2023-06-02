/*Piedra-papel-tijera 👊🏻 ✋🏻 ✌🏻 :

crear un script (en el repo de conceptos de JS o realizar un nuevo repo) 
con toda la logica necesaria que solicite al usuario un movimiento (piedra - papel - tijera)
la PC elija aleatoriamente un movimiento y al final mostrar por pantalla quien gano, 
luego preguntar si queremos jugar otra vez. */

//Genera un numero aleatorio entre un rango de enteros

function random(){
	var number = Math.floor( Math.random() * 3);
	return number;
}

var piedra = 0;
var papel = 1;
var tijera = 2;

var opciones = ["PIEDRA", "PAPEL", "TIJERA"];

var opcionUsuario;
var opcionPC = random(); 

opcionUsuario = prompt("ELIGE UNA OPCIÓN\n\n0- Piedra\n1- Papel\n2- Tijera");

document.write("La PC eligió " + opciones[opcionPC]);
document.write("<br><br>");

if(opcionUsuario == 0){
  
  document.write("Elegiste PIEDRA");
  document.write("<br><br>");

  if(opcionPC == 0){
  	document.write("¡Es un empate!");
  }
  else if(opcionPC == 1){
    document.write("Perdiste :(");
  }
  else if(opcionPC == 2){
    document.write("¡Ganaste!¡Felicidades!");
  }
}
else if(opcionUsuario == 1){
  document.write("\nElegiste PAPEL");
  document.write("<br><br>");

  if(opcionPC == 0){
    document.write("¡Ganaste! ¡Felicidades!");
  }
  else if(opcionPC == 1){
    document.write("¡Es un empate!");
  }
  else if(opcionPC == 2){
    document.write("Perdiste :(");
  }
}

else if(opcionUsuario == 2){
	document.write("Elegiste TIJERA");
  document.write("<br><br>");

	if(opcionPC == 0){
    document.write("Perdiste :(");
    }
    else if(opcionPC == 1){
      document.write("¡Ganaste! ¡Felicidades!");	
    }
    else if(opcionPC == 2){ 
      document.write("¡Es un empate!");
    }
}

else{
	document.write("\nDebes elegir 0,1 ó 2");
}