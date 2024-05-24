// Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
//   comenzando desde desde y terminando con hasta.
// Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
// • Usando setInterval.
// • Usando setTimeout anidado
//SetInterval
// Diferencias Clave
// setInterval: Ejecuta la función repetidamente cada intervalo de tiempo específico. Es más sencillo para tareas repetitivas que deben detenerse después de un cierto punto.
// setTimeout: Ejecuta la función una sola vez después del retraso especificado, y requiere anidación para repetir la tarea. Es más flexible en términos de control de la ejecución de la función.
function imprimir_numeros_interval(desde, hasta) {  //Declarando la funcion  imprimir_numeros_interval(desde, hasta) //declara una función que toma dos parámetros: desde y hasta.
  let contador = desde  //inicializar variable contador con el valor = desde
  let intervalo = setInterval(function () { //establece un intervalo que se ejecuta cada segundo o 1000 milisegundos 
    console.log(contador)  //imprimir el valor actual de contador 
    contador++ // incrementar el valor del contador de 1 en  1
    if (contador === hasta + 1) { //verificar si el valor de contador es exactamente igual al valor hasta + 1 , y si se cumple esto
      clearInterval(intervalo); // se detiene el intervalo con cleanInterval  e imprimir interval terminado 
      console.log("Interval Terminado")
    }
  }, 1000)  // Esta función imprimirá los números desde desde hasta hasta cada segundo, y luego se detendrá.
}
imprimir_numeros_interval(1, 10)
// setTimeout anidado 
function imprimir_numeros_timeout(desde, hasta) { //Declaracion de la funcion imprimir_numeros_timeout con los parametros desde hasta
  let contador = desde  //inicialiazcion del contador con el valor =  desde 
  setTimeout(function anidado() { // Inicio del temporizador que ejecuta la funcion anidado despues de 1 seg o 1000 milisegundos
    console.log(contador) //imprimir el valor actual de contador 
    if (contador < hasta) {  // identifica si el valor de contador es < menor que hasta , si es asi 
      setTimeout(anidado, 1000)  // se ejecutara la funcion anidado despues de un segundo 
    }
    contador++ // incrementar el valor de contador de 1 en 1 
  }, 1000)
}
imprimir_numeros_timeout(1, 10)

//En el siguiente código hay una llamada programada setTimeout, luego se ejecuta un cálculo
//pesado que demora más de 100 ms en finalizar.
//¿Cuándo se ejecutará la función programada y por qué se ejecutará?
//a) Después del bucle.
//b) Antes del bucle.
//c) Al comienzo del bucle.
//¿Qué va a mostrar alert()
let i = 0; // Declarar de la variable i = 0 
setTimeout(() => alert(i), 100); // Programar una funcion que se ejecutara cada 100 milisegundos , el cual mostrar un alert con el valor de i
for (let j = 0; j < 100000000; j++) { // Se ejecuta el ciclo pesado cada 100 milisegundos 
  i++
}
// RESPUESTA CORRECTA LA B : La funcion se ejecuta despues de que el bucle "for" haya terminado , debido a que se bloquea mientras este ejecutandose
// Que va a mostrar el alert() Mostrata el la variable i , es decir el valor 0

// Crear una función map que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • obtenga el resultado
// • lo pushee a un nuevo array
// • devuelva el array final con el resultado de cada una de las llamadas al callback.
const numeros = [5, 8, 19, 22] // Definir el array numeros 
const duplicar = x => x * 2 //Definir la funcion duplicar
const resultado = numeros.map(duplicar) //  Uso de Map  , el cual realizara , Tome cada elemento del array numeros , Aplique la función duplicar a cada elemento , Cree un nuevo array resultado con los resultados de cada llamada a duplicar
console.table(resultado)

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

// Crear una función every que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si todas las llamadas al callback devolvieron true
function every (array , callback){
  // Crear función every con dos parámetros (array, callback)
  // array: el array a evaluar
  // callback: la función que decide si un elemento pasa la condición
  const numeros = [2, 4, 6, 8]
  const esPar = num => num % 2 === 0
  const todosPares = every(numeros, esPar)
  console.log(todosPares); // true
  for (let i = 0; i < array.length; i++ )
    // Recorrer cada elemento en el array de entrada usando un bucle for
  // i es el índice del elemento actual
  if (!callback(array[i])){
      // Si el callback devuelve false para el elemento actual
      // array[i] es el elemento actual del array
      return false;
      // Devolver false inmediatamente, ya que no se cumplen todas las condiciones
      
  } 
}

// Crear una función some que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si al menos una de las llamadas al callback devolvió true
function some(array, callback) { 
  // Crear función some con dos parámetros (array, callback)
  // array: el array a evaluar
  // callback: la función que decide si un elemento pasa la condición
  for (let i = 0; i < array.length; i++) {
    // Recorrer cada elemento en el array de entrada usando un bucle for
    // i es el índice del elemento actual
    const numeros = [1, 3, 5, 7];
  const esPar = num => num % 2 === 0;
  const alMenosUnPar = some(numeros, esPar);
  console.log(alMenosUnPar); // false

    if (callback(array[i])) {
      // Si el callback devuelve true para el elemento actual
      // array[i] es el elemento actual del array
      return true;
      // Devolver true inmediatamente, ya que al menos una condición se cumple
    }
  }
  return false; 
  // Si el bucle termina y ninguna llamada al callback devolvió true
  // Devolver false
}

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

// Crear una función findIndex que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva el índice del elemento pasado como argumento del primer callback que
// devuelva true
// • sí ningún callback devuelve true, devuelva undefined



////////////////////////////////////////////////7//Git//////////////////////////////////////////////



// fetch es una función incorporada en JavaScript que se utiliza para hacer solicitudes de red de forma asíncrona. 
//Se usa principalmente para obtener recursos de servidores web, como archivos JSON, imágenes, documentos HTML, 
//entre otros. La solicitud realizada con fetch devuelve una promesa que se puede manejar utilizando then y catch o con async/await para esperar la resolución de la promesa de manera asíncrona.




// Define una función de flecha que filtra objetos cuyo atributo 'name' es "Evaluacion"
const filtrar = x => x.name === "Evaluacion";

// Inicia una función asíncrona autoejecutable
(async () => {
  // Realiza una solicitud para obtener el archivo 'user.json'
  let response = await fetch("user.json");
  
  // Convierte la respuesta a formato JSON
  let user = await response.json();

  // Realiza una solicitud a la API de GitHub para obtener los repositorios del usuario
  let respuestaGithub = await fetch(`https://api.github.com/users/${user.name}/repos`);
  
  // Convierte la respuesta a formato JSON
  let usuariogithub = await respuestaGithub.json();

  // Itera sobre el array de repositorios obtenidos
  usuariogithub.forEach(element => {
    // Verifica si el nombre del repositorio es "Evaluacion"
    if (element.name === "Evaluacion") {
      // Si lo es, imprime el repositorio en la consola
      console.log(element);
    }
  });

  
  let data = usuariogithub.filter(filtrar);
  console.log(data);
  console.log(usuariogithub);
})();


// Definición de la función filtrar:

// La función filtrar es una función de flecha que toma un parámetro x y retorna true si el atributo name de x es igual a "Evaluacion". Esto se usa para filtrar objetos basados en este criterio.
// Función asíncrona autoejecutable:

// Se utiliza una función asíncrona autoejecutable (una expresión de función asíncrona envuelta en paréntesis y seguida de ()). Esto se hace para ejecutar el código de forma asincrónica y manejar las promesas de manera más efectiva.
// Solicitudes HTTP con fetch:

// Se realiza una solicitud para obtener el archivo user.json utilizando fetch. Esta solicitud espera la respuesta con await y luego la convierte a formato JSON  con response.json().

// Se hace otra solicitud a la API de GitHub para obtener los repositorios del usuario. La URL de esta solicitud está compuesta dinámicamente usando ${user.name} para obtener el nombre del usuario del archivo JSON obtenido anteriormente.


// Iteración y filtrado:

// Una vez que se obtienen los repositorios del usuario desde la API de GitHub y se convierten a formato JSON, se itera sobre este array de repositorios utilizando forEach.
// Dentro de la iteración, se verifica si el nombre del repositorio es "Evaluacion". Si es así, se imprime el repositorio en la consola.
// Comentarios adicionales:

// Se proporcionan comentarios adicionales en el código que muestran cómo se podría usar la función filtrar en lugar de la iteración manual para filtrar los repositorios.
// También se muestra cómo imprimir todos los repositorios obtenidos en la consola.
// En resumen, este código muestra cómo realizar solicitudes HTTP asincrónicas, manejar respuestas JSON, iterar sobre arrays de objetos y filtrar elementos basados en ciertos criterios.









// Variante del Ejercicio 

// Vamos a crear una variante de este código que, en lugar de buscar un repositorio llamado "Evaluacion", 
//busque repositorios que tengan más de un cierto número de estrellas (stargazers_count).


const filtrarPorEstrellas = x => x.stargazers_count > 10;

(async () => {
  let response = await fetch("user.json");
  let user = await response.json();

  let respuestaGithub = await fetch(`https://api.github.com/users/${user.name}/repos`);
  let usuariogithub = await respuestaGithub.json();

  // Filtra los repositorios que tienen más de 10 estrellas
  let repositoriosPopulares = usuariogithub.filter(filtrarPorEstrellas);

  // Imprime los repositorios populares en la consola
  console.log(repositoriosPopulares);
})();
























// Ejercicios calcular promedio 


function calcular_promedio(numeros1){
  let suma = 0
  let numeros_pares = 0;

  for (let i = 0 ; i < numeros1.length ; i++)
    suma += numeros1[i];
  if (numeros1[i]  % 2 === 0){
    numeros_pares++
  }

  let promedio = suma / numeros.length; // Calcula el promedio
  return { promedio, numeros_pares }; // Devuelve un objeto con el promedio y la cantidad de números pares
}

// Prueba de la función
let numeros1 = [10, 20, 30, 40, 50];
let resultado1 = calcular_promedio(numeros);
console.log(resultado); // Debería mostrar el promedio y la cantidad de números pares


// Utilicé un bucle for para recorrer el array de números y calcular la suma total de los números.

// Dentro del bucle, utilicé un if para verificar si cada número es par (numeros[i] % 2 === 0). Si es así, incremento la variable cantidadNumerosPares.

// Al final del bucle, calculé el promedio dividiendo la suma total por la cantidad de números en el array (numeros.length).

// La función devuelve un objeto con el promedio y la cantidad de números pares para que puedas ver ambas informaciones al mismo tiempo al imprimir el resultado






const ruta_archivo = 'user.json';

async function cargar_archivo(ruta) {
  try {
    const response = await fetch(ruta);
    if (!response.ok) {
      throw new Error('Error al cargar el archivo JSON: ' + response.statusText);
    }
    return await response.json();
  } catch (error) {
    console.error('Error:', error.message);
    return null;
  }
}

const validar_aprendiz = new Proxy({}, {
  set: function (obj, prop, value) {
    if (prop === 'aprendiz' && value === true) {
      console.log("Proxy aprendiz aprobado");
      obj[prop] = value;
      return true;
    } else {
      console.error('Error: El usuario no es un aprendiz');
      return false;
    }
  }
});

function transformarNombre(nombre) {
  return nombre.toUpperCase();
}

function modificarUsuarios(datos) {
  datos.users.forEach(usuario => {
    let aprendizProxy = new Proxy(usuario, {
      set: function (obj, prop, value) {
        if (prop === 'aprendiz' && value === true) {
          return validar_aprendiz.set(obj, prop, value);
        } else {
          obj[prop] = value;
          return true;
        }
      }
    });

    if (aprendizProxy.aprendiz) {
      const nombres = usuario.name.split(' ');

      if (nombres.length > 2 || usuario.user.includes('ADSO')) {
        usuario.name = transformarNombre(usuario.name);
      }
    }
  });

  return datos;
}

cargar_archivo_JSON(ruta_archivo)
  .then((datos) => {
    if (datos) {
      console.log('Archivo cargado correctamente:', datos);
      const datosModificados = modificarUsuarios(datos);
      console.log('Datos modificados:', JSON.stringify(datosModificados, null, 2));
    }
  })
  .catch((error) => {
    console.error('Error al cargar el archivo JSON:', error);
  });

