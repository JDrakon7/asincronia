// Define una función asincrónica que espere 1 segundo y luego devuelva una cadena que
// diga "Operación completada". Utiliza async/await.

// Definir una función delay que devuelve una promesa que se resuelve después de ms milisegundos
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Definir una función asincrónica llamada operacionAsincronica
async function operacionAsincronica() {
    // Esperar 1 segundo (1000 milisegundos) usando await con la función delay
    await delay(1000);
    // Devolver la cadena "Operación completada" después de esperar
    return "Operación completada";
}

// Llamar a la función operacionAsincronica y manejar el resultado usando .then
operacionAsincronica().then(resultado => {
    // Imprimir el resultado cuando la promesa se resuelve
    console.log(resultado);
});











//Ejercicio mas complejo

// El ejercicio consistirá en crear una función asincrónica consultaDatosAsincronica que simule el proceso de consultar datos a través de una API externa, procesarlos localmente y luego devolver un resultado. Vamos a seguir estos pasos:

// Consultar datos de una API externa simulada.
// Procesar los datos localmente para obtener información específica.
// Devolver un resultado con la información procesada.



// Definir una función asincrónica llamada consultaDatosAsincronica
async function consultaDatosAsincronica() {
    try {
        // Bloque try para manejar posibles errores durante las operaciones asincrónicas

        // Simular consulta a una API externa usando await para esperar la respuesta
        const respuestaAPI = await consultarAPI();

        // Procesar los datos recibidos de la API para obtener información específica
        const informacionProcesada = procesarDatos(respuestaAPI);

        // Simular un tiempo de procesamiento adicional usando await para esperar
        await delay(2000);

        // Devolver el resultado de la información procesada
        return informacionProcesada;
    } catch (error) {
        // Bloque catch para manejar errores y mostrar un mensaje de error
        console.error("Ocurrió un error en la consulta de datos:", error);
        // Imprimir el mensaje de error en la consola
        throw error;
        // Lanzar el error para manejarlo externamente si es necesario
    }
}

// Función simulada para consultar una API externa (simulada)
function consultarAPI() {
    return new Promise(resolve => {
        setTimeout(() => {
            const datosAPI = { usuarios: ['Usuario1', 'Usuario2', 'Usuario3'] };
            resolve(datosAPI);
        }, 3000); // Simular un tiempo de espera de 3 segundos para obtener la respuesta
    });
}

// Función simulada para procesar los datos recibidos de la API
function procesarDatos(datos) {
    // Simular un procesamiento de datos complejo para obtener información específica
    return datos.usuarios.map(usuario => usuario.toUpperCase());
}

// Función simulada para simular un tiempo de espera
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Llamar a la función consultaDatosAsincronica y manejar el resultado usando .then y .catch
consultaDatosAsincronica()
    .then(resultado => {
        // Manejar el resultado obtenido de la función asincrónica
        console.log("Información procesada:", resultado);
        // Imprimir el resultado obtenido después del procesamiento de datos
    })
    .catch(error => {
        // Manejar cualquier error que pueda ocurrir durante la consulta de datos
        console.error("Error al consultar datos:", error);
        // Imprimir el mensaje de error en la consola
    });

