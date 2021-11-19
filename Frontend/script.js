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




