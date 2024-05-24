// Crear una función dropWhile que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva un array con los elementos a partir del primer callback que devolvió false
// • (Es decir, crea un nuevo array y va recorriendo elemento por elemento, mientras el
// callback de true, no los agrega, cuando el callback da false por primera vez agrega
// todos los elementos restantes a partir de dicho elemento inclusive)

function dropWhile(array, callback) {
  // Crear una función dropWhile con dos parámetros (array, callback)
  // array: el array a evaluar
  // callback: la función que decide si un elemento cumple la condición

  let newArray = [];
  // Crear un nuevo array para almacenar los elementos que no cumplen la condición

  let dropping = true;
  // Variable para controlar cuándo dejar de descartar elementos

  for (let i = 0; i < array.length; i++) {
    // Recorrer cada elemento del array de entrada usando un bucle for
    // i es el índice del elemento actual

    if (dropping && !callback(array[i])) {
      // Si estamos descartando elementos y el callback devuelve false
      // dejar de descartar elementos
      dropping = false;
    }

    if (!dropping) {
      // Si ya hemos encontrado un elemento que no cumple la condición
      // agregar el elemento actual al nuevo array
      newArray.push(array[i]);
    }
  }

  return newArray;
  // Devolver el nuevo array con los elementos que no cumplieron la condición
}

// Mayor a 5
function menor_5(num) {
  return num < 5;
}

const numeros = [2, 4, 6, 3, 1, 7, 8];
const numerosFiltrados = dropWhile(numeros, menor_5);

console.log(numerosFiltrados); // Output: [6, 3, 1, 7, 8]



// Numero negativo

function negativo(num) {
  return num < 0
}

const numeros_total = [-2, -4, 6, -3, 1, 7, 8]
const numeros_filtadros = dropWhile(numeros, negativo)

console.log(numeros_filtadros)








//  versión más compleja de la función dropWhile que incluya la capacidad de recibir un contexto 
//(thisArg) para el callback y también pase múltiples argumentos (el índice y el array completo).


function dropWhile(array, callback, thisArg) {
  // Crear función dropWhile con tres parámetros (array, callback, thisArg)
  // array: el array a evaluar
  // callback: la función que decide si un elemento cumple la condición
  // thisArg: el valor a utilizar como "this" dentro del callback

  let newArray = [];
  // Crear un nuevo array para almacenar los elementos que no cumplen la condición

  let dropping = true;
  // Variable para controlar cuándo dejar de descartar elementos

  for (let i = 0; i < array.length; i++) {
    // Recorrer cada elemento del array de entrada usando un bucle for
    // i es el índice del elemento actual

    // Verificar si se proporcionó un objeto thisArg y establecer el contexto del callback
    const contexto = thisArg ? thisArg : undefined;

    // Llamar al callback con múltiples argumentos: el elemento actual, su índice y el array completo
    const cumpleCondicion = callback.call(contexto, array[i], i, array);

    if (dropping && !cumpleCondicion) {
      // Si estamos descartando elementos y el callback devuelve false
      // dejar de descartar elementos
      dropping = false;
    }

    if (!dropping) {
      // Si ya hemos encontrado un elemento que no cumple la condición
      // agregar el elemento actual al nuevo array
      newArray.push(array[i]);
    }
  }

  return newArray;
  // Devolver el nuevo array con los elementos que no cumplieron la condición
}

// Ejemplo de uso de la función dropWhile personalizada
const numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Función de callback que verifica si un número es menor que 5
function esMenorQueCinco(numero) {
  return numero < 5;
}

// Utilizar la función dropWhile para obtener los números a partir del primer número que no es menor que 5
const numerosFiltrados1 = dropWhile(numeros, esMenorQueCinco);
console.log(numerosFiltrados); // [5, 6, 7, 8, 9, 10]

// Ejemplo de uso con thisArg para establecer el contexto del callback
const contextoEjemplo = {
  limite: 7,
  verificarNumero: function (numero) {
    return numero < this.limite;
  }
};

const numerosFiltradosConContexto = dropWhile(numeros1, contextoEjemplo.verificarNumero, contextoEjemplo);
console.log(numerosFiltradosConContexto); // [7, 8, 9, 10]



//En este ejercicio, la función dropWhile permite descartar elementos de un array hasta que se encuentre uno que no cumpla con una condición compleja, con la capacidad de utilizar un contexto (thisArg) para el callback. Esto es útil para filtros 
//avanzados en arrays de objetos complejos y cuando las condiciones de filtrado son dinámicas y específicas.
//Espero que este ejercicio te sea útil para comprender mejor la función dropWhile y su aplicación en casos más complejos. Si tienes alguna pregunta adicional o necesitas más aclaraciones, estaré encantado de ayudarte.


