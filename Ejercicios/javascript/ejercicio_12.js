// La función incorporada setTimeout utiliza callbacks. Crea una alternativa basada en
// promesas.
// La función delay(ms) debería devolver una promesa. Esa promesa debería resolverse
// después de ms milisegundos, para que podamos agregarle. then, así:

// La función delay es una función que crea una promesa que se resuelve después de un número especificado de milisegundos. Esto se logra utilizando la función setTimeout dentro de una promesa.

// Crear una función delay que acepte un parámetro ms (milisegundos) y devuelva una promesa
function delay(ms) {
    // Devolvemos una nueva promesa
    return new Promise(resolve => {
        // Usamos setTimeout para esperar el número de milisegundos especificados
        setTimeout(() => {
            // Cuando el tiempo ha pasado, llamamos a resolve para cumplir la promesa
            resolve();
        }, ms);
    });
}

// Usamos la función delay con 3000 milisegundos (3 segundos)
delay(3000).then(() => {
    // Esta función se ejecuta cuando la promesa se cumple, después de 3 segundos
    alert("se ejecuta después de 3 segundos");
});



// La función delay se utiliza para crear una pausa en la ejecución del código por un número específico de milisegundos.



//Uso en un Contexto Más Complejo
//Podemos utilizar delay en un contexto más complejo, como encadenar varias promesas o utilizarla en una función async.


// Función para simular una operación asincrónica con un mensaje
function operacionConRetraso(ms, mensaje) {
    return delay(ms).then(() => {
        console.log(mensaje);
    });
}

// Encadenar varias operaciones con diferentes retrasos
operacionConRetraso(1000, "Mensaje después de 1 segundo")
    .then(() => operacionConRetraso(2000, "Mensaje después de 3 segundos"))
    .then(() => operacionConRetraso(1000, "Mensaje después de 4 segundos"))
    .then(() => console.log("Todas las operaciones completadas"));

// Uso de delay en una función async/await
async function ejecucionAsincronica() {
    await delay(1500);
    console.log("Esto se ejecuta después de 1.5 segundos");
    await delay(2500);
    console.log("Esto se ejecuta después de 4 segundos en total");
}

ejecucionAsincronica();


// //Explicación de Casos de Uso
// // Simulación de Operaciones Asincrónicas:

// //La función operacionConRetraso toma ms y mensaje como parámetros, usa delay para esperar ms milisegundos y luego imprime el mensaje.
// Esto es útil para simular operaciones asincrónicas como llamadas a una API o tareas que toman tiempo.
// Encadenamiento de Promesas:

// Se pueden encadenar múltiples llamadas a operacionConRetraso para realizar operaciones secuenciales con diferentes tiempos de espera.
// Cada operación se ejecuta solo después de que la anterior se haya completado.
// Uso en async/await:

// delay se puede usar dentro de funciones async con await para esperar de forma síncrona la resolución de la promesa.
// Esto facilita la escritura de código asincrónico que es más fácil de leer y mantener.






// Ejercicio Avanzado con delay
// Supongamos que queremos realizar una serie de operaciones que deben ejecutarse después de diferentes 
// tiempos de espera y luego queremos manejar posibles errores.


// La función procesoComplejo es una función async que manejará un proceso complejo de manera asincrónica.
async function procesoComplejo() {
    try {
        // Inicio del bloque try para manejar las operaciones asincrónicas sin errores.

        await delay(1000);
        // Esperar 1000 milisegundos (1 segundo) antes de continuar con la siguiente operación.
        console.log("Operación 1 completada después de 1 segundo");
        // Imprimir un mensaje indicando que la Operación 1 se ha completado después de 1 segundo de espera.

        await delay(2000);
        // Esperar 2000 milisegundos (2 segundos) antes de continuar con la siguiente operación.
        console.log("Operación 2 completada después de 3 segundos");
        // Imprimir un mensaje indicando que la Operación 2 se ha completado después de 3 segundos de espera.

        await delay(1500);
        // Esperar 1500 milisegundos (1.5 segundos) antes de continuar con la siguiente operación.
        console.log("Operación 3 completada después de 4.5 segundos");
        // Imprimir un mensaje indicando que la Operación 3 se ha completado después de 4.5 segundos de espera.

    } catch (error) {
        // Captura cualquier error que ocurra durante la ejecución de las operaciones asincrónicas dentro del bloque try.
        console.error("Ocurrió un error en el proceso:", error);
        // Imprime un mensaje de error indicando qué tipo de error ocurrió.

    } finally {
        // Bloque finally que se ejecuta siempre, independientemente de si hubo errores o no.
        console.log("Proceso completo (independientemente de errores)");
        // Imprime un mensaje indicando que el proceso ha finalizado completamente, independientemente de si hubo errores.
    }
}

// Llamada a la función procesoComplejo para iniciar la ejecución del proceso complejo de manera asincrónica.
procesoComplejo();


// Explicación del Ejercicio Avanzado
// Función procesoComplejo:

// Es una función async que ejecuta varias operaciones con diferentes tiempos de espera.
// Manejo de Errores:

// Utiliza try/catch para manejar posibles errores durante la ejecución de las operaciones asincrónicas.
// catch captura cualquier error y lo imprime en la consola.
// Bloque finally:

// El bloque finally se ejecuta siempre, independientemente de si hubo errores o no, y se utiliza para cualquier limpieza o finalización del proceso.