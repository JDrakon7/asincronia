// 18. Después de realizar una llamada a un archivo local en formato json, utiliza el método then()
// para filtrar los datos y mostrar solo los elementos que cumplan ciertos criterios (por ejemplo,
// mostrar solo los nombres que comiencen con "A").

// Hacemos una solicitud para obtener el archivo JSON local
fetch('/Ejercicios/javascript/archivo.json')
  .then(response => {
    // Verificamos si la respuesta es exitosa
    if (!response.ok) {
      throw new Error('Ocurrió un error al obtener el archivo JSON.');
    }
    // Parseamos la respuesta como JSON y la retornamos
    return response.json();
  })
  .then(data => {
    // Filtramos los datos para mostrar solo los nombres que comiencen con "A"
    const nombresConA = data.filter(item => item.nombre.startsWith('A'));
    // Mostramos los nombres filtrados en la consola
    console.log('Nombres que comienzan con "A":', nombresConA);
  })
  .catch(error => {
    // Capturamos y mostramos cualquier error que ocurra
    console.error('Error:', error.message);
  });


  // [
  //   { "id": 1, "nombre": "Ana", "edad": 25, "genero": "Femenino" },
  //   { "id": 2, "nombre": "Pedro", "edad": 30, "genero": "Masculino" },
  //   { "id": 3, "nombre": "Alejandro", "edad": 40, "genero": "Masculino" },
  //   { "id": 4, "nombre": "María", "edad": 35, "genero": "Femenino" },
  //   { "id": 5, "nombre": "Juan", "edad": 28, "genero": "Masculino" }
  // ]
  

  // Y ahora vamos a filtrar los datos para mostrar solo los usuarios que tienen más de 30 años y son de género masculino.
  // Hacemos una solicitud para obtener el archivo JSON local
fetch('/Ejercicios/javascript/archivo.json')
.then(response => {
  // Verificamos si la respuesta es exitosa
  if (!response.ok) {
    throw new Error('Ocurrió un error al obtener el archivo JSON.');
  }
  // Parseamos la respuesta como JSON y la retornamos
  return response.json();
})
.then(data => {
  // Filtramos los datos para mostrar solo los usuarios que tienen más de 30 años y son de género masculino
  const usuariosFiltrados = data.filter(usuario => usuario.edad > 30 && usuario.genero === 'Masculino');
  // Mostramos los usuarios filtrados en la consola
  console.log('Usuarios mayores de 30 años y de género masculino:', usuariosFiltrados);
})
.catch(error => {
  // Capturamos y mostramos cualquier error que ocurra
  console.error('Error:', error.message);
});


//En este código, hemos añadido un criterio adicional al filtrado de datos. Ahora estamos filtrando los usuarios que tienen más de 30 años y son de género masculino.