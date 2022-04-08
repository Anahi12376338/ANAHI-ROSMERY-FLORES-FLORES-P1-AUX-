/*
//1. Realiza un script que pida la edad y si es mayor de 18 años indica que ya puede conducir.
//PIDE POR TECLADO LA EDAD
let edad = prompt("INTRODUCE TU EDAD"); 
if (edad > 18) {
   document.write("PUEDES CONDUCIR");
  console.log("mayor");
}
//SINÓ
else {
  alert("NO PUEDES CONDUCIR");
  console.log("menor");
}

*/
/*
// 2. Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un
// «alert» y seguir pidiendo. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

//DECLARAMOS LA VARIABLE SUMA
var suma = 0;
//BUCLE DO WHILE PARA INTRODUCIR VARIOS
do {
      var numero = prompt("INTRODUCE UN NUMERO");
       if (Number(numero) == numero) {
              numero = Number(numero);
              suma = suma + numero;
    }
      else {
           if (numero != undefined) {
            alert(numero + " ESTO NO ES UN NUMERO ");
        }
    }
} while (numero != undefined);
document.write(suma);
*/

/*
// 3. Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor.

    //PEDIMOS TODOS LOS DATOS
    var Nombre1 = prompt("NOMBRE 1:");
    var Edad1 = Number(prompt("EDAD 1:"));

    var Nombre2 = prompt("NOMBRE 2:");
    var Edad2 = Number(prompt("EDAD  2:"));

    var Nombre3 = prompt("NOMBRE 3:");
    var Edad3 = Number(prompt("EDAD  3:"));

    //Función max() devuelve el mayor de los argumentos pasados.
    var Maximo = Math.max(Edad1, Edad2, Edad3);

    if (Maximo == Edad1) {
        document.write("EL QUE TIENE MEYOR EDAD ES: = " + Nombre1);
    }
    if (Maximo == Edad2) {
        document.write("EL QUE TIENE MEYOR EDAD ES: = " + Nombre2);
    }
    if (Maximo == Edad3) {
        document.write("EL QUE TIENE MEYOR EDAD ES: = " + Nombre3);
    }
 */

  /*

   // 4. Genera 3 números aleatorios entre 1 y 99 pero que no se repita ninguno.

var i = 0;
    var NUM;
    var UNO = 0;
    var DOS = 0;
    var TRES = 0;
    do {
      NUM = Math.floor((Math.random() * 99) + 1);
        if ((NUM != UNO) && (NUM != DOS) && (NUM != 3)) {
            document.write(NUM + "<br>");
            i++;
            if (i == 1) {
                UNO = NUM;

            }
            if (i == 2) {
                DOS = NUM;

            }
            if (i == 3) {
                TRES = NUM;

            }
        }
    } while (i < 3);
    
    */

    /*

   // 5. Realiza un script que cuente el número de vocales que tiene un texto.
   
    var cadena = prompt("INTRODUCE UNA CADENA EN EL TEXTO:"); 
    var numchar = cadena.length;    //Devuelve la longitud del string.
    cadena = cadena.toUpperCase();  //Devuelve el string en mayúsculas.
    var car;
    var contador = 0;
    var i;
    for (i = 0; i < numchar; i++) {
        car = cadena.charAt(i);    //recupera el caracter i del string.
        if ((car == "A") || (car == "E") || (car == "I") || (car == "O") || (car == "U")) {
            contador++;
        }
    }
    document.write("NUMERO DE VOCALES: " + contador + ".");

    */

    /*
// 6. Pedimos una cadena de texto que sabemos que puede contener paréntesis. Realiza un script que extraiga la
// cadena que se encuentra entre los paréntesis. Ejemplo: Si escribimoe el texto “Hola (que) tal” se mostrará
// “que”. Si no existe el signo “(“ mostrará una cadena vacía y si existe el signo “(“pero no el signo “)” mostrará
// desde el primer paréntesis hasta el final.
var cadena = prompt("INTRUDUSCA UN TEXTO QUE DEBE TENER PARENTESIS:"); 
    //Longitud de la cadena
    var numchar = cadena.length;
    var j;
    var car;
    var salida = "";
    var copiar = false;
        
	for (j = 0; j < numchar; j++) {
		car = cadena.charAt(j);    //recupera el caracter i del string.
		if (car == ")") {
            copiar = false;
        }
        if (copiar) {
            salida = salida + car;
        }
        if (car == "(") {
                copiar = true;
        }
    }
    document.write(salida);

*/

/*
// 7. Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá
// mostrar “lat euq aloh”.

var cadena = prompt("INTRODUCE EL TEXTO:");
    var numchar = cadena.length;
    var j;
    var car;
    var salida = "";
    for (j = 0; j < numchar; j++) {
        car = cadena.charAt(j);    //recupera el caracter i del string.
        salida = car + salida;
    }
    document.write(salida)

*/

/*
// 8. Realiza un script que muestre la serie de fibonacci hasta un número entre 1 y 100 pedido por teclado.

var numero = Number(prompt("INTRODUSCA UN NUMERO ENTRE 1 Y 100")); 
    if((numero >= 1) && (numero <= 100)) {
        var x = 0;
        var y = 1;
        var z;
        //IMPRIMIMOS EL PRIMER NÚMERO QUE SERÁ UN 0 Y NO SE PUEDE METER EN EL BUCLE
        document.write(x + "<br>");
        //BUCLE PARA IMPRIMIR EL RESTO DE NÚMEROS (numero-1 porque ya imprimimos uno)
        for (i = 0; i < (numero-1); i++) {
            z = x + y;
            document.write(z + "<br>");
            y = x;
            x = z;
        }
    }
    else {
        alert("NUMERO ERRONEO"); 
    }
*/

/*
// 9. Realiza un juego de Piedra Papel Tijera contra el Pc.

var jugados = 0;
    var ganados = 0;
    var perdidos = 0;
    do {
        var jugada = prompt("Escribe \"piedra\", \"papel\" o \"tijera\"");
        //GUARDAMOS UN NÚMERO ALEATORIO DE 1 AL 9
        var aleatorio = Math.floor((Math.random() * 9) + 1);
        var elige = "";
        if (aleatorio <= 3) {
            elige = "piedra";
        }
        else if (aleatorio <= 6) {
            elige = "papel";
        }
        else {
            elige = "tijera";
        }

        if ((jugada == "piedra") && (elige == "piedra")) {
            alert(jugada+"-"+elige+": Empate");
        }
        else if ((jugada == "piedra") && (elige == "papel")) {
            alert(jugada+"-"+elige+": Gana PC");
            perdidos++;
        }
        else if ((jugada == "piedra") && (elige == "tijera")) {
            alert(jugada+"-"+elige+": Gana Jugador");
            ganados++;
        }
        else if ((jugada == "papel") && (elige == "papel")) {
            alert(jugada+"-"+elige+": Empate");
        }
        else if ((jugada == "papel") && (elige == "tijera")) {
            alert(jugada+"-"+elige+": Gana PC");
            perdidos++;
        }
        else if ((jugada == "papel") && (elige == "piedra")) {
            alert(jugada+"-"+elige+": Gana Jugador");
            ganados++;
        }
        else if ((jugada == "tijera") && (elige == "tijera")) {
            alert(jugada+"-"+elige+": Empate");
        }
        else if ((jugada == "tijera") && (elige == "piedra")) {
            alert(jugada+"-"+elige+": Gana PC");
            perdidos++;
        }
        else if ((jugada == "tijera") && (elige == "papel")) {
            alert(jugada+"-"+elige+": Gana Jugador");
            ganados++;
        }
        jugados++;

    } while (confirm("Jugar de nuevo"));

    document.write("Partidas jugadas: "+jugados+"<br>");
    document.write("Partidas ganadas: "+ganados+"<br>");
    document.write("Partidas perdidas: "+perdidos+"<br>");
    document.write("Partidas empatadas: "+(jugados-ganados-perdidos));
*/

// 10. Crea una función que reciba 2 parámetros, precio e iva, y devuelva el precio con iva incluido. Si no recibe el iva,
//aplicará el 21 por ciento por defecto.

function masIva(precio, iva){
    iva = iva || 21
    var coniva = (precio + precio*iva/100);
    return coniva;
  }
  var precio = Number(prompt("Introduce un precio"));
  var iva = Number(prompt("Introduce el iva"));
  if(iva > 0){
    var resultado = masIva(precio, iva);
  }
  else{
    var resultado = masIva(precio);
  }
  document.write("Precio sin iva: " + precio);
  document.write("<br>Precio más Iva: " + resultado);
  