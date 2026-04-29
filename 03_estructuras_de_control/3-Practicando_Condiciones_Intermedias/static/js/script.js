console.log("Conexion exitosa con JS...");

// EJERCICIO 11
// Resultado esperado en alert:
// `El estudiante Juan tiene nota 6.5 y su resultado es: Excelente rendimiento`

function ejercicio11() {
  let nombre = `Juan`;
  let nota = 6.5;
  let resultado = `Excelente rendimiento`;
  alert(`El estudiante ${nombre} tiene nota ${nota} y su resultado es: ${resultado}`);
}


// EJERCICIO 12
// Resultado esperado en alert:
// `El nombre convertido es: DANIEL PÉREZ y tiene 12 caracteres`

function ejercicio12() {
  let nombreOriginal = `Daniel Perez`;
  let nombreMayuscula = nombreOriginal.toUpperCase();
  let cantidadCaracteres = nombreOriginal.length;
  alert(`El nombre convertido es: ${nombreMayuscula} y tiene ${cantidadCaracteres} caracteres`);
}


// EJERCICIO 13
// Resultado esperado en alert:
// `El correo convertido es: ejemplo@gmail.com y el resultado es: correo válido`

function ejercicio13() {
  let correoOriginal = `EJEMPLO@GMAIL.COM`;
  let correoConvertido = correoOriginal.toLowerCase();
  let resultado = correoConvertido.includes(`@`) ? `correo valido` : `correo invalido`;
  alert(`El correo convertido es: ${correoConvertido} y el resultado es: ${resultado}`);
}


// EJERCICIO 14
// Resultado esperado en alert:
// `La frase "Estoy aprendiendo JavaScript" tiene 28 caracteres y corresponde a una frase larga`

function ejercicio14() {
  let frase = `Estoy aprendiendo JavaScript`;
  let cantidadCaracteres = frase.length;
  let tipoFrase = cantidadCaracteres > 20 ? `una frase larga` : `una frase corta`;
  alert(`La frase "${frase}" tiene ${cantidadCaracteres} caracteres y corresponde a ${tipoFrase}`);
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
  alert(`El producto ${nombreMayuscula} tiene un precio final de $${precioFinal}`);
}
