//Funciones 
function suma(a, b) {
    return a + b;
    //this. contexto local
}

const suma2 = function (a, b) {
    return a + b;
}

//funcion flecha
const suma3 = (a, b) => {
    return a + b;
}

const suma4 = (a, b) => a + b;

const persona = nombre => {
    return {
        nombre: nombre,
        apellido: "Perez"
    }
};

const persona2 = nombre => ({
    nombre: nombre,
    apellido: "Perez"
});

//console.log(persona2("Mario"));

//-----------------------------------------------------

const persona3 = {
    nombre: "Juan",
    apellido: "Perez"
};

//operador spread
const persona4 = { ...persona3 };

persona4.nombre = "Pedro";

console.log(persona3);
console.log(persona4);

//let nombre = persona3.nombre;
//desestructuracion de objetos
const { nombre, apellido } = persona3;

const numero = [1, 2, 3];

//descructuracion de arreglos
const [uno, dos, tres] = numero;
console.log(uno, dos, tres);

//console.log(nombre, apellido);

//desestructuracion en funnciones
const func1 = (persona) => {
    console.log(persona.nombre + " " + persona.apellido);
}

const func2 = ({ nombre, apellido }) => {
    console.log(nombre + " " + apellido);
}

func2(persona3);

//----------------------------------------
//syncrhonous - asychronous  

//pasos 1 2 3

const promesa = new Promise((resolve, reject) => {

    try {
        console.log("Inicio");
        //simula la peticion a una api
        setTimeout(() => {
            resolve("respuesta del servidor 1");
            //console.log("Fin dentro de la promesa");
        }, 4000);
    } catch (error) {
        reject("Error en el servidor");
    }

});

promesa.then(respuesta => {
    console.log(respuesta);
}).catch(error => {
    console.log("respuesta " + error);
});

console.log("Cargando datos");
console.log("renderizando el fronted");
console.log("cargando el formulario");
console.log("fin 1");

// async await
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function
const cuonsultarProducto = async () => {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("respuesta del servidor 2");
        }, 4000);
    });

    const respuesta = await promesa;

    console.log(respuesta);
}

cuonsultarProducto();
console.log("fin 2");
console.log("Cargando datos");




