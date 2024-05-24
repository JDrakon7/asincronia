// Usar un proxy para la validación de los valores de propiedades
// • Cuando declaremos que el atributo es numérico solo perimimos que ingresen
// números
// • Cuando declaremos que el atributo es alfanumérico solo permitimos que ingresen
// letras
// • Cuando declaremos que el atributo es un email, solo permitimos que ingresen
// correos
// • Cuando declaremos que el atributo es de tipo date, solo permitimos que ingresen
// fechas
// • Para todos los atributos no se puede ingresar espacios en blanco tanto al inicio como
// al final de estos y se debe mostrar el error personalizado por consola



// Función para validar valores numéricos
function validar_numero(valor) {
  return !isNaN(parseFloat(valor)) && isFinite(valor);
}

// Función para validar valores alfanuméricos
function validar_alfanumerico(valor) {
  return /^[a-zA-Z]+$/.test(valor);
}

// Función para validar emails
function validar_email(valor) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
}

// Función para validar fechas
function validar_fecha(valor) {
  return !isNaN(Date.parse(valor));
}

// Crear un objeto proxy para la validación
const proxy_validacion = new Proxy({}, {
  set: function (target, propiedad, valor) {
    if (propiedad === 'numerico') {
      console.log("Proxy numero aprobado")
      if (!validar_numero(valor)) {
        console.error('Error: el valor debe ser numérico');
        return false;
      }
    } else if (propiedad === 'alfanumerico') {
      console.log("Proxy alfanumerico aprobado")
      if (!validar_alfanumerico(valor)) {
        console.error('Error: el valor debe ser alfanumérico');
        return false;
      }
    } else if (propiedad === 'email') {
      console.log("Proxy email aprobado")
      if (!validar_email(valor)) {
        console.error('Error: el valor debe ser un email válido');
        return false;
      }
    } else if (propiedad === 'fecha') {
      console.log("Proxy fecha aprobado")
      if (!validar_fecha(valor)) {
        console.error('Error: el valor debe ser una fecha válida');
        return false;
      }
    } else {
      if (typeof valor === 'string' && (valor.trim() !== valor || valor.trim().length === 0))
        console.log("Proxy Sin espacios en blanco al incio o al final aprobado")
      {
        console.error('Error: no se permiten espacios en blanco al inicio o al final');
        return false;
      }
    }

    target[propiedad] = valor;
    return true;
  }
});

// Ejemplo de uso del proxy para la validación
proxy_validacion.numerico = 123; // Correcto: valor numérico
proxy_validacion.numerico = 'abc'; // Error: el valor debe ser numérico
proxy_validacion.alfanumerico = 'abcd'; // Correcto: valor alfanumérico
proxy_validacion.alfanumerico = '123'; // Error: el valor debe ser alfanumérico
proxy_validacion.email = 'correo@dominio.com'; // Correcto: email válido
proxy_validacion.email = 'correoinvalido.com'; // Error: el valor debe ser un email válido
proxy_validacion.fecha = '2024-05-25'; // Correcto: fecha válida
proxy_validacion.fecha = 'fecha'; // Error: el valor debe ser una fecha válida
proxy_validacion.otro = '  texto  '; // Error: no se permiten espacios en blanco al inicio o al final





// Función para validar valores numéricos
// Retorna true si el valor es un número finito, false en caso contrario
function validar_numero(valor) {
  return !isNaN(parseFloat(valor)) && isFinite(valor);
}

// Función para validar valores alfanuméricos
// Retorna true si el valor contiene solo letras (mayúsculas o minúsculas), false en caso contrario
function validar_alfanumerico(valor) {
  return /^[a-zA-Z]+$/.test(valor);
}

// Función para validar emails
// Retorna true si el valor tiene el formato de un email, false en caso contrario
function validar_email(valor) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
}

// Función para validar fechas
// Retorna true si el valor puede ser convertido a una fecha válida, false en caso contrario
function validar_fecha(valor) {
  return !isNaN(Date.parse(valor));
}

// Crear un objeto proxy para la validación
const proxy_validacion = new Proxy({}, {
  // Método 'set' que se ejecuta cada vez que se intenta asignar un valor a una propiedad del proxy
  set: function (target, propiedad, valor) {
    // Validación para la propiedad 'numerico'
    if (propiedad === 'numerico') {
      console.log("Proxy numero aprobado");
      if (!validar_numero(valor)) {
        // Si la validación falla, muestra un mensaje de error y retorna false para evitar la asignación
        console.error('Error: el valor debe ser numérico');
        return false;
      }
    } 
    // Validación para la propiedad 'alfanumerico'
    else if (propiedad === 'alfanumerico') {
      console.log("Proxy alfanumerico aprobado");
      if (!validar_alfanumerico(valor)) {
        console.error('Error: el valor debe ser alfanumérico');
        return false;
      }
    } 
    // Validación para la propiedad 'email'
    else if (propiedad === 'email') {
      console.log("Proxy email aprobado");
      if (!validar_email(valor)) {
        console.error('Error: el valor debe ser un email válido');
        return false;
      }
    } 
    // Validación para la propiedad 'fecha'
    else if (propiedad === 'fecha') {
      console.log("Proxy fecha aprobado");
      if (!validar_fecha(valor)) {
        console.error('Error: el valor debe ser una fecha válida');
        return false;
      }
    } 
    // Validación para evitar espacios en blanco al inicio o al final de cualquier valor
    else {
      if (typeof valor === 'string' && (valor.trim() !== valor || valor.trim().length === 0)) {
        console.log("Proxy Sin espacios en blanco al incio o al final aprobado");
        console.error('Error: no se permiten espacios en blanco al inicio o al final');
        return false;
      }
    }

    // Si pasa todas las validaciones, se asigna el valor a la propiedad
    target[propiedad] = valor;
    return true;
  }
});

// Ejemplo de uso del proxy para la validación

// Asigna un valor numérico correcto
proxy_validacion.numerico = 123; // Correcto: valor numérico

// Intenta asignar un valor no numérico
proxy_validacion.numerico = 'abc'; // Error: el valor debe ser numérico

// Asigna un valor alfanumérico correcto
proxy_validacion.alfanumerico = 'abcd'; // Correcto: valor alfanumérico

// Intenta asignar un valor no alfanumérico
proxy_validacion.alfanumerico = '123'; // Error: el valor debe ser alfanumérico

// Asigna un email válido
proxy_validacion.email = 'correo@dominio.com'; // Correcto: email válido

// Intenta asignar un email no válido
proxy_validacion.email = 'correoinvalido.com'; // Error: el valor debe ser un email válido

// Asigna una fecha válida
proxy_validacion.fecha = '2024-05-25'; // Correcto: fecha válida

// Intenta asignar una fecha no válida
proxy_validacion.fecha = 'fecha'; // Error: el valor debe ser una fecha válida

// Intenta asignar un valor con espacios en blanco al inicio o al final
proxy_validacion.otro = '  texto  '; // Error: no se permiten espacios en blanco al inicio o al final
