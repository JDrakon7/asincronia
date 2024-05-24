// Crear una función findIndex que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva el índice del elemento pasado como argumento del primer callback que
// devuelva true
// • sí ningún callback devuelve true, devuelva undefined

function findIndex(array, callback) {
  // Definición de la función con dos parámetros (array, callback)

  for (let i = 0; i < array.length; i++) {
    // Recorrer cada elemento del array

    if (callback(array[i])) {
      // Ejecutar el callback con el elemento actual
      // Si el callback devuelve true, devolver el índice actual

      return i;
    }
  }

  // Si el bucle termina y ningún callback devolvió true, devolver undefined
  return undefined;
}



//  versión compleja de la función findIndex que incluya la capacidad de recibir un contexto (thisArg) 
//para el callback, y que permita pasar múltiples argumentos (el índice y el array completo). 
//Además, la función devolverá -1 si ningún callback devuelve true, en lugar de undefined, siguiendo la convención estándar de JavaScript.

function findIndex(array, callback, thisArg) {
  // Crear función findIndex con tres parámetros (array, callback, thisArg)
  // array: el array a evaluar
  // callback: la función que decide si un elemento cumple la condición
  // thisArg: el valor a utilizar como "this" dentro del callback

  for (let i = 0; i < array.length; i++) {
    // Recorrer cada elemento en el array de entrada usando un bucle for
    // i es el índice del elemento actual

    // Verificar si se proporcionó un objeto thisArg y establecer el contexto del callback
    const contexto = thisArg ? thisArg : undefined;

    // Llamar al callback con múltiples argumentos: el elemento actual, su índice y el array completo
    const cumpleCondicion = callback.call(contexto, array[i], i, array);

    // Si el callback devuelve true para el elemento actual, devolver el índice actual
    if (cumpleCondicion) {
      return i;
    }
  }

  // Si el bucle termina y ninguna llamada al callback devolvió true, devolver -1
  return -1;
}

// Ejemplo de uso de la función findIndex personalizada
const estudiantes = [
  { nombre: 'Juan', edad: 20, aprobado: true },
  { nombre: 'María', edad: 22, aprobado: false },
  { nombre: 'Pedro', edad: 19, aprobado: true }
];

// Función de callback que verifica si un estudiante está aprobado y tiene al menos 21 años
function esMayorYaprobado(estudiante) {
  return estudiante.edad >= 21 && estudiante.aprobado;
}

// Buscar el índice del primer estudiante que cumpla con la condición utilizando la función findIndex personalizada
const indiceEstudiante = findIndex(estudiantes, esMayorYaprobado);
console.log(indiceEstudiante); // -1, ya que ningún estudiante cumple ambas condiciones

// Ejemplo de uso con thisArg para establecer el contexto del callback
const contextoEjemplo = {
  minEdad: 18,
  maxEdad: 21,
  verificarEdad: function (estudiante) {
    return estudiante.edad >= this.minEdad && estudiante.edad <= this.maxEdad;
  }
};

const indiceVerificado = findIndex(estudiantes, contextoEjemplo.verificarEdad, contextoEjemplo);
console.log(indiceVerificado); // 0, ya que Juan es el primer estudiante dentro del rango de edad
