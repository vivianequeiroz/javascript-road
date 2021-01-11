// // EXERCISES

// //1. Transform the o    ject below into an Constructor Function:
// // HAVE AN IDEA 
// const pessoa = { 
//     nome: 'Nome pessoa',
//     idade: 0,
//     andar() {
//         console.log(this.nome + ' andou');
//     }
// }


// // function Pessoa() {
// //     this.nome = 'Nome pessoa',
// //     this.idade = 0,
// //     this.andar = function() {
// //         return console.log(this.nome + ' andou');
// //     }
// // }

// // CORRECT FORM:

// function Pessoa(nome, idade) {
//     this.nome = nome,
//     this.idade = idade,
//     this.andar = function() {
//         return console.log(this.nome + ' andou');
//     }
// }


// // ------------------------------------------------------------------------------------------------------


// // 2. Create 3 persons. João - 20 years old, Maria - 25 years old and Bruno - 15 years old
// // CORRECT

// const Joao = new Pessoa('João', 20);
// const Maria = new Pessoa('Maria', 25);
// const Bruno = new Pessoa('Bruno', 15);


// ------------------------------------------------------------------------------------------------------


// 3. Create a Constructor Function (Dom) for the manipulation of elements lists from dom.
// It should have the following properties and methods: 

// elements, returns NodeList with the selected elements
// addClass(classe), add a class to all the elements/
// removeClass(classe), remove the class from all the elements

// HAVE A VAGUE IDEA

// function Dom(elements) {
//     this.elements = document.querySelectorAll(elements);
//     function addClass(addClass) {
//         this.elements.classList.add(addClass);
//     }
//     function removeClass(removeClass) {
//         this.elements.classList.remove(removeClass);
//     }
// }

// Dom.addClass('ativo');

// CORRECT FORM 

function Dom(seletor) {
    const elementList = document.querySelectorAll(seletor);
    this.elements = elementList;
    this.addClass = function(classe) {
        elementList.forEach((element) => {
            element.classList.add(classe);
        });
    }
    this.removeClass = function(classe) {
        elementList.forEach((element) => {
            element.classList.remove(classe);
        });
    }
}
const listaItens = new Dom('li'); 

listaItens.addClass('ativar');

listaItens.removeClass('ativar');


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