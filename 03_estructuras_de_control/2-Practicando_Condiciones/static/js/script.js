console.log("Conexion exitosa con JS...");

// EJERCICIO 1
// Resultado esperado en alert:
// "Bienvenido Juan"

function ejercicio1() {
  let nombre = "Leonardo"
  alert(`Bienvenido ${nombre}`);
}


// EJERCICIO 2
// Resultado esperado en alert:
// "La suma es: 15"

function ejercicio2() {
    let num1 = 10;
    let num2 = 5;
    let resultado = num1 + num2;

    alert("La suma es: " + resultado);
}


// EJERCICIO 3
// Resultado esperado en alert:
// "La resta es: 12"

function ejercicio3() {
    let num1 = 20;
    let num2 = 8;
    let resultado = num1 - num2;
    alert("La resta es: " + resultado);

}


// EJERCICIO 4
// Resultado esperado en alert:
// "La multiplicación es: 24"

function ejercicio4() {
    let num1 = 6;
    let num2 = 4;
    let resultado = num1 * num2;
    alert("La multiplicacion es: " + resultado);
}


// EJERCICIO 5
// Resultado esperado en alert:
// "El promedio es: 5.7"

function ejercicio5() {
    let n1 = 5;
    let n2 = 6;
    let n3 = 6.1;
    let promedio = (n1 + n2 + n3) / 3;
    alert("El promedio es: " + promedio.toFixed(1));
}


// EJERCICIO 6
// Resultado esperado en alert:
// "Es mayor de edad"

function ejercicio6() {
    let edad = 20;

    if (edad >= 18) {
        alert("Es mayor de edad");
    }
}


// EJERCICIO 7
// Resultado esperado en alert:
// "El número es par"

function ejercicio7() {
    let numero = 8;
    if (numero % 2 === 0) {
        alert("El numero es par");
    } else {
        alert("El numero es impar")
    }
}


// EJERCICIO 8
// Resultado esperado en alert:
// "Estudiante aprobado"

function ejercicio8() {
    let nota = 8.5;
    if (nota >= 7) {
        alert("Estudiante aprobado");
    }
}


// EJERCICIO 9
// Resultado esperado en alert:
// "Precio final con descuento: $18000"

function ejercicio9() {
  let precioProducto = 20000;
  let descuento = 0.1;
  let precioFinal = precioProducto * (1 - descuento);
  alert(`Precio final con descuento: $${precioFinal}`);

}


// EJERCICIO 10
// Resultado esperado en alert:
// "El número mayor es: 22"

function ejercicio10() {
  let num1 = 15;
  let num2 = 22;
  let mayor;
  if (num1 > num2) {
    mayor = num1;
  } else {
    mayor = num2;
  }
  alert(`El numero mayor es: ${mayor}`);
}
