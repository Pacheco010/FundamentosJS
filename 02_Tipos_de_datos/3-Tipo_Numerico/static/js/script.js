console.log("Conexion exitosa con JS");

// Tipos de datos Numericos

//1. - Declaracion de numeros (creacion de variables Numericas)
let edad = 31;
let temperatura = -5;
let precio = 19990;
let pi =3.1416;
let descuento = 0.25;

//Operaciones basicas
let suma = 10 + 5; //15
let resta = 10 - 5; //5
let multiplicacion = 10 * 5; //50
let division = 10 / 5; //2
let modulo = 10 % 3; //1
let potencia = 2 ** 3; //8

console.log(`El Resultado de 2 elevado a 3 en potencia es: ${2**3}`);

//3. - Incremento y decremento (suma(++) o resta(--) 1)
let numero = 10;
numero++; //11
numero--; //9

//4. - Numeros con decimales
let promedio = 6.5;
let altura = 1.67;
let peso = 90.3;

//5. - Numeros grandes y Notacion cientifica
let poblacion = 1e6; //10000
console.log("Numero grande 1e6: " + poblacion)
let numeroPequeno = 5e-3; //0.005
console.log("Numero Pequeño 5e-3: " + numeroPequeno);

//6. - Operaciones Combinadas
//Calculo de precios
let precioProducto = 10000;
let iva = 0.19;
let total = precioProducto + (precioProducto * iva); //11900
console.log("El Valor final del prdocuto es: " + total);
// Calculo de valor de hora trabajada
let hora = 40;
let valorHora = 12000;
let sueldo = hora * valorHora; 
console.log("El sueldo base es: " + sueldo);

//7. - Redondeo de numeros
console.log("Redondeando 4.6: " + Math.round(4.6)); //5
console.log("Redondeando 4.6: " + Math.floor(4.6)); //5