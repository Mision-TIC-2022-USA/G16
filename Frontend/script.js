/*let elemento = document.getElementsByTagName("h1");
for (let elem of elemento) {
    elem.style.color = "red";
    elem.style.backgroundColor = "yellow";
}
*/

//const NOMBRE = "Juan";
//NOMBRE = "Pedro";
//console.log(NOMBRE);

window.onload = () => {
    console.log("Carga");
}


function mifuncion(numero1, numero2) {
    let resultado = numero1 + numero2;
    
    return resultado;
}

let res = mifuncion(10, 10);

if (res > 20) {
    console.log("El resultado es mayor que 20");
}
else if (res < 20) {
    console.log("El resultado es menor que 20");
}
else {
    console.log("El resultado es igual a 20");
}

console.log(res);

let miDia = new Date().getDay();
console.log(miDia);

switch (miDia) {
    case 0:
        console.log("Es domingo");
        break;
    case 1:
        console.log("Es lunes");
        break;
    case 2:
        console.log("Es martes");
        break;
    case 3:
        console.log("Es miercoles");
        break;
    case 4:
        console.log("Es jueves");
        break;
    case 5:
        console.log("Es viernes");
        break;
    case 6:
        console.log("Es sabado");
        break;
    
    default:
        console.log("No es un dia valido");
        break;
}

let nombre = "Juan";
let apellido = "Perez";

console.log(nombre + " " + apellido);


let numero1 = 5;
let numero2 = "5";

let resultado = (numero1 - numero2) + 5;

let z = "Número" - 5;

console.log("Número");

function cambio() {
   console.log("Cambio");

}

function clickme() {
    console.log("Click");
}
    
function depaso()
{
    console.log("De paso");
}

function tecla() {
    console.log("Tecla");
}

//javascript 2

let persona = new Object();

persona.nombre = "Juan";
persona.apellido = "Perez";
persona.edad = 30;

console.log(persona);

let persona2 = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
    detalle : function() {
        console.log(this.nombre + " " + this.apellido + " " + this.edad);
    }
};

console.log(persona2.nombre);
console.log(persona2["nombre"]);
persona2.direccion = "Calle falsa 123";
console.log(persona2);
persona2.detalle();
//persona2.detalle2 = () => {
//    console.log(persona2.nombre + " " + persona2.apellido + " " + persona2.edad);
//}

let numeros = [1, persona2, "saludo", 4, 5, 6, 7, 8, 9, 10];

console.log(numeros.length);

console.log(numeros.push(100));
console.log(numeros);
numeros.pop();
console.log(numeros);
numeros.unshift(500);
console.log(numeros);
numeros.shift();
console.log(numeros);

let numeros2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let concatenado = numeros.concat(numeros2);
console.log(concatenado);

let slice =  numeros.slice(4, 6);
console.log(slice);

//let splice2 = numeros.splice(3, 2);
//console.log(splice2);
console.log(numeros2.join(" - "));
console.log(numeros.includes(5));

//numeros.fill(0, 4, 9);
console.log(numeros);
numeros.reverse();
console.log(numeros);

let palabras = ["Hola", "mundo" , "como", "estas"];
console.log(palabras.sort());

 let ordenado = numeros.sort((a, b) => {
    return a - b;
});

console.log(ordenado);

//for (const numero of ordenado) {
//    console.log(numero);
//}

//ordenado.forEach(numero => {
//    console.log(numero);
//});

let IsPositivo = numeros2.every(numero => {
    return numero > 0;
});

console.log(IsPositivo);

let IsHere = numeros.some(numero => {
    return numero == 5;
});

console.log(IsHere);

let nuevoArray = palabras.map(palabra => {
    return palabra + " nuevo";
});
console.log(nuevoArray);

let nuevoArraynumeros = numeros.map(numero => {
    return numero * 2;
});

console.log(nuevoArraynumeros);

let id = 5;

let filter = numeros.filter(numero => {
    return numero != id;
});

console.log(filter);

let nombre2 =  "Juan";
let persona3 = numeros.find(persona => {
    return persona.nombre == nombre2;
});

console.log(persona3.apellido);

let sumatoria = numeros2.reduce((valorAnterior, valorActual) => {
    console.log("Datos "  + valorAnterior + " " +valorActual);
    return valorAnterior + valorActual;
});

console.log(sumatoria);







