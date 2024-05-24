// Crear una función some que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si al menos una de las llamadas al callback devolvió true


function some(array, callback) {
  // Crear función some con dos parámetros (array, callback)
  // array: el array a evaluar
  // callback: la función que decide si un elemento pasa la condición
  for (let i = 0; i < array.length; i++) {
    // Recorrer cada elemento en el array de entrada usando un bucle for
    // i es el índice del elemento actual

    if (callback(array[i])) {
      // Si el callback devuelve true para el elemento actual
      // array[i] es el elemento actual del array
      return true;
      // Devolver true inmediatamente, ya que al menos una condición se cumple
    }
  }
  return false;
  // Si el bucle termina y ninguna llamada al callback devolvió true
  // Devolver false
}


const numeros = [1, 3, 5, 7];
const esPar = num => num % 2 === 0;
const alMenosUnPar = some(numeros, esPar);
console.log(alMenosUnPar); // false









// Claro, el método some en JavaScript se utiliza para verificar si al menos un elemento de un array cumple con cierta condición especificada por una función de prueba (callback). La sintaxis general de some es la siguiente:


function some(array, callback, thisArg) {
  // Recorrer cada elemento en el array usando un bucle for
  for (let i = 0; i < array.length; i++) {
    // Verificar si se proporcionó un objeto thisArg y establecer el contexto del callback
    const contexto = thisArg ? thisArg : undefined;
    
    // Llamar al callback con tres argumentos: el elemento actual, su índice y el array completo
    const cumpleCondicion = callback.call(contexto, array[i], i, array);

    // Si el callback devuelve true para algún elemento, devolver true
    if (cumpleCondicion) {
      return true;
    }
  }

  // Si el callback no devuelve true para ningún elemento, devolver false
  return false;
}

// Ejemplo de uso de la función some personalizada
const numeros2 = [2, 4, 6, 7, 8];

// Función de callback que verifica si un número es impar
function esImpar(numero) {
  return numero % 2 !== 0;
}

// Verificar si algún número en el array es impar utilizando la función some personalizada
const algunImpar = some(numeros2, esImpar);
console.log(algunImpar); // true, ya que hay al menos un número impar en el array

//En este ejemplo, some es una función personalizada que permite especificar un contexto (this) y pasar argumentos adicionales a la función de prueba (esImpar en este caso). Utilizamos .call para llamar a la función de prueba en un contexto específico y pasarle los argumentos necesarios para su evaluación.

