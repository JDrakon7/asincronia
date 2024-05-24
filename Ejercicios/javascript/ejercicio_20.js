// Crea tres Promises que se resuelvan después de diferentes intervalos de tiempo y luego
// utilice Promise.all() para mostrar un mensaje cuando todas se hayan resuelto.

// Función que crea una Promise que se resuelve después de un cierto tiempo
function crearPromise(tiempo) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Promise resuelta después de ${tiempo} milisegundos`);
      }, tiempo);
    });
  }
  
  // Creamos tres Promises con diferentes tiempos de resolución
  const promise1 = crearPromise(1000); // 1 segundo
  const promise2 = crearPromise(2000); // 2 segundos
  const promise3 = crearPromise(3000); // 3 segundos
  
  // Usamos Promise.all() para esperar a que todas las Promises se resuelvan
  Promise.all([promise1, promise2, promise3])
    .then((results) => {
      // Cuando todas se hayan resuelto, mostramos un mensaje
      console.log('Todas las Promises se han resuelto:');
      results.forEach((result) => {
        console.log(result);
      });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  
const fetch = require('node-fetch');
const fs = require('fs');

// Define una función que filtra objetos cuyo atributo 'name' es "Evaluacion"
const filtrar = x => x.name === "Evaluacion";

// Define una función que lee el archivo JSON y devuelve una promesa
function leerArchivoJSON(archivo) {
  return new Promise((resolve, reject) => {
    // Lee el archivo de manera asíncrona
    fs.readFile(archivo, 'utf8', (error, data) => {
      if (error) {
        reject(error); // Si hay un error, rechaza la promesa
      } else {
        resolve(JSON.parse(data)); // Si se lee correctamente, resuelve la promesa con los datos parseados
      }
    });
  });
}

// Lee el archivo user.json y maneja el resultado como una promesa
leerArchivoJSON("user.json")
  .then(user => {
    // Realiza una solicitud a la API de GitHub para obtener los repositorios del usuario
    return fetch(`https://api.github.com/users/${user.name}/repos`);
  })
  .then(respuestaGithub => {
    // Se espera la respuesta de la API y se convierte en formato JSON
    return respuestaGithub.json();
  })
  .then(usuariogithub => {
    // Filtra los repositorios que cumplen con la condición
    let data = usuariogithub.filter(filtrar);
    // Imprime los repositorios encontrados
    console.log(data);
  })
  .catch(error => {
    // Maneja cualquier error que ocurra durante el proceso
    console.error(error);
  });











/////////////////
// Define una función de flecha que filtra objetos cuyo atributo 'name' es "Evaluacion"
const filtrar = x => x.name === "Evaluacion";

// Inicia una cadena de promesas
fetch("user.json") // Realiza una solicitud para obtener el archivo 'user.json'
  .then(response => response.json()) // Convierte la respuesta a formato JSON
  .then(user => {
    // Utiliza el nombre del usuario obtenido para realizar una solicitud a la API de GitHub
    return fetch(`https://api.github.com/users/${user.name}/repos`);
  })
  .then(respuestaGithub => respuestaGithub.json()) // Convierte la respuesta de la API de GitHub a formato JSON
  .then(usuariogithub => {
    // Itera sobre el array de repositorios obtenidos
    usuariogithub.forEach(element => {
      // Verifica si el nombre del repositorio es "Evaluacion"
      if (element.name === "Evaluacion") {
        // Si lo es, imprime el repositorio en la consola
        console.log(element);
      }
    });
  })
  .catch(error => {
    // Maneja cualquier error que ocurra en la cadena de promesas
    console.error('Error:', error);
  });






  
    // Función para crear una fila de la tabla con los datos del usuario
    const crearFila = (nombre, avatar) => {
      const fila = document.createElement('tr');

            const celdaNombre = document.createElement('td');
            celdaNombre.textContent = nombre;
            fila.appendChild(celdaNombre);

            const celdaAvatar = document.createElement('td');
            const imagenAvatar = document.createElement('img');
    
            celdaAvatar.appendChild(imagenAvatar);
            fila.appendChild(celdaAvatar);

            return fila;
    };

            // Solicitud fetch para leer el archivo users.json
            fetch("users.json")
      .then(response => response.json()) // Convierte la respuesta a formato JSON
      .then(users => {
        

        // Itera sobre el array de usuarios obtenidos
        users.forEach(user => {
          // Crea una fila para cada usuario con su nombre y avatar
          const fila = crearFila(user.name, user.avatar);
            // Añade la fila a la tabla
            tablaAprendices.appendChild(fila);
        });
      })
      .catch(error => {
              // Imprime cualquier error que ocurra durante el proceso
              console.error('Error:', error);
      });
          