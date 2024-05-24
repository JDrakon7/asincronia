// Crear un objeto proxy usando la clase Proxy

// Objeto objetivo
const objeto_Objetivo = {
  nombre: 'Juan',
  edad: 23
};

// Crear un objeto proxy
const proxy_Objeto = new Proxy(objeto_Objetivo, {
  // Handler que define el comportamiento del proxy
  get: function (target, propiedad) {
    console.log(`Obteniendo propiedad "${propiedad}"`);
    // Retornamos el valor de la propiedad del objeto objetivo
    return target[propiedad];
  },
  set: function (target, propiedad, valor) {
    console.log(`Estableciendo propiedad "${propiedad}" a "${valor}"`);
    // Actualizamos la propiedad en el objeto objetivo
    target[propiedad] = valor;
    // Indicamos que la operación fue exitosa
    return true;
  },
  deleteProperty: function (target, propiedad) {
    console.log(`Eliminando propiedad "${propiedad}"`);
    // Eliminamos la propiedad del objeto objetivo
    delete target[propiedad];
    // Indicamos que la operación fue exitosa
    return true;
  }
});

// Acceder y modificar propiedades a través del proxy
console.log(proxy_Objeto.nombre); // Accede a la propiedad "nombre" (get)
console.log(proxy_Objeto.edad); // Accede a la propiedad "edad" (get)

proxy_Objeto.edad = 27; // Modifica la propiedad "edad" (set)
console.log(proxy_Objeto); // Muestra el objeto proxy completo
delete proxy_Objeto.edad; // Elimina la propiedad "edad" (deleteProperty)
console.log(proxy_Objeto); // Muestra el objeto proxy actualizado















//VARIANTE

// Objeto objetivo
const objeto_Objetivo1 = {
  nombre: 'Juan',
  edad: 23
};

// Crear un objeto proxy con validaciones
const proxy_Objeto = new Proxy(objeto_Objetivo1, {
  // Handler que define el comportamiento del proxy
  get: function (target, propiedad) {
    console.log(`Obteniendo propiedad "${propiedad}"`);
    // Retornamos el valor de la propiedad del objeto objetivo
    return target[propiedad];
  },
  set: function (target, propiedad, valor) {
    console.log(`Estableciendo propiedad "${propiedad}" a "${valor}"`);

    // Validación específica para la propiedad "edad"
    if (propiedad === 'edad') {
      // Verificar que el valor sea un número y esté dentro del rango
      if (typeof valor !== 'number' || valor < 0 || valor > 150) {
        throw new TypeError('La edad debe ser un número entre 0 y 150');
      }
    }

    // Actualizar la propiedad en el objeto objetivo si la validación pasa
    target[propiedad] = valor;
    // Indicar que la operación fue exitosa
    return true;
  },
  deleteProperty: function (target, propiedad) {
    console.log(`Eliminando propiedad "${propiedad}"`);
    // Eliminar la propiedad del objeto objetivo
    delete target[propiedad];
    // Indicar que la operación fue exitosa
    return true;
  }
});

// Acceder y modificar propiedades a través del proxy
console.log(proxy_Objeto.nombre); // Acceder a la propiedad "nombre" (get)
console.log(proxy_Objeto.edad); // Acceder a la propiedad "edad" (get)

proxy_Objeto.edad = 27; // Intentar modificar la propiedad "edad" a un valor válido
console.log(proxy_Objeto); // Mostrar el objeto proxy completo

try {
  proxy_Objeto.edad = 'abc'; // Intentar asignar un valor no válido a "edad"
} catch (error) {
  console.error(error.message); // Mostrar el error de tipo TypeError
}

console.log(proxy_Objeto); // Mostrar el objeto proxy actualizado
delete proxy_Objeto.edad; // Eliminar la propiedad "edad" (deleteProperty)
console.log(proxy_Objeto); // Mostrar el objeto proxy final


// Objeto Objetivo: Comenzamos definiendo un objeto llamado objeto_Objetivo, el cual tiene dos propiedades: nombre con el valor 'Juan' y edad con el valor 23. Este será nuestro objeto original sobre el cual aplicaremos el proxy.
// javascript
// Copiar código
// const objeto_Objetivo = {
//   nombre: 'Juan',
//   edad: 23
// };
// Creación del Proxy: Utilizamos la clase Proxy de JavaScript para crear un objeto proxy llamado proxy_Objeto. Este proxy estará vinculado al objeto objeto_Objetivo y tendrá un handler que define el comportamiento del proxy para las operaciones como obtener (get), establecer (set), y eliminar (deleteProperty) propiedades.
// javascript
// Copiar código
// const proxy_Objeto = new Proxy(objeto_Objetivo, {
//   // Handler que define el comportamiento del proxy
//   // Aquí se definen las funciones get, set y deleteProperty
// });
// Handler del Proxy - get: En el handler del proxy, definimos la función get que se activa cuando se intenta obtener el valor de una propiedad del objeto proxy. En este caso, simplemente muestra un mensaje en la consola indicando la propiedad que se está obteniendo y luego devuelve el valor de la propiedad desde el objeto objetivo.
// javascript
// Copiar código
// get: function (target, propiedad) {
//   console.log(`Obteniendo propiedad "${propiedad}"`);
//   return target[propiedad];
// }
// Handler del Proxy - set: En el handler del proxy, definimos la función set que se activa cuando se intenta establecer el valor de una propiedad del objeto proxy. Aquí agregamos una validación específica para la propiedad "edad". Si la propiedad que se intenta establecer es "edad", verificamos que el valor sea un número y esté dentro del rango válido (entre 0 y 150). Si la validación pasa, actualizamos la propiedad en el objeto objetivo; de lo contrario, lanzamos un error de tipo TypeError.
// javascript
// Copiar código
// set: function (target, propiedad, valor) {
//   if (propiedad === 'edad') {
//     if (typeof valor !== 'number' || valor < 0 || valor > 150) {
//       throw new TypeError('La edad debe ser un número entre 0 y 150');
//     }
//   }
//   target[propiedad] = valor;
//   return true;
// }
// Handler del Proxy - deleteProperty: En el handler del proxy, definimos la función deleteProperty que se activa cuando se intenta eliminar una propiedad del objeto proxy. Aquí simplemente eliminamos la propiedad del objeto objetivo y retornamos true para indicar que la operación fue exitosa.
// javascript
// Copiar código
// deleteProperty: function (target, propiedad) {
//   delete target[propiedad];
//   return true;
// }
// Uso del Proxy: Luego de definir el objeto proxy y su handler, podemos utilizarlo para acceder, modificar y eliminar propiedades del objeto objetivo. Por ejemplo, podemos obtener el valor de una propiedad, modificar la propiedad "edad" con un valor válido, intentar asignar un valor no válido a "edad" (lo cual lanzará un error), y finalmente eliminar la propiedad "edad".
// javascript
// Copiar código
// console.log(proxy_Objeto.nombre); // Acceder a la propiedad "nombre" (get)
// console.log(proxy_Objeto.edad); // Acceder a la propiedad "edad" (get)

// proxy_Objeto.edad = 27; // Intentar modificar la propiedad "edad" a un valor válido
// console.log(proxy_Objeto); // Mostrar el objeto proxy completo

// try {
//   proxy_Objeto.edad = 'abc'; // Intentar asignar un valor no válido a "edad"
// } catch (error) {
//   console.error(error.message);
// }

// console.log(proxy_Objeto); // Mostrar el objeto proxy actualizado
// delete proxy_Objeto.edad; // Eliminar la propiedad "edad" (deleteProperty)
// console.log(proxy_Objeto); // Mostrar el objeto proxy final
// Al ejecutar este código, obtendrás mensajes en la consola que indican las acciones realizadas por el proxy y el resultado de las operaciones de acceso, modificación y eliminación de propiedades. La validación en la propiedad "edad" asegura que solo se puedan asignar valores numéricos válidos dentro del rango especificado.