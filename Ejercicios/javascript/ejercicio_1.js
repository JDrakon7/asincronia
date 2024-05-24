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



// EJERCICIOS 
//Crea una función que muestre la hora actual en formato de reloj digital(HH: MM: SS) y se actualice cada segundo.

function reloj() {
  setInterval(function () {
    let ahora = new Date();
    let horas = String(ahora.getHours()).padStart(2, '0')
    let minutos = String(ahora.getMinutes()).padStart(2, '0')
    let segundos = String(ahora.getSeconds()).padStart(2, '0')
    console.log(`${horas}:${minutos}:${segundos}`)
  }, 1000);
}
reloj()


//Crea una función que tome un número de segundos y realice una cuenta regresiva hasta llegar a cero.

function regresiva(segundos) {
  let tiempo_restante = segundos;
  let intervalo = setInterval(function () {
    console.log(tiempo_restante)
    tiempo_restante--;
    if (tiempo_restante < 0) {
      clearInterval(intervalo)
      console.log("Secuencia terminada , tiempo terminado")
    }

  }, 1000)
}

regresiva(10)

//Crea una función que muestre una serie de mensajes en la consola en intervalos de tiempo específicos.

function mostrando_mensajes() {
  let mensajes = ["Mensaje 1", "Mensaje 2", "Mensaje 3", "Mensaje 4"];
  let indice = 0;
  let intervalo = setInterval(function () {
    console.log(mensajes[indice]);
    indice++;
    if (indice >= mensajes.length) {
      clearInterval(intervalo);
      console.log("Todos los mensajes han sido mostrados.");
    }
  }, 2000);
}

mostrando_mensajes();
