//En el siguiente código hay una llamada programada setTimeout, luego se ejecuta un cálculo
//pesado que demora más de 100 ms en finalizar.
//¿Cuándo se ejecutará la función programada y por qué se ejecutará?
//a) Después del bucle.
//b) Antes del bucle.
//c) Al comienzo del bucle.
//¿Qué va a mostrar alert()


let i = 0; // Inicializa i con 0
setTimeout(() => alert(i), 100); // Programa un alert para después de 100 ms
for (let j = 0; j < 100000000; j++) { // Bucle pesado que incrementa i
  i++;
}
// Después del bucle, se ejecutará el alert y mostrará: 100000000

// RESPUESTA CORRECTA LA B : La funcion se ejecuta despues de que el bucle "for" haya terminado , debido a que se bloquea mientras este ejecutandose
// Que va a mostrar el alert() Mostrata el la variable i , es decir el valor 0

// La función programada con setTimeout está configurada para ejecutarse después de 100 milisegundos.
// Sin embargo,debido a que JavaScript es de un solo hilo y el bucle pesado se ejecuta en el mismo hilo,
// el temporizador no podrá ejecutar la función programada hasta que el bucle haya terminado.


