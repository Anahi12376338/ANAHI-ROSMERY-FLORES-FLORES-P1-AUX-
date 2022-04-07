/*
// 10. Crea una función que reciba 2 parámetros, precio e iva, y devuelva el precio con iva incluido. Si no recibe el iva,
// aplicará el 21 por ciento por defecto.


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

*/

//11. Crea una función validar() para validar la entrada de datos de un formulario
// a. Para evitar que se envíe un formulario varias veces conviene deshabilitar el botón de envío tras enviarlo
// una vez. Escribe un script para gestionar el envío del formulario:
// b. Deshabilita el botón "Enviar"
// c. Cambia el mensaje que muestra el botón de "Enviar" a "Enviando…"
// d. Cuando se haya enviado genera una página nueva indicando que se ha enviado correctamente y
// muestra la información que se ha enviado.

/*
// 12. Realiza un script que muestre un reloj en pantalla con fecha y hora y que se actualice cada segundo. Función
// setTimeout().

function mueveReloj(){
  momentoActual = new Date()
  hora = momentoActual.getHours()
  minuto = momentoActual.getMinutes()
  segundo = momentoActual.getSeconds()

  horaImprimible = hora + " : " + minuto + " : " + segundo

  document.form_reloj.reloj.value = horaImprimible
}

*/

/*
//13. Programa una función que dada una fecha valida determine cuantos años han pasado hasta el día de hoy
function funcion ( año ) {
  let tiempo = new Date();
  let añoActual = tiempo.getFullYear();
  if ( año < añoActual ) {
      if ( año > 0 ) {
          document.write(añoActual - año);
      }
  } 
  else {
      document.write("Año ingresado invalido");
  }
}
funcion (2000);

*/

// 14. Programa una función que dada una cadena de texto cuente el numero de vocales y consonantes.
//13. Programa una función que dada una fecha valida determine cuantos años han pasado hasta el día de hoy
function funcion ( año ) {
  let tiempo = new Date();
  let añoActual = tiempo.getFullYear();
  if ( año < añoActual ) {
      if ( año > 0 ) {
          document.write(añoActual - año);
      }
  } 
  else {
      document.write("Año ingresado invalido");
  }
}
funcion (2000);

