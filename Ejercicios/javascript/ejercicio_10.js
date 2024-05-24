// Crear una función takeWhile que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva un array con los elementos hasta el primer callback que devolvió false
// • (Inverso del dropWhile)

function takeWhile(array, callback) {
  // Crear una función takeWhile con dos parámetros (array, callback)
  // array: el array a evaluar
  // callback: la función que decide si un elemento cumple la condición

  let newArray = [];
  // Crear un nuevo array para almacenar los elementos que cumplen la condición

  for (let i = 0; i < array.length; i++) {
    // Recorrer cada elemento del array de entrada usando un bucle for
    // i es el índice del elemento actual

    if (!callback(array[i])) {
      // Si el callback devuelve false, dejar de agregar elementos al nuevo array
      break;
    }

    // Si el callback devuelve true, agregar el elemento actual al nuevo array
    newArray.push(array[i]);
  }

  return newArray;
  // Devolver el nuevo array con los elementos que cumplieron la condición
}


const numeros = [1, 2, 3, 4, 5, 6];
const menor_4 = num => num < 4;

const resultado = takeWhile(numeros, menor_4);
console.log(resultado); // [1, 2, 3]











// versión más compleja de la función takeWhile que incluya la capacidad de recibir un contexto (thisArg) 
//para el callback y también pase múltiples argumentos (el índice y el array completo).

function takeWhile(array, callback, thisArg) {
  // Crear una función takeWhile con tres parámetros (array, callback, thisArg)
  // array: el array a evaluar
  // callback: la función que decide si un elemento cumple la condición
  // thisArg: el valor a utilizar como "this" dentro del callback

  let newArray = [];
  // Crear un nuevo array para almacenar los elementos que cumplen la condición

  for (let i = 0; i < array.length; i++) {
    // Recorrer cada elemento del array de entrada usando un bucle for
    // i es el índice del elemento actual

    // Verificar si se proporcionó un objeto thisArg y establecer el contexto del callback
    const contexto = thisArg ? thisArg : undefined;

    // Llamar al callback con múltiples argumentos: el elemento actual, su índice y el array completo
    const cumpleCondicion = callback.call(contexto, array[i], i, array);

    if (!cumpleCondicion) {
      // Si el callback devuelve false, dejar de agregar elementos al nuevo array
      break;
    }

    // Si el callback devuelve true, agregar el elemento actual al nuevo array
    newArray.push(array[i]);
  }

  return newArray;
  // Devolver el nuevo array con los elementos que cumplieron la condición
}

// Ejemplo de uso de la función takeWhile personalizada
const numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Función de callback que verifica si un número es menor que 5
function esMenorQueCinco(numero) {
  return numero < 5;
}

// Utilizar la función takeWhile para obtener los números menores que 5
const numerosFiltrados = takeWhile(numeros1, esMenorQueCinco);
console.log(numerosFiltrados); // [1, 2, 3, 4]

// Ejemplo de uso con thisArg para establecer el contexto del callback
const contextoEjemplo = {
  limite: 5,
  verificarNumero: function (numero) {
    return numero < this.limite;
  }
};

const numerosFiltradosConContexto = takeWhile(numeros, contextoEjemplo.verificarNumero, contextoEjemplo);
console.log(numerosFiltradosConContexto); // [1, 2, 3, 4]
