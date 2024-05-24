// Realiza una llamada a un archivo local Muestra en formato json, luego muestre los datos
// obtenidos en la consola.

// Hacemos una solicitud para obtener el archivo JSON local

fetch('/Ejercicios/javascript/archivo.json').then(response => {
  // Verificamos si la respuesta es exitosa
  if (!response.ok) {
    throw new Error('Ocurrió un error al obtener el archivo JSON.');
  }
  // Parseamos la respuesta como JSON y la retornamos
  return response.json();
})
  .then(data => {
    // Mostramos los datos obtenidos en la consola
    console.log('Datos obtenidos:', data);
  })
  .catch(error => {
    // Capturamos y mostramos cualquier error que ocurra
    console.error('Error:', error.message);
  });



// ejercicio más complejo basado en el código anterior, que consistirá en hacer una solicitud a un servidor simulado que devuelve datos de usuarios. Luego, realizaremos algunas operaciones con esos datos y mostraremos el resultado en la consola.

// Para este ejercicio, asumiré que el servidor devuelve datos en el siguiente formato JSON:

// [
//   { "id": 1, "name": "John Doe", "age": 30 },
//   { "id": 2, "name": "Jane Smith", "age": 25 },
//   { "id": 3, "name": "Michael Johnson", "age": 35 }
// ]


// Vamos a obtener estos datos, filtrar los usuarios mayores de 30 años y luego calcular la suma de sus edades.

// Simulamos una solicitud a un servidor que devuelve datos de usuarios en formato JSON

//Entonces, sí, el .then() actúa de manera similar a un if en este contexto, donde se ejecuta la función dentro del .then() solo si la promesa de la solicitud fetch se resuelve correctamente y obtenemos una respuesta válida del servidor.
fetch('/Ejercicios/javascript/usuarios.json')
  .then(response => {
    // Verificamos si la respuesta es exitosa
    if (!response.ok) {
      throw new Error('Ocurrió un error al obtener los datos de usuarios.');
    }
    // Parseamos la respuesta como JSON y la retornamos
    return response.json();
  })
  .then(data => {
    // Mostramos los datos obtenidos en la consola
    console.log('Datos de usuarios obtenidos:', data);

    // Filtramos los usuarios mayores de 30 años
    const usuariosMayoresDe30 = data.filter(usuario => usuario.age > 30);
    console.log('Usuarios mayores de 30 años:', usuariosMayoresDe30);

    // Calculamos la suma de las edades de los usuarios mayores de 30
    const sumaEdades = usuariosMayoresDe30.reduce((total, usuario) => total + usuario.age, 0);
    console.log('Suma de edades de usuarios mayores de 30 años:', sumaEdades);
  })
  .catch(error => {
    // Capturamos y mostramos cualquier error que ocurra
    console.error('Error:', error.message);
  });

//   Realizamos una solicitud al servidor simulado que devuelve datos de usuarios en formato JSON.
// Verificamos la respuesta y la parseamos como JSON.
// Mostramos los datos obtenidos en la consola.
// Filtramos los usuarios mayores de 30 años y mostramos el resultado.
// Calculamos la suma de las edades de los usuarios mayores de 30 años y mostramos el resultado.
// Este ejercicio amplía el anterior al incluir operaciones como el filtrado de datos y el cálculo de la suma de las edades de los usuarios mayores de 30 años.



// la forma en que JavaScript maneja la asincronía y el uso de Promesas está relacionada con el hecho de que JavaScript es de un solo hilo (o más precisamente, tiene un modelo de concurrencia basado en eventos y bucle de eventos).

// En JavaScript, cuando realizamos operaciones asincrónicas como solicitudes a servidores (como fetch), lecturas de archivos, temporizadores, etc., estas operaciones no bloquean la ejecución del código. En lugar de eso, JavaScript continúa ejecutando otras tareas mientras espera que estas operaciones asincrónicas se completen.

// Las Promesas son una forma de manejar estas operaciones asincrónicas de manera más organizada y fácil de entender. Cuando usamos .then(), estamos diciendo a JavaScript que ejecute cierto código después de que una operación asincrónica se haya completado y la Promesa se haya resuelto.

// En cuanto a la especificación de data como representante del objeto que contiene los datos del archivo JSON en el código, esto se realiza de forma implícita mediante el uso de la sintaxis de Promesas y el encadenamiento de métodos .then(). Al encadenar .then(data => { ... }) después de una operación que devuelve una Promesa (como response.json()), estamos estableciendo que data será el resultado de esa Promesa una vez que se resuelva.

// Por lo tanto, no es necesario especificar explícitamente que data representará el objeto de datos del archivo JSON en el código. Esto se determina automáticamente en función de cómo se encadenan las Promesas y cómo se manejan los resultados en las funciones de los .then().






