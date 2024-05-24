// Crear una función find que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva el elemento pasado como argumento del primer callback que devuelva true
// • sí ningún callback devuelve true, devuelva undefined

function find(array, callback) {
  // Crear función find con dos parámetros (array, callback)
  // array: el array a evaluar
  // callback: la función que decide si un elemento cumple la condición
  for (let i = 0; i < array.length; i++) {
    // Recorrer cada elemento en el array de entrada usando un bucle for
    // i es el índice del elemento actual
    if (callback(array[i])) {
      // Si el callback devuelve true para el elemento actual
      // array[i] es el elemento actual del array
      return array[i];
      // Devolver el elemento actual, ya que cumple la condición
    }
  }
  return undefined;
  // Si el bucle termina y ninguna llamada al callback devolvió true
  // Devolver undefined
}



//Vamos a incrementar la complejidad de la función find incluyendo la capacidad de recibir un contexto (thisArg) 
//para el callback y también pasándole más argumentos (el índice y el array completo). Aquí tienes una versión más avanzada y detalladamente documentada:

function find(array, callback, thisArg) {
  // Crear función find con tres parámetros (array, callback, thisArg)
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

    // Si el callback devuelve true para el elemento actual, devolver el elemento actual
    if (cumpleCondicion) {
      return array[i];
    }
  }

  // Si el bucle termina y ninguna llamada al callback devolvió true, devolver undefined
  return undefined;
}

// Ejemplo de uso de la función find personalizada
const estudiantes = [
  { nombre: 'Juan', edad: 20, aprobado: true },
  { nombre: 'María', edad: 22, aprobado: false },
  { nombre: 'Pedro', edad: 19, aprobado: true }
];

// Función de callback que verifica si un estudiante está aprobado y tiene al menos 21 años
function esMayorYaprobado(estudiante) {
  return estudiante.edad >= 21 && estudiante.aprobado;
}

// Buscar el primer estudiante que cumpla con la condición utilizando la función find personalizada
const estudianteEncontrado = find(estudiantes, esMayorYaprobado);
console.log(estudianteEncontrado); // { nombre: 'María', edad: 22, aprobado: false } (ninguno cumple con ambas condiciones)

// Ejemplo de uso con thisArg para establecer el contexto del callback
const contextoEjemplo = {
  minEdad: 18,
  maxEdad: 21,
  verificarEdad: function (estudiante) {
    return estudiante.edad >= this.minEdad && estudiante.edad <= this.maxEdad;
  }
};

const estudianteVerificado = find(estudiantes, contextoEjemplo.verificarEdad, contextoEjemplo);
console.log(estudianteVerificado); // { nombre: 'Juan', edad: 20, aprobado: true } (es el primer estudiante dentro del rango de edad)

// En este ejercicio, la función find permite buscar el primer elemento que cumpla con una condición compleja, 
//con la capacidad de utilizar un contexto (thisArg) para el callback. Esto es útil para búsquedas avanzadas en arrays de objetos complejos y cuando las condiciones de búsqueda son dinámicas y específicas.




