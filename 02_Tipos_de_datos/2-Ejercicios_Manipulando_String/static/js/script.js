console.log("Conexion correcta con JS")


// 1️⃣ Presentación completa
// Crea las variables:
// nombre: Camila
// edad: 25
// Debes mostrar un mensaje que:
// Presente a la persona
// Indique su edad
// Indique el tipo de dato de edad
// 👉 Todo en un solo mensaje.
let nombre = "Camila";
let edad = 25;
console.log(`Hola, mi nombre es ${nombre}, tengo ${edad} años y el tipo de dato de mi edad es ${typeof(edad)}`);

// 2️⃣ Ubicación con transformación
// Crea las variables:
// comuna: Maipú
// region: Metropolitana
// Debes mostrar un mensaje que:
// Indique dónde vive la persona
// Muestre la comuna en MAYÚSCULAS
// Muestre la región en minúsculas
let comuna = "Maipu";
let region = "Metropolitana";
console.log(`La persona vive en la comuna de ${comuna.toUpperCase()} y en la region de ${region.toLowerCase}`);

// 3️⃣ Análisis de palabra
// Crea la variable:
// lenguaje: Python
// Debes mostrar un mensaje que:
// Indique cuántos caracteres tiene
// Muestre la palabra en MAYÚSCULAS
// Indique el tipo de dato
let lenguaje = "Python";
console.log(`La palabra '${lenguaje}' tiene ${lenguaje.length} caracteres y su tipo de dato es ${typeof(lenguaje)}`);

// 4️⃣ Frase completa analizada
// Crea la variable:
// mensaje: Me encanta programar en JavaScript
// Debes mostrar un mensaje que:
// Indique la cantidad de caracteres
// Verifique si contiene la palabra "JavaScript"
// Muestre el mensaje completo en minúsculas
let mensaje = "Me encanta programar en JavaScript";
console.log(`El mensaje '${mensaje}' tiene ${mensaje.length} caracteres y contiene 'JavaScript': ${mensaje.includes('JavaScript')}`);

// 5️⃣ Lista con búsqueda y transformación
// Crea la variable:
// compras: arroz, fideos, aceite, sal
// Debes mostrar:
// Si existe la palabra "aceite"
// El texto completo en MAYÚSCULAS
// La cantidad total de caracteres
let compras = "arroz, fideos, aceite, sal";
console.log(`La lista de compras '${compras.toUpperCase()}' tienen ${compras.length} caracteres y contiene 'aceite': ${compras.includes('aceite')}`);

// 6️⃣ Conversión + análisis
// Crea las variables:
// numeroCasa: 456
// numeroCasaTexto (vacía)
// Debes:
// Convertir el número a texto
// Mostrar el número convertido
// Indicar su tipo de dato
// Indicar cuántos caracteres tiene
let numeroCasa = 456;
let numeroCasaTexto = numeroCasa.toString();
console.log(`Mi numero de casa es ${numeroCasaTexto} es de tipo: ${typeof numeroCasaTexto} tiene ${numeroCasaTexto.length} letras`);

// 7️⃣ Identificación personal extendida
// Crea las variables:
// nombre: Diego
// apellido: Rojas
// Debes mostrar un mensaje que:
// Muestre el nombre completo
// Indique cuántos caracteres tiene el nombre completo (incluyendo espacio)
// Muestre todo en MAYÚSCULAS
let name = "Diego";
let lastName = "Rojas";
let fullName = `${name} ${lastName}`;
console.log(`El nombre completo es ${fullName} y tiene ${fullName.length} caracteres`);

// 8️⃣ Verificación de contenido
// Crea la variable:
// frase: Hoy aprenderemos sobre strings
// Debes mostrar:
// Si contiene la palabra "strings"
// La frase en MAYÚSCULAS
// La cantidad de caracteres
let frase = "hoy Aprenderemos sobre strings";
console.log(`La frase ${frase} contiene la palabra "Srings": ${frase.includes("Strings")})`)
console.log(`${frase.toUpperCase()} - Tiene ${frase.length} caracteres.`);

// 9️⃣ Comparación de formatos
// Crea la variable:
// texto: Programar es divertido
// Debes mostrar en un solo mensaje:
// El texto original
// El texto en minúsculas
// El texto en mayúsculas
// La cantidad de caracteres
let texto = "Programar es Divertido";
console.log(`Texto original${texto} 
    \nTexto en Minisculas ${texto.toLowerCase()} 
    \nTexto en Mayuscula ${texto.toUpperCase()} 
    \nEl texto Tiene: ${texto.length} caracteres.`);

// 🔟 Desafío completo integrado
// Crea las variables:
// curso: 4C
// anio: 2026
// Debes mostrar un mensaje que:
// Indique el curso y año
// Convierta el año a texto
// Indique el tipo de dato del año convertido
// Muestre todo el mensaje en MAYÚSCULAS

let curso = "3C";
let anio = 2026;
let anioTexto = String(anio); //anio a texto

console.log(`Curso ${curso} del año ${anioTexto} 
    \nAño es de tipo: ${typeof anioTexto}` .toUpperCase());
