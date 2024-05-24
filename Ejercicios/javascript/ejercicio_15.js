// Crea una Promise que se rechace después de 2 segundos y captura el error para imprimir
// "Error: Promise rechazada".

// Creamos una nueva Promise
const mi_promesa = new Promise((resolve, reject) => {
  // Simulamos una operación que tome un tiempo
  setTimeout(() => {
    // Rechazamos la Promise después de 2 segundos
    reject(new Error('Promise rechazada'));
  }, 2000); // 2000 milisegundos = 2 segundos
});

// Capturamos el error si la Promise es rechazada
mi_promesa.catch((error) => {
  // Imprimimos el mensaje de error
  console.error('Error:', error.message);
});



///////////////Otro ejercicio mas complejo////////////////////

// Ejercicio: Obtener y Filtrar Datos de Usuarios
// Define una función obtenerUsuarios que haga una solicitud a una API pública que devuelve una lista de usuarios en formato JSON.
// Usa fetch para realizar la solicitud a la API.
// Una vez que obtengas la lista de usuarios, filtra aquellos usuarios que tengan una edad superior a 30 años.
// Devuelve una nueva lista con los usuarios filtrados.
// Si la solicitud a la API o el proceso de filtrado generan un error, captura ese error y maneja la situación de manera adecuada.


// Define una función para obtener y filtrar usuarios
async function obtenerUsuarios() {
  try {
    // Realiza una solicitud para obtener la lista de usuarios
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    
    // Verifica si la solicitud fue exitosa
    if (!response.ok) {
      throw new Error("Error al obtener la lista de usuarios");
    }

    // Convierte la respuesta a formato JSON
    let usuarios = await response.json();

    // Filtra los usuarios mayores de 30 años
    let usuariosMayores = usuarios.filter(usuario => usuario.age > 30);

    // Devuelve la lista de usuarios mayores de 30 años
    return usuariosMayores;
  } catch (error) {
    // Captura y maneja el error
    console.error("Error:", error.message);
    // Devuelve un array vacío en caso de error
    return [];
  }
}

// Ejecuta la función y muestra el resultado
obtenerUsuarios()
  .then(usuariosFiltrados => {
    console.log("Usuarios mayores de 30 años:", usuariosFiltrados);
  })
  .catch(error => {
    console.error("Error general:", error.message);
  });


  // Este ejercicio simula una situación más realista donde se realizan solicitudes a una API externa, se procesan los datos obtenidos y se manejan posibles errores que puedan surgir durante el proceso. La función obtenerUsuarios utiliza fetch para obtener la lista de usuarios, 
  // filtra los usuarios mayores de 30 años y maneja cualquier error que pueda ocurrir durante el proceso.



















  /////////////////////Ejercicio variante/////////////////////////
//   Ejercicio: Obtener y Procesar Datos de Libros y Autores
// Define una función obtenerLibrosAutores que haga una solicitud a una API pública que devuelve información sobre libros y sus autores en formato JSON.
// Usa fetch para realizar la solicitud a la API.
// Una vez que obtengas los datos, filtra los libros publicados después del año 2000 y que tengan una calificación mayor o igual a 4.
// Calcula el promedio de las calificaciones de los libros filtrados.
// Devuelve un objeto con los siguientes datos: la lista de libros filtrados, el promedio de calificaciones y la cantidad total de libros filtrados.
// Si la solicitud a la API o el proceso de filtrado y cálculo generan un error, captura ese error y maneja la situación de manera adecuada.



// Define una función para obtener y procesar libros y autores
async function obtenerLibrosAutores() {
  try {
    // Realiza una solicitud para obtener la lista de libros y autores
    let response = await fetch("https://api.example.com/books");

    // Verifica si la solicitud fue exitosa
    if (!response.ok) {
      throw new Error("Error al obtener la lista de libros y autores");
    }

    // Convierte la respuesta a formato JSON
    let librosAutores = await response.json();

    // Filtra los libros publicados después del año 2000 y con calificación mayor o igual a 4
    let librosFiltrados = librosAutores.filter(libro => libro.year > 2000 && libro.rating >= 4);

    // Calcula el promedio de calificaciones de los libros filtrados
    let totalCalificaciones = librosFiltrados.reduce((suma, libro) => suma + libro.rating, 0);
    let promedioCalificaciones = totalCalificaciones / librosFiltrados.length;

    // Devuelve un objeto con los resultados
    return {
      librosFiltrados,
      promedioCalificaciones,
      cantidadLibros: librosFiltrados.length
    };
  } catch (error) {
    // Captura y maneja el error
    console.error("Error:", error.message);
    // Devuelve un objeto vacío en caso de error
    return {};
  }
}

// Ejecuta la función y muestra el resultado
obtenerLibrosAutores()
  .then(resultados => {
    console.log("Libros filtrados:", resultados.librosFiltrados);
    console.log("Promedio de calificaciones:", resultados.promedioCalificaciones);
    console.log("Cantidad total de libros filtrados:", resultados.cantidadLibros);
  })
  .catch(error => {
    console.error("Error general:", error.message);
  });
// En este ejercicio, además de realizar la solicitud a la API y filtrar los datos, también calculamos el promedio de las calificaciones de los libros filtrados y devolvemos un objeto con toda esa información. Esto simula una situación más realista donde se realiza un procesamiento más complejo de los datos obtenidos de una API externa.


















// ejercicio más complejo que involucre varias Promesas encadenadas y manejo avanzado de errores. Imagina que tienes que realizar una serie de operaciones asíncronas que dependen unas de otras, y quieres manejar los errores de manera precisa en cada paso.

// Vamos a crear un ejemplo donde:

// Se inicia una tarea asíncrona que genera un número aleatorio después de 1 segundo.
// Se toma ese número y se decide si es par o impar. Si es par, se resuelve la Promise; si es impar, se rechaza con un mensaje específico.
// Si la Promise se resuelve, se genera un segundo número aleatorio después de 1 segundo.
// Se toma el segundo número y se decide si es múltiplo de 3. Si lo es, se resuelve la Promise; si no, se rechaza con un mensaje específico.
// Finalmente, si todo sale bien, se imprime un mensaje indicando que ambas tareas se completaron correctamente.
// Aquí está el código detallado paso a paso:

// Función que genera un número aleatorio después de 1 segundo
function generarNumeroAleatorio() {
  return new Promise((resolve, reject) => {
    // Simulamos una operación asíncrona que toma tiempo (1 segundo)
    setTimeout(() => {
      // Generamos un número aleatorio entre 0 y 99
      const numero = Math.floor(Math.random() * 100);
      // Imprimimos el número generado
      console.log('Número generado:', numero);
      // Resolvemos la Promise con el número generado
      resolve(numero);
    }, 1000); // 1000 milisegundos = 1 segundo
  });
}

// Función que verifica si un número es par o impar
function verificarParidad(numero) {
  return new Promise((resolve, reject) => {
    // Verificamos si el número es par
    if (numero % 2 === 0) {
      // Si es par, resolvemos la Promise con el número
      resolve(numero);
    } else {
      // Si es impar, rechazamos la Promise con un mensaje de error
      reject(new Error('El número es impar'));
    }
  });
}

// Función que verifica si un número es múltiplo de 3
function verificarMultiploDeTres(numero) {
  return new Promise((resolve, reject) => {
    // Verificamos si el número es múltiplo de 3
    if (numero % 3 === 0) {
      // Si es múltiplo de 3, resolvemos la Promise con el número
      resolve(numero);
    } else {
      // Si no es múltiplo de 3, rechazamos la Promise con un mensaje de error
      reject(new Error('El número no es múltiplo de 3'));
    }
  });
}

// Lógica principal
generarNumeroAleatorio() // Generamos el primer número aleatorio
  .then(verificarParidad) // Verificamos si es par o impar
  .then((numeroPar) => {
    // Si es par, se ejecuta esta parte
    console.log('El número es par:', numeroPar);
    // Generamos un segundo número aleatorio
    return generarNumeroAleatorio();
  })
  .then(verificarMultiploDeTres) // Verificamos si el segundo número es múltiplo de 3
  .then((numeroMultiploDeTres) => {
    // Si es múltiplo de 3, se ejecuta esta parte
    console.log('El número es múltiplo de 3:', numeroMultiploDeTres);
    // Imprimimos un mensaje indicando que ambas tareas se completaron correctamente
    console.log('Ambas tareas se completaron correctamente.');
  })
  .catch((error) => {
    // Capturamos cualquier error que ocurra en cualquiera de las Promesas anteriores
    console.error('Error:', error.message);
  });


// Generación de Número Aleatorio: generarNumeroAleatorio() simula una operación asíncrona que genera un número aleatorio después de 1 segundo.
// Verificación de Paridad: verificarParidad(numero) comprueba si el número es par o impar y resuelve o rechaza la Promise en consecuencia.
// Verificación de Múltiplo de 3: verificarMultiploDeTres(numero) verifica si el número es múltiplo de 3 y resuelve o rechaza la Promise en consecuencia.
// Lógica Principal: Encadena las Promesas y maneja los errores con .then() y .catch() respectivamente.
// Comentarios en Cada Paso: Dentro de cada .then(), hay comentarios que explican qué se hace en cada etapa y cómo se manejan los datos o errores.