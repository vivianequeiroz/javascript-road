// // EXERCISES

// //1. Transform the object below into an Constructor Function:
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
    this.removeClass = 
    function(classe) {
        elementList.forEach((element) => {
            element.classList.remove(classe);
        });
    }
}
const listaItens = new Dom('li'); 

listaItens.addClass('ativar');

listaItens.removeClass('ativar');