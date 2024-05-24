// Crea una función asincrónica que realice una llamada a un archivo local en formato json y
// luego manipule los datos recibidos para mostrar información específica.

async function empleados_salarios(monto) {
  try {
    // Hacemos una solicitud para obtener el archivo JSON local
    const response = await fetch('/Ejercicios/javascript/datos.json');
    if (!response.ok) {
      throw new Error('Ocurrió un error al obtener el archivo JSON.');
    }
    // Parseamos la respuesta como JSON
    const data = await response.json();

    // Filtramos los empleados con un salario mayor al monto especificado
    const empleadosFiltrados = data.filter(empleado => empleado.salario > monto);

    // Mostramos la información específica de los empleados filtrados
    empleadosFiltrados.forEach(empleado => {
      console.log(`Nombre: ${empleado.nombre}, Salario: $${empleado.salario}`);
    });
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Llamamos a la función con un monto específico (por ejemplo, $35000)
empleados_salarios(35000);



//  variante más compleja de ese ejercicio utilizando la función asincrónica empleados_salarios. En lugar de simplemente filtrar los empleados con un salario mayor a un monto específico, vamos a combinar múltiples criterios de filtrado y mostrar información específica de los empleados que cumplan con todos esos criterios.


// [
//   { "id": 1, "nombre": "Ana", "salario": 40000, "departamento": "Ventas" },
//   { "id": 2, "nombre": "Pedro", "salario": 30000, "departamento": "TI" },
//   { "id": 3, "nombre": "María", "salario": 45000, "departamento": "Finanzas" },
//   { "id": 4, "nombre": "Juan", "salario": 38000, "departamento": "Recursos Humanos" },
//   { "id": 5, "nombre": "Luis", "salario": 32000, "departamento": "Ventas" }
// ]


async function empleados_salarios(departamento, monto) {
  try {
    // Hacemos una solicitud para obtener el archivo JSON local
    const response = await fetch('/Ejercicios/javascript/datos.json');
    if (!response.ok) {
      throw new Error('Ocurrió un error al obtener el archivo JSON.');
    }
    // Parseamos la respuesta como JSON
    const data = await response.json();

    // Filtramos los empleados que trabajan en el departamento y tienen un salario mayor al monto especificado
    const empleadosFiltrados = data.filter(empleado => empleado.departamento === departamento && empleado.salario > monto);

    // Mostramos la información específica de los empleados filtrados
    empleadosFiltrados.forEach(empleado => {
      console.log(`Nombre: ${empleado.nombre}, Salario: $${empleado.salario}, Departamento: ${empleado.departamento}`);
    });
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Llamamos a la función con un departamento específico (por ejemplo, "Ventas") y un monto específico (por ejemplo, $35000)
empleados_salarios('Ventas', 35000);



// Compleja

async function operacionCompleja() {
  try {
    // Simulamos una llamada a una API externa que devuelve datos
    const datosAPI = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await datosAPI.json();

    // Simulamos una operación de procesamiento de datos que toma tiempo
    const datosProcesados = await new Promise(resolve => {
      setTimeout(() => {
        const processedData = posts.map(post => {
          return {
            id: post.id,
            title: post.title.toUpperCase(),
            bodyLength: post.body.length
          };
        });
        resolve(processedData);
      }, 2000); // Simulamos un retraso de 2 segundos
    });

    // Filtramos los datos procesados para mostrar solo los que tienen bodyLength mayor a 100
    const datosFiltrados = datosProcesados.filter(data => data.bodyLength > 100);

    // Realizamos una operación adicional en los datos filtrados
    const operacionAdicional = datosFiltrados.map(data => {
      return {
        id: data.id,
        title: data.title,
        bodyLength: data.bodyLength,
        summary: data.body.substring(0, 100) + '...'  // Resumen del texto
      };
    });

    // Mostramos el resultado final en la consola
    console.log('Resultado Final:', operacionAdicional);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Llamamos a la función para ejecutarla
operacionCompleja();


// En este código:

// Simulamos una llamada a una API externa que devuelve datos (en este caso, datos simulados de https://jsonplaceholder.typicode.com/posts).
// Simulamos una operación de procesamiento de datos que toma tiempo, utilizando una promesa y un setTimeout.
// Filtramos y manipulamos los datos procesados para obtener un resultado final, donde filtramos los posts cuya longitud del cuerpo (bodyLength) sea mayor a 100 caracteres y creamos un resumen (summary) de los mismos.
// Mostramos el resultado final en la consola.




























const fetch = require('node-fetch');
const fs = require('fs');

// Define una función de flecha que filtra objetos cuyo atributo 'name' es "Evaluacion"
const filtrar = x => x.name === "Evaluacion";

// Define una función que lee el archivo JSON y devuelve una promesa
const leerArchivoJSON = archivo => {
  return new Promise((resolve, reject) => {
    fs.readFile(archivo, 'utf8', (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
};

// Inicia una función asíncrona autoejecutable
(async () => {
  try {
    // Lee el archivo user.json
    let user = await leerArchivoJSON("user.json");

    // Realiza una solicitud a la API de GitHub para obtener los repositorios del usuario
    let respuestaGithub = await fetch(`https://api.github.com/users/${user.name}/repos`);

    // Se espera la respuesta de la API y se convierte en formato JSON
    let usuariogithub = await respuestaGithub.json();

    // Filtra los repositorios que cumplen con la condición
    let data = usuariogithub.filter(filtrar);

    // Imprime los repositorios encontrados
    console.log(data);
  } catch (error) {
    console.error(error);
  }
})();
