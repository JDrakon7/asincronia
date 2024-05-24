// Crea tres Promises consecutivas, donde cada una se resuelva después de 1 segundo y
// devuelva un número diferente. Luego, encadena las tres Promises para sumar los resultados
// y mostrar el resultado final.

// Primera Promise que devuelve el número 5 después de 1 segundo
const promise_1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 1000); // 1000 milisegundos = 1 segundo
});

// Segunda Promise que devuelve el número 10 después de 1 segundo
const promise_2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 1000); // 1000 milisegundos = 1 segundo
});

// Tercera Promise que devuelve el número 15 después de 1 segundo
const promise_3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(15);
  }, 1000); // 1000 milisegundos = 1 segundo
});

// Encadenamos las tres Promises para sumar los resultados
Promise.all([promise_1, promise_2, promise_3])
  .then((results) => {
    // Sumamos los resultados
    const sum = results.reduce((total, num) => total + num, 0);
    // Mostramos el resultado final
    console.log('Resultado final:', sum);
  })
  .catch((error) => {
    console.error('Error:', error);
  });






  // programa más complejo que involucre múltiples operaciones asíncronas, manejo de errores y encadenamiento de Promesas. En este caso, crearemos un flujo que simula el proceso de compra en una tienda en línea. Este proceso incluirá:

// Verificar la disponibilidad de un producto.
// Calcular el costo total de la compra.
// Procesar el pago.
// Enviar una confirmación de la compra.
// Cada etapa tendrá su propia Promise y manejo de errores, y al final se imprimirá un mensaje de éxito o un mensaje de error en caso de que algo falle.


// Función que verifica la disponibilidad de un producto (simulada)
function verificarDisponibilidadProducto(productoId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulamos la verificación de disponibilidad
      const disponibilidad = Math.random() < 0.8; // 80% de probabilidad de estar disponible
      if (disponibilidad) {
        resolve({ productoId, disponible: true });
      } else {
        reject(new Error('El producto está agotado'));
      }
    }, 1000); // Simulamos 1 segundo de tiempo de espera
  });
}

// Función que calcula el costo total de la compra
function calcularCostoTotal(productoId, cantidad) {
  // Supongamos que cada producto tiene un precio fijo
  const precioUnitario = 50;
  const costoTotal = precioUnitario * cantidad;
  return Promise.resolve({ productoId, cantidad, costoTotal });
}

// Función que simula el procesamiento del pago
function procesarPago(costoTotal) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulamos el procesamiento del pago (éxito en el 90% de los casos)
      const exito = Math.random() < 0.9; // 90% de probabilidad de éxito
      if (exito) {
        resolve({ costoTotal, pagoExitoso: true });
      } else {
        reject(new Error('El pago no pudo ser procesado'));
      }
    }, 2000); // Simulamos 2 segundos de tiempo de espera
  });
}

// Función que envía la confirmación de la compra
function enviarConfirmacionCompra(datosCompra) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulamos el envío de la confirmación
      resolve({ ...datosCompra, confirmacionEnviada: true });
    }, 1000); // Simulamos 1 segundo de tiempo de espera
  });
}

// Flujo principal del proceso de compra
verificarDisponibilidadProducto('producto123')
  .then((producto) => {
    console.log('Producto disponible:', producto);
    return calcularCostoTotal(producto.productoId, 2); // Supongamos que compramos 2 unidades
  })
  .then((costoTotal) => {
    console.log('Costo total de la compra:', costoTotal.costoTotal);
    return procesarPago(costoTotal.costoTotal);
  })
  .then((resultadoPago) => {
    console.log('Pago procesado con éxito:', resultadoPago);
    return enviarConfirmacionCompra(resultadoPago);
  })
  .then((confirmacion) => {
    console.log('Confirmación de compra enviada:', confirmacion);
    console.log('¡Compra realizada con éxito!');
  })
  .catch((error) => {
    console.error('Error en la compra:', error.message);
  });


//   Simulamos la disponibilidad del producto con una probabilidad del 80% de estar disponible.
// Calculamos el costo total de la compra.
// Procesamos el pago con una probabilidad del 90% de éxito.
// Enviamos la confirmación de compra.
// Cada etapa está encapsulada en una Promise y se manejan los errores con .catch() al final. Al ejecutar este código, se simula el proceso de compra y se muestra el resultado final o los errores en caso de que algo falle.






