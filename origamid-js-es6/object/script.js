// EXERCISES

// Create a function that verify data type 

function verificarDado(dado) {
    return Object.prototype.toString.call(dado);
}

console.log(verificarDado('String'));


// Create an object quadrado with properties lados and turn it into immutable

const quadrado = {};

Object.defineProperties(quadrado, {
    lados: {
        value: 4,
        enumerable: true,
    }
})

console.log(quadrado);


// Prevent any changes in the objects below

const configuracao = {
    width: 800,
    height: 600,
    background: '#333',
}
 
Object.freeze(configuracao);


// List the name of all properties from the prototype of String and Array

console.log(Object.getOwnPropertyNames(String.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));

