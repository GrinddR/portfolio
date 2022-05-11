//Declaracion de variables

let nombre;
let apellido;
let edad;

//Inicializacion de variables

nombre = "francisco";
apellido = "iribarren";
edad = 20;

//Declaracion e inicializacion en una misma linea

let profesion = "web developer" 
let sueldo = 50
const BLANCO = " "

//Operaciones basicas

let suma = edad + sueldo; //suma=70
let resta = edad - sueldo;//resta=30
let producto = edad * sueldo;//producto=1000
let division = sueldo / edad;//division=2.5


//Concatenacion de palabras

let nombreCompleto = nombre + BLANCO + apellido//nombreCompleto= "francisco iribarren"
let nombreEdad = nombre + edad//nombreEdad= "francisco20"

//Ejemplo de como correr un script JS

// let entrada = prompt("ingrese su nombre");
// let salida = entrada + " " + 420;
// alert(salida)

//mensajes por consola

// console.log("Variables en Js");
// console.log("Mi nombre es " + nombreCompleto)
// console.log("soy " + profesion)
// console.log("mi sueldo es de " + sueldo + "mil por mes")

// /*
// ingreso de datos "prompt()"
//  siempre convierte a "string"
//  para convertir a "number" debemos hacer
//  parceInt(prompt())*/

// nombre = prompt("ingrese su nombre");
// console.log("El nombre del usuario actual es: " + nombre);

// let anioNacimiento = prompt("ingrese el año de su nacimiento");
// console.log ("el usuario nació en " + anioNacimiento)


//practica

// nombre = prompt("Hola! ¿Como es su nombre?")
// alert ("Bienvenido a AutoMC " + nombre)

// let pedido = prompt("¿Que desea pedir hoy?")
// alert ("Su pedido fue realizado con éxito!")
// let pago = parseInt(prompt ("Introducir pago: "))
// alert("Debe abonar iva, lo que genera un total de " + pago + (pago * 21 /100))
// let iva = pago * 21 / 100
// console.log ("Su " + pedido + "tiene un costo de " + pago)
// console.log ("Deberá pagar iva, lo que genera un total de: " + iva)


// Consultar al usuario el año de su vehiculo (valor numerico)
// Pasarle por alert el valor que tiene su impuesto de patente anual
// Si el auto tiene menos de 10 años de antiguedad abona $ 50000 (0-9 años)
// Si el auto tiene entre 10 años y 15 años de antiguedad abona $ 35000 (10 - 15 años)
// Sino abona $ 10000 ( mayor a 15 años)

// let anioVehiculo = parseInt(prompt("Ingrese el modelo de su vehiculo"));
// let antiguedad = (2022 - anioVehiculo);
// if ((antiguedad > 0) && (antiguedad <=9)){
//     alert ("Debe abonar $ 50.000")
//     }
// else if ((antiguedad >9) &&(antiguedad <=15)){
//     alert("Deberá abonar $35.000")
// }
// else{
//     alert("Deberá abonar 10.000")
// }

//ACTIVIDADES

//Pedir un n1 mayor a 1000 y generar alert
// let unNumero = parseInt(prompt("Ingrese un numero clave para acceder: "))
// if  (unNumero >= 1000) {
//     alert("contraseña correcta: ud tiene acceso")
// }
// else{
//     alert("contraseña incorrecta. /n acceso denegado")
// }

//Pedir texto
// let contraseña = prompt("ingrese su contaseña: ")
// if (contraseña == "password"){
//     alert("contraseña correcta")
// }
// else{
//     alert("contraseña incorrecto")
// }

// for (let i = 1; i <= 10; i++) {
//     //Si la variable i es igual 5 interrumpo el for. 
//     if(i == 5){
//         break;
//     }
//     alert(i);
// }
