console.log("Conexion exitosa con JS...");

// EJERCICIO 11
// Resultado esperado en alert:
// `El estudiante Juan tiene nota 6.5 y su resultado es: Excelente rendimiento`

function ejercicio11() {
  let nombre = `Juan`;
  let nota = 6.5;
  let resultado = `Excelente rendimiento`;
  alert(
    `El estudiante ${nombre} tiene nota ${nota} y su resultado es: ${resultado}`,
  );
}

// EJERCICIO 12
// Resultado esperado en alert:
// `El nombre convertido es: DANIEL PÉREZ y tiene 12 caracteres`

function ejercicio12() {
  let nombreOriginal = `Daniel Perez`;
  let nombreMayuscula = nombreOriginal.toUpperCase();
  let cantidadCaracteres = nombreOriginal.length;
  alert(
    `El nombre convertido es: ${nombreMayuscula} y tiene ${cantidadCaracteres} caracteres`,
  );
}

// EJERCICIO 13
// Resultado esperado en alert:
// `El correo convertido es: ejemplo@gmail.com y el resultado es: correo válido`

function ejercicio13() {
  let correoOriginal = `EJEMPLO@GMAIL.COM`;
  let correoConvertido = correoOriginal.toLowerCase();
  let resultado = correoConvertido.includes(`@`)
    ? `correo valido`
    : `correo invalido`;
  alert(
    `El correo convertido es: ${correoConvertido} y el resultado es: ${resultado}`,
  );
}

// EJERCICIO 14
// Resultado esperado en alert:
// `La frase "Estoy aprendiendo JavaScript" tiene 28 caracteres y corresponde a una frase larga`

function ejercicio14() {
  let frase = `Estoy aprendiendo JavaScript`;
  let cantidadCaracteres = frase.length;
  let tipoFrase =
    cantidadCaracteres > 20 ? `una frase larga` : `una frase corta`;
  alert(
    `La frase "${frase}" tiene ${cantidadCaracteres} caracteres y corresponde a ${tipoFrase}`,
  );
}

// EJERCICIO 15
// Resultado esperado en alert:
// `El producto TECLADO tiene un precio final de $45000`

function ejercicio15() {
  let producto = `teclado`;
  let precioBase = 50000;
  let descuento = 5000;
  let nombreMayuscula = producto.toUpperCase();
  let precioFinal = precioBase - descuento;
  alert(
    `El producto ${nombreMayuscula} tiene un precio final de $${precioFinal}`,
  );
}

/* Ejercicios extras:

Ejercicio 16: Boleta de compra con clasificación de cliente

Crear una función que almacene el nombre de un cliente, 
el nombre de un producto y el precio. Luego:
Convertir el nombre del cliente a mayúsculas
Determinar el tipo de cliente según el precio:
Mayor o igual a 100.000 → Cliente Premium (20% descuento)
Mayor o igual a 50.000 → Cliente Frecuente (10% descuento)
Menor a 50.000 → Cliente Normal (sin descuento)

Mostrar:
Nombre del cliente en mayúsculas
Producto en minúsculas
Precio original
Precio final
Tipo de cliente */

function ejercicio16() {
  let nombreCliente = "Juan Perez";
  let nombreProducto = "Monitor Gamer";
  let precioOriginal = 120000;
  let clienteMayus = nombreCliente.toUpperCase();
  let productoMinus = nombreProducto.toLowerCase();
  let tipoCliente = "";
  let descuento = 0;
  if (precioOriginal >= 100000) {
    tipoCliente = "Cliente Premium";
    descuento = 0.2;
  } else if (precioOriginal >= 50000) {
    tipoCliente = "Cliente Frecuente";
    descuento = 0.1;
      } else {
        tipoCliente = "Cliente Normal";
        descuento = 0;
    }
    let precioFinal = precioOriginal - (precioOriginal * descuento);
    alert("Cliente: " + clienteMayus + "\nPrecio Final: $" + precioFinal);
}

/* Ejercicio 17: Análisis de frase con puntuación
Crear una función que almacene una frase y un puntaje numérico. Luego:
Convertir la frase a minúsculas
Contar la cantidad de caracteres
Clasificar el puntaje:
90 o más → Excelente
70 o más → Bueno
Menor a 70 → Insuficiente

Mostrar:
Frase transformada
Largo de la frase
Puntaje
Clasificación */

function ejercicio17() {
  let frase = "¡HOLA, esto es un EJEMPLO!";
  let puntaje = 85;
  let fraseMinuscula = frase.toLowerCase();
  let largoFrase = frase.length;
  let clasificacion = "";
  if (puntaje >= 90) {
    clasificacion = "Excelente";
  } else if (puntaje >= 70) {
    clasificacion = "Bueno";
  } else {
    clasificacion = "Insuficiente";
  }
  alert(`Frase transformada: ${fraseMinuscula}
      \nLargo de la frase: ${largoFrase}
      \nPuntaje: ${puntaje}
      \nClasificación: ${clasificacion}`);
}

/*Ejercicio 18: Evaluación de tres notas con estado final

Crear una función que almacene el nombre de un estudiante y tres notas. Luego:

Calcular el promedio
Convertir el nombre a mayúsculas
Determinar el estado:
Promedio ≥ 6.0 → Destacado
Promedio ≥ 4.0 → Aprobado
Promedio < 4.0 → Reprobado*/

function ejercicio18() {
  let nombreEstudiante = "Ana Lopez";
  let nota1 = 5.5;
  let nota2 = 6.2;
  let nota3 = 7.0;
  let promedio = (nota1 + nota2 + nota3) / 3;
  let nombreMayus = nombreEstudiante.toUpperCase();
  let estado = "";
  if (promedio >= 6.0) {
    estado = "Destacado";
  } else if (promedio >= 4.0) {
    estado = "Aprobado";
  } else {
    estado = "Reprobado";
  }
  alert(`Estudiante: ${nombreMayus}
      \nPromedio: ${promedio.toFixed(1)}
      \nEstado: ${estado}`);
}
