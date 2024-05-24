// Crea un bucle que realice llamadas asincrónicas utilizando async/await para procesar una
// lista de elementos uno por uno.

// Lista de URLs a procesar
const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
  ];
  
  // Función asincrónica para procesar una URL y obtener su contenido
  async function procesarURL(url) {
    try {
      // Realizamos la llamada asincrónica a la URL
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('No se pudo obtener el contenido de la URL.');
      }
      // Parseamos la respuesta como JSON y la retornamos
      return await response.json();
    } catch (error) {
      // Capturamos y manejamos cualquier error que ocurra durante la llamada
      console.error('Error al procesar la URL:', error.message);
      return null; // Retornamos null en caso de error
    }
  }
  
  // Función asincrónica para procesar todas las URLs en la lista una por una
  async function procesarListaUrls(urls) {
    for (const url of urls) {
      const contenido = await procesarURL(url);
      if (contenido) {
        console.log('Contenido de la URL', url, ':', contenido);
      }
    }
    console.log('Procesamiento de la lista de URLs completado.');
  }
  
  // Llamamos a la función para procesar la lista de URLs
  procesarListaUrls(urls);
  