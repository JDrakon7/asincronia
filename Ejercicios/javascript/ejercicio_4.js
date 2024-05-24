// Crear una función filter que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • sí dicho callback devuelve true, pushea el elemento a un nuevo array
// • devuelva el array final con los elementos que pasaron el "filtro".



function filter(array, callback) {
  // Crear función filter con dos parámetros (array, callback)
  // array: el array a filtrar
  // callback: la función que decide si un elemento pasa el filtro
  let resultado = [];
  // Crear un array vacío para almacenar los elementos que pasen el filtro
  for (let i = 0; i < array.length; i++) {
    // Recorrer cada elemento en el array de entrada usando un bucle for
    // i es el índice del elemento actual
    if (callback(array[i])) {
      // Si el callback devuelve true para el elemento actual
      // array[i] es el elemento actual del array
      resultado.push(array[i]);
      // Agregar el elemento actual al array resultado
    }
  }
  return resultado;
  // Devolver el array con los elementos que pasaron el filtro
}

//Ejemplo de uso

function Numero_mayor_5(numero) {
  return numero > 5;
}

let numeros = [2, 7, 4, 9, 1, 6];
let numerosFiltrados = filter(numeros, Numero_mayor_5);

console.log(numerosFiltrados); // Output: [7, 9, 6]


// Ejercicio de filtro por longitud de cadena:

//Supongamos que deseamos filtrar un array de strings para obtener solo aquellos cuya longitud sea mayor que 3 caracteres.

function filtrar_caracteres(str) {
  return str.length > 3;
}

let palabras = ["casa", "auto", "perro", "gato", "sol"];
let palabras_filtradas = filter(palabras, filtrar_caracteres)

console.log(palabras_filtradas)

// En este ejemplo, filtroPorLongitud es el callback que devuelve true
//  si la longitud de una cadena es mayor que 3. Luego, se llama a filter con el array palabras y el callback
// filtroPorLongitud, y se obtiene un nuevo array con las palabras filtradas.


// Ejercicio de filtro por tipo de dato:

// Imagina que queremos filtrar un array que contiene varios tipos de datos y solo queremos los números.


function numero(elemento) {
  return typeof elemento === "number"
}

let datos = ["Hola", 123, true, "Mundo", 5, false]
let numero_filtrados = filter(datos, numero)

console.log(numero_filtrados)

// En este ejemplo, esNumero es el callback que devuelve true
// si un elemento es de tipo número.Se utiliza filter con el array datos y el callback
// esNumero, obteniendo un nuevo array solo con los números presentes en el array original.





//Implementación Compleja de filter
//En este ejemplo, vamos a filtrar objetos de un array según múltiples criterios utilizando un callback con argumentos 
//adicionales y un objeto thisArg para establecer el contexto.


  // En este ejemplo, vamos a filtrar objetos de un array según múltiples criterios utilizando un callback con 
  //argumentos adicionales y un objeto thisArg para establecer el contexto.

  function filter(array, callback, thisArg) {          
    // Crear función filter con tres parámetros (array, callback, thisArg)
    // array: el array a filtrar
    // callback: la función que decide si un elemento pasa el filtro
    // thisArg: el valor a utilizar como "this" dentro del callback
  
    let resultado = [];
  
    for (let i = 0; i < array.length; i++) {
      // Recorrer cada elemento en el array de entrada usando un bucle for
      // i es el índice del elemento actual
  
      // Verificar si se proporcionó un objeto thisArg y establecer el contexto del callback
      const contexto = thisArg ? thisArg : undefined;
  
      // Llamar al callback con múltiples argumentos: el elemento actual, su índice y el array completo
      const cumpleCriterios = callback.call(contexto, array[i], i, array);
  
      // Si el callback devuelve true para el elemento actual, agregarlo al array resultado
      if (cumpleCriterios) {
        resultado.push(array[i]);
      }
    }
  
    return resultado;
  }
  
  // Ejemplo de uso con objetos complejos
  const estudiantes = [
    { nombre: 'Juan', edad: 20, aprobado: true },
    { nombre: 'María', edad: 22, aprobado: false },
    { nombre: 'Pedro', edad: 19, aprobado: true }
  ];
  
  // Función de callback que filtra estudiantes según múltiples criterios
  function filtrarEstudiantes(estudiante, index, array) {
    // Se verifica si el estudiante está aprobado y tiene una edad mayor o igual a 20
    return estudiante.aprobado && estudiante.edad >= 20;
  }
  
  // Filtrar estudiantes utilizando la función filter personalizada
  const estudiantesFiltrados = filter(estudiantes, filtrarEstudiantes);
  console.log(estudiantesFiltrados);
  