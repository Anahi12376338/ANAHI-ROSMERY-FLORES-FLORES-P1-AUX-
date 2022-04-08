/*
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
// 15. Programa una función que valide que un texto sea un nombre valido. Entrada(‘edson’) devolverá ‘verdadero’.

/*

// 16. Programa una función que dado un arreglo de elementos, elimine los duplicados:
// entrada([‘5’, ’25’, ‘10’, ‘s’, ‘5’, ‘a’, ‘a’]) devolverá ([‘5’, ‘25’, ‘10’, ‘s’, ‘a’]).

function funcion(A) {
  let B = [];
  for (let i = 0; i < A.length; i++) {
    let cont = 0;
    for (let j = i; j < A.length; j++) {
      if (A[i] == A[j]) {
        cont++;
      }
    }
    if (cont == 1) {
      B.push(A[i]);
    }
  }
  return B;
}
let A = [5, 25, 10, "s", 5, "a", "a"];
let resultado = funcion(A);
document.write(resultado);

*/
/*

// 17. Programa una función que dado un array de números devuelva un objeto con dos arreglos el primero con los
// números pares y en el segundo con los números impares.

function funcion(A) {
  let numeros = { numerosPares: [], numerosImpares: [] };
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      numeros.numerosPares.push(A[i]);
    } else {
      numeros.numerosImpares.push(A[i]);
    }
  }
  return numeros;
}
let A = [1, 5 , 10 , 15 , 20 , 25, 30];
let numeros = funcion(A);
document.write(numeros.numerosPares + " " + numeros.numerosImpares);


*/
/*

// 18. Ayuda al Elfo a listar los regalos.
// Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es una cadena de texto y es
// muy difícil de leer . ¡Menos mal que han puesto cada regalo separado por espacio! (aunque ten cuidado, porque
// al ser niños, igual han colado más espacios de la cuenta)
// Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra, por
// ejemplo _playstation, que significa que está tachado y no se tiene que contar.
// Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece. Por ejemplo, si
// tenemos el texto:

const carta ="bici coche playStation peluche _almidon balón _playstation bici coche peluche";

function filtrada(carta) {
  const separado = carta.toLowerCase().trim().split(" ");
  let newData = separado.slice();
  let chartNoInclude = /^_/;

  const dataLimpia = newData.filter((palabras, index) => {
    return !chartNoInclude.test(palabras);
  });

  return dataLimpia.reduce((previewValue, currentValue) => {
    previewValue[currentValue] = (previewValue[currentValue] || 0) + 1;
    return previewValue;
  }, {});
}
console.log(filtrada(carta));


/*
// 19. Mi amigo Dani está trabajando en una tienda y con la llegada de las navidades tiene el almacén hecho un desastre y
// no encuentra nada.
// Vamos a crear una función contains que recibe dos parámetros: un objeto que define el almacén y el producto que buscamos.
// La función debe devolver un booleano que indique si se encuentra el string como valor en algún nivel del objeto.

// Helper function to flat a JavaScript object using the pattern: parent_key_value

function iterate(obj) {
  let res = [];
  for (let property in obj) {
    const child = obj[property];
    if (typeof child === "object") {
      res = [...res, ...iterate(child)];
    }
    res.push(child);
  }
  return res;
}

function contains(store, product) {
  return iterate(store).some((item) => item === product);
}

const almacen = {
  estanteria1: {
    cajon1: {
      producto1: "coca-cola",
      producto2: "fanta",
      producto3: "sprite"
    }
  },
  estanteria2: {
    cajon1: "vacio",
    cajon2: {
      producto1: "pantalones",
      producto2: "camiseta" // <- ¡Está aquí!
    }
  }
};

const otroAlmacen = {
  baul: {
    fondo: {
      objeto: "cd-rom",
      "otro-objeto": "disquette",
      "otra-cosa": "mando"
    }
  }
};

console.log(contains(almacen, "camiseta"));
console.log(contains(otroAlmacen, "gameboy"));

*/
/*
//   20. En busca del reno perdido.
// ¡Hemos perdido a un reno y falta poco más de una semana para Navidad!
// Lo peor es que son tantos que no sabemos cuál es el que nos falta... ¡Qué lío! A ver, Elfon Musk ha hecho inventario
// y nos pasa un array con los ids de cada reno.
//  Lo bueno: los ids son números que pueden ir del 0 al 100, no están repetidos y sólo se ha perdido un reno.
//  Lo malo: la lista está desordenada y podría faltar el último...
//Necesitamos una función que al pasarle la lista de ids de renos nos diga inmediatamente cuál es el que falta

function missingReindeer(ids) {
  let salida;
  const aux = [...Array(ids.length).keys()];
  const res = ids.sort((a, b) => a - b);
  (JSON.stringify(aux) === JSON.stringify(res))
    ?
      salida = res.at(-1) + 1
    :
    (
      res.forEach((_, index, arr) => {
        if (arr.indexOf(index) === -1) {
          salida = index;
        }
      })
    )
  return salida;
}

console.log(missingReindeer([0, 2, 3])) //1
console.log(missingReindeer([0,1]))
console.log(missingReindeer([0]))
console.log(missingReindeer([5, 6, 1, 2, 3, 7, 0]))
*/

