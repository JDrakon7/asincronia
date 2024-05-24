// ¿Cuál es el resultado del código a continuación?

// Definición de la Variable i:
let i = 0;
//Configuración de setTimeout:
setTimeout(() => alert(i), 100);
//Este bucle incrementa la variable i desde 0 hasta 100000000. Dado que este bucle realiza muchas iteraciones, tomará más de 100 milisegundos en completarse.
for (let j = 0; j < 100000000; j++) {
  i++;
}
//Cuando la alerta finalmente se muestra, el valor de i es 100000000, ya que el bucle ha terminado y i se ha incrementado hasta ese valor.
alert(i); // muestra 100000000

//El setTimeout programado no puede ejecutarse hasta que el bucle for haya completado todas sus iteraciones, lo que toma más de 100 milisegundos. Por lo tanto, la alerta muestra el valor final de i que es 100000000.

//Lo hice aunque ya estaba repetido jeje
