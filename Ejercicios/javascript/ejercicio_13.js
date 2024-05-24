// Crea una Promise que se resuelva después de 3 segundos y luego imprima "Promise
// resuelta" cuando se cumpla.

// Crear una nueva promesa que se resuelva después de 3 segundos
const la_promesa = new Promise((resolve, reject) => {
    // Usar setTimeout para esperar 3 segundos (3000 milisegundos)
    setTimeout(() => {
        // Resolver la promesa después de 3 segundos
        resolve("Promise resuelta");
    }, 3000);
});

// Usar el método .then() para manejar la promesa cuando se resuelve
la_promesa.then((mensaje) => {
    // Imprimir el mensaje cuando la promesa se haya cumplido
    console.log(mensaje);
});








// Ejercicio: Promesa de Descarga de Archivo

// El ejercicio consistirá en simular una descarga de archivo mediante una Promesa. 
// Crearemos una Promesa que se resolverá después de un tiempo simulando la descarga del archivo. 
// Luego, utilizaremos el método .then() para manejar la promesa cuando se resuelva y mostrar un mensaje indicando que el archivo se ha descargado con éxito.



// Crear una nueva promesa que simule la descarga de un archivo después de un tiempo especificado
const descargarArchivo = new Promise((resolve, reject) => {
    // Usar setTimeout para simular un tiempo de descarga (ej. 5 segundos = 5000 milisegundos)
    setTimeout(() => {
        // Simular la resolución de la promesa después del tiempo de descarga
        resolve("Archivo descargado con éxito");
    }, 5000); // Tiempo de descarga simulado de 5 segundos
});

// Usar el método .then() para manejar la promesa cuando se resuelve
descargarArchivo.then((mensaje) => {
    // Imprimir un mensaje indicando que el archivo se ha descargado con éxito
    console.log(mensaje);
});
