console.log("Conexion exitosa con JS...");

// 📌 Ejercicios
// 🔹 Ejercicio 1: Edad proyectada
// Declara tu edad actual y calcula:
// Tu edad en 5 años
// Tu edad hace 10 años
// Muestra ambos resultados en consola.

function edadProyectada() {
  let edad = 18;
  alert(`Mi edad en: ${edad}
        \nEn 5 años tendre: ${edad + 5}
        \nHace 10 años tenia: ${edad - 10}`);
}

// 🔹 Ejercicio 2: Compra con descuento
// Un producto cuesta $25.000 y tiene un descuento del 20%.
// Calcula el precio final
// Muestra el resultado

function compraDescuento() {
  let precio = 25000;
  alert(`El precio es: ${precio}
   \nEl descuento del 20% es: $${precio * 0.2}
 \nPero con descuento: $${precio - precio * 0.2}`);
}

// 🔹 Ejercicio 3: Promedio de notas
// Declara 3 notas decimales:
// Calcula el promedio
// Redondea el resultado usando Math.round()

function promedioNotas() {
    let nota1 = 4.5;
    let nota2 = 6.7;
    let nota3 = 5.8;
    let promedio = (nota1 + nota2 + nota3) / 3;
    alert(`El promedio es: ${Math.round(promedio)}`);
}

// 🔹 Ejercicio 4: Temperatura
// Declara una temperatura actual en grados Celsius:
// Auméntala en 3 grados
// Luego disminúyela en 5 grados
// Muestra el resultado final

function calcularTemperatura() {
    let temperatura = 15;
    let aumentada = temperatura + 3;
    let disminuida = temperatura - 5;
    let resultado = temperatura + 3 - 5;
    alert(`La temperatura actual es: ${temperatura}°C
           \nAumentada en 3 grados: ${aumentada}°C
           \nDisminuida en 5 grados: ${disminuida}°C
           \nResultado final: ${resultado}°C`);
}

// 🔹 Ejercicio 5: Sueldo semanal
// Un trabajador gana $8.000 por hora y trabaja 45 horas:
// Calcula su sueldo
// Si trabaja 5 horas extra, agrégalas usando incremento
// Muestra el nuevo sueldo

function calcularSueldo() {
    let valorHora = 8000;
    let cantidadHoras = 45;
    let sueldo = valorHora * cantidadHoras;
    let horasExtra = 5;
    cantidadHoras += 5;
    let sueldoNuevo = valorHora * cantidadHoras;
    alert(`Sueldo Actual: $${sueldo}
        \nSueldo nuevo con Incremento; $${sueldoNuevo}`);
}

// 🔹 Ejercicio 6: División y resto
// Declara dos números:
// Calcula la división
// Calcula el módulo (%)
// Explica el resultado en consola

function operacionesDivision() {
    let numero1 = 6;
    let numero2 = 7;
    alert(`La division es ${numero1 / numero2}
        \nEl resto es ${numero1 % numero2}`)
        alert("El resto de la division se obtiene con el simbolo %")
}

// 🔹 Ejercicio 7: Comparación de números
// Declara dos números:
// Muestra si el primero es mayor que el segundo
// Verifica si uno de ellos es igual a 10

function comparacionNumeros() {
    let numero1 = 6;
    let numero2 = 7;
    alert(`numero1 es mayor que numero 2?: ${numero1 > numero2}
        \nEl numero1 es igual a 10: ${numero1 === 10}`)
}

// 🔹 Ejercicio 8: Notación científica aplicada
// Declara:
// Una población usando notación científica (ej: 1e6)
// Divide esa población en 4 grupos
// Muestra el resultado

function notacionCientifica() {
    let poblacion = 2e6;
    alert(`La Poblacion es de ${poblacion}
        \nSe dividiran en grupos de 4
        \n El resultado es de ${poblacion / 4} e 4 grupos`)

}


// 🔹 Ejercicio 9: Potencia y cálculo combinado
// Calcula:
// 3 elevado a 4
// Luego multiplícalo por 2
// Resta 10 al resultado final

function potenciaCalculo () {
    let num1 = 3;
    let num2 = 4;
    let potencia = num1 ** num2;
    alert(`3 elevado a 4 es: ${potencia}
        \nMultiplicado por 2: ${potencia * 2}
        \nRestando 10: ${potencia * 2 - 10}`)
}

// 🔹 Ejercicio 10: Dado aleatorio 🎲
// Simula el lanzamiento de un dado:
// Genera un número entre 1 y 6
// Muestra el resultado
// Indica si el número es mayor o igual a 4 (gana) o menor (pierde)

function dadoAleatorio() {
    let dado = Math.floor(Math.random() * 6 + 1);
    alert(`El numero del dado es: ${dado}`);
    if (dado >= 4) {
        alert( "Ganaste! El número es mayor o igual a 4.");
    } else {
        alert("Perdiste! El número es menor que 4.");
    }
}
