// Realiza tres Promises, algunas de las cuales se resuelvan y otras se rechacen. Utiliza
// Promise.allSettled() para obtener información sobre el estado de todas las Promises.

// Creamos tres Promises: una se resuelve, otra se rechaza y la tercera se resuelve después de un tiempo
const promise1 = Promise.resolve('Promise resuelta'); // Una Promise que se resuelve inmediatamente con un valor
const promise2 = Promise.reject(new Error('Promise rechazada')); // Una Promise que se rechaza inmediatamente con un error
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resuelta después de un tiempo'); // Una Promise que se resuelve después de 2 segundos
  }, 2000); // 2000 milisegundos = 2 segundos
});

// Usamos Promise.allSettled() para obtener información sobre el estado de todas las Promises
Promise.allSettled([promise1, promise2, promise3])
  .then((results) => {
    // Mostramos la información de todas las Promises
    console.log('Información de todas las Promises:');
    results.forEach((result) => {
      if (result.status === 'fulfilled') {
        // Si la Promise se resolvió, mostramos su valor
        console.log('Promise resuelta:', result.value);
      } else if (result.status === 'rejected') {
        // Si la Promise se rechazó, mostramos el motivo del rechazo
        console.log('Promise rechazada:', result.reason.message);
      }
    });
  })

  .catch((error) => {
    // Capturamos cualquier error que ocurra durante el manejo de las Promises
    console.error('Error:', error);
  });
