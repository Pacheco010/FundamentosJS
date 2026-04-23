console.log("Conexion exitosa con JS...");

/*
============================
1. ¿Que es una Condicion JS?
============================
Una Condicion nos permite tomar decisiones en el codigo. separando dos caminos el si (if) y el no (else).


Estructura basica: ( Sintaxis  --> Reglas del lenguaje de Programacion.)

if (condicion) {
    // Codigo que se ejecuta si la condicion es Verdadera.
}
    //Codigo que se ejecuta si la condicion es Falsa.
}
*/

//Ejemplo 1: (Numerico) -- if
let edad = 18;

if (edad >= 18) {
  console.log("Eres mayor de edad");
}

//Ejemplo 2: Dos caminos posibles
let temperatura = 10;

if (temperatura > 20) {
  // Condicion SI
  console.log("Hace calor");
} else {
  console.log("Hace frio");
}

// Ejemplo 3: IF - ELSE IF - ELSE (Multiples condiciones)

let nota = 5.5;

if (nota >= 6.0) {
  console.log("Excelente, Sigue asi!");
} else if (nota >= 4.0) {
  console.log("Aprobado, Puedes mejorar!");
} else {
  console.log("Reprobado, Estudia mas!");
}

// Ejemplo 4: Condiciones con String

let nombre = "Leonardo";

if (nombre === "Leonardo") {
  console.log("Hola, " + nombre);
} else {
  console.log("Tu no eres " + nombre);
}


/*
OPERADORES DE COMPARACION:

> Mayor que
< Menor que
>= Mayor o igual
=== Estricta Igualdad
!== Distinto Estricto
== Igualdad
!= Distinto
*/
// Ejemplo de distinto
let num = 10;
let num2 = 5;
if (num !== num2) {
    console.log(`El numero: ${num} es distinto que ${num2}`);
} else {
    console.log("Son Iguales")
}