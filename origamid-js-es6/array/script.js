// Construction of arrays 

// Every array inherit the properties and methods from the prototype of the constructor Array

// 
const numeros = Array[4] // if any other arguments are inserted, it will be created a empty array with [n] spaces 
const moveis = Array.of('Sofa', 'Estante', 'Cama');
const carros = new Array('Corola', 'Mustang', 'Honda');
const frutas = Array('Pêra', 'Banana', 'Uva');

carros[1] // return Mustang;
carros[2] = 'Ferrari' // substitute the item from the third position in the array
carros[10] = 'Parati'; // insert the string in the tenth position
console.log(carros.length);

// The values in an array are not static!


const li = document.querySelectorAll('li');
const arrayLi = Array.from(li);

console.log(arrayLi);

// In order to be properly transformed into an array,
// an object needs to have the property length declared inside it:

const obj = {
    0: 'Viviane',
    1: 'João',
    2: 'Vida',
    length: 3 // in case of a not accurate number, it will return 'undefined'
}

const arrayObj = Array.from(obj);
console.log(arrayObj)


// Verify if it is an Array: 

console.log(Array.isArray(li));
console.log(Array.isArray(arrayLi));


// Mutator methods modifies an array 

//array.sort();

const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
console.log(instrumentos.sort()); // it will reorganize the array in alphabetic order

const idades = [43,54,6,2,3,54,57,5,9];
console.log(idades.sort()); // it will organize the first from left to right - the less significant to the more significant number /
                            // sort method 


// array.unshift();

const cores = ['Azul', 'Vermelho', 'Amarelo'];
console.log(cores.unshift('Rosa', 'Branco')); // returns the array length
console.log(cores); // returns the array items - unshift method add them at the beginning



// array.shift();

console.log(cores.shift()); // removes the first item and it is the return 



// array.push();

cores.push('Preto'); // returns the array length
console.log(cores); // returns the array items - push method add them at the end


// array.pop();

console.log(cores.pop()); // removes the last item and it is the return



//array.rever();

console.log(cores.reverse()); // inversion of array items