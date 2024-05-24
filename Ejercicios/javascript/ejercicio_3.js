// Crear una función map que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • obtenga el resultado
// • lo pushee a un nuevo array
// • devuelva el array final con el resultado de cada una de las llamadas al callback.


// El ejercicio consiste en crear una función map en JavaScript que tome un array y un callback como argumentos.
// Para cada elemento del array, la función ejecutará el callback pasándole dicho elemento como argumento.
// La función debe obtener el resultado de cada llamada al callback y agregarlo a un nuevo array.
// Finalmente, la función debe devolver el nuevo array con los resultados de cada llamada al callback.


const numeros = [5, 8, 19, 22] // Definir el array numeros 
const duplicar = x => x * 2 //Definir la funcion duplicar
const resultado = numeros.map(duplicar) //  Uso de Map  , el cual realizara , Tome cada elemento del array numeros , Aplique la función duplicar a cada elemento , Cree un nuevo array resultado con los resultados de cada llamada a duplicar
console.table(resultado)


//Convertir cada elemento a una cadena Supongamos que tenemos un array de números y queremos convertir cada número a una cadena.

const numero = [1, 2, 3, 4, 5];
const convertirACadena = num => num.toString();
const resultad = numero.map(convertirACadena);
console.table(resultad);
// Resultado esperado: ['1', '2', '3', '4', '5']



//  Elevar cada número al cuadrado Queremos tomar un array de números y devolver un nuevo array con cada número elevado al cuadrado.    

const numeros2 = [1, 2, 3, 4, 5];
const alCuadrado = num => num * num;
const resultado2 = numeros.map(alCuadrado);
console.table(resultado2);
// Resultado esperado: [1, 4, 9, 16, 25]


//  Obtener la longitud de cada cadena Dado un array de cadenas, queremos obtener un nuevo array con la longitud de cada cadena.

const cadenas = ['apple', 'banana', 'cherry'];
const obtenerLongitud = str => str.length;
const resultado3 = cadenas.map(obtenerLongitud);
console.table(resultado3);
// Resultado esperado: [5, 6, 6]



// Incrementar cada número por 10  Queremos tomar un array de números y devolver un nuevo array con cada número incrementado por 10.

const numeros4 = [10, 20, 30, 40, 50];
const incrementarPorDiez = num => num + 10;
const resultado4 = numeros.map(incrementarPorDiez);
console.table(resultado4);
// Resultado esperado: [20, 30, 40, 50, 60]

// Añadir un prefijo a cada cadena Dado un array de nombres, queremos añadir un prefijo "Sr." a cada nombre.

const nombres = ['Juan', 'Ana', 'Luis'];
const agregarPrefijo = nombre => 'Sr. ' + nombre;
const resultado6 = nombres.map(agregarPrefijo);
console.table(resultado6);
// Resultado esperado: ['Sr. Juan', 'Sr. Ana', 'Sr. Luis']



