// Prototype chain is a JS mechanism to verify if the object has the property/method itself.
// if it hasn't, it goes to the next prototype link (data type verifyed) and search
// for the property/method inside it

// This mechanism provides heritage!

// So, prototype is an object added into a function when it is created

function Pessoa(nome, idade) {
    this.nome = nome,
    this.idade = idade,
    this.abraçar = function() {
        return 'Abraçou';
    }
    this.andar = function() {
        return 'Andou pelo objeto';
    }
}

var obj = {
    nome: 'João',
    idade: 20,
}

Pessoa.prototype.andar = function() {
    return this.nome + ' pessoa andou';
}

Pessoa.prototype.nada = function() {
    return this.nome + ' pessoa nadou';
}

const viviane = new Pessoa('Viviane', 20);

console.log(Pessoa.prototype);
console.log(viviane.prototype);


// Prototype heritage

// The object has access to the method and properties 
// from the constructor prototype responsible for the 
// creation of this object. The object below has
// access to methods that were never defined, however,
// that was inherited from the Object prototype:

Object.prototype;

viviane.toString();
viviane.isPrototypeOf();
viviane.valueOf();




 // Native constructors

 // Constructors are functions used to build objects, functions
 // strings and other data types. They had a prototype with 
 // properties and methods that can be accessed accordingly to
 // data type 

 // Example: When we creat a variable that receives a string,
 // the constructor of a String allow us to access 
 // many properties and methods available in this data type:

 const pais = 'Brasil';

 console.log(pais.charAt(0)); // returns the letter at the first 
                              // at the first position of the




// It is very common to transform a list into an Array, since
// a normal list usually has a Nodelist as it's constructor
// and by the time it is turned into an Array, the list 
// is going to has access to a wider range of methods 
// and properties

const lista = document.querySelectorAll('li');

const listaArray = Array.prototype.slice.call(lista);
// most recent  method: 
// consta listaArray = Array.from(lista);



// Only the methods from a prototypes are inherited!

[1,2,3].slice(); // exist
[1,2,3].from(); // does not exist



// Always observe what has been  r e t u r n e d! 
// It will confirm which methods and properties can be accessed.

const Carro = {
    marca: 'BMW',
    preco: 100000,
    acelerar() {
        return true;
    }
}

// In this example, the return of what can be called is:

// Carro => Object 
// Carro.marca => String
// Carro.preco => Number
// Carro.acelerar => Function  ***
// Carro.acelerar() => Boolean ***
// Carro.marca.charAt => Function
// Carro.marca.charAt(0) => String

// To verify constructor name:    .constructor.name