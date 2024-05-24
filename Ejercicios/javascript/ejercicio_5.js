// Crear una función every que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si todas las llamadas al callback devolvieron true


function every(array, callback) {
  // Crear función every con dos parámetros (array, callback)
  // array: el array a evaluar
  // callback: la función que decide si un elemento pasa la condición

  for (let i = 0; i < array.length; i++)
    // Recorrer cada elemento en el array de entrada usando un bucle for
    // i es el índice del elemento actual
    if (!callback(array[i])) {
      // Si el callback devuelve false para el elemento actual
      // array[i] es el elemento actual del array
      return false;
      // Devolver false inmediatamente, ya que no se cumplen todas las condiciones

    }
  // Si todas las llamadas al callback devolvieron true, devolver true al final
  return true;
}


//Ejemplo de uso numeros pares 

const numeros = [2, 4, 6, 8]
const esPar = num => num % 2 === 0
const todos_pares = every(numeros, esPar)
console.log(todos_pares); // true


// VARIANTE

// Implementación Mejorada de every
//En esta versión más compleja de every, vamos a permitir que el callback pueda recibir más argumentos, 
// incluyendo el índice del elemento actual y el array completo. También vamos a añadir la posibilidad de usar un objeto thisArg para establecer el contexto del callback.

function every(array, callback, thisArg) {
  // Crear función every con tres parámetros (array, callback, thisArg)
  // array: el array a evaluar
  // callback: la función que decide si un elemento pasa la condición
  // thisArg: el valor a utilizar como "this" dentro del callback

  for (let i = 0; i < array.length; i++) {
    // Recorrer cada elemento en el array de entrada usando un bucle for
    // i es el índice del elemento actual

    // Verificar si se proporcionó un objeto thisArg y establecer el contexto del callback
    const contexto = thisArg ? thisArg : undefined;
    const resultadoCallback = callback.call(contexto, array[i], i, array);

    // Si el callback devuelve false para el elemento actual
    if (!resultadoCallback) {
      return false;
      // Devolver false inmediatamente si no se cumple la condición
    }
  }

  // Si todas las llamadas al callback devolvieron true, devolver true al final
  return true;
}

// Ejemplo de uso con objetos complejos
const estudiantes = [
  { nombre: 'Juan', edad: 20, aprobado: true },
  { nombre: 'María', edad: 22, aprobado: false },
  { nombre: 'Pedro', edad: 19, aprobado: true }
];

// Función de callback que verifica si un estudiante está aprobado
function estaAprobado(estudiante) {
  return estudiante.aprobado;
}

const todosAprobados = every(estudiantes, estaAprobado);
console.log(todosAprobados); // false, porque María no está aprobada

// Ejemplo de uso con thisArg para establecer el contexto del callback
const contextoEjemplo = {
  minEdad: 18,
  maxEdad: 25,
  verificarEdad: function (estudiante) {
    return estudiante.edad >= this.minEdad && estudiante.edad <= this.maxEdad;
  }
};

const todosVerificanEdad = every(estudiantes, contextoEjemplo.verificarEdad, contextoEjemplo);
console.log(todosVerificanEdad); // true, todos los estudiantes están dentro del rango de edad
