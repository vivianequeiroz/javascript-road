// EXERCISES

// 1. Create a consstructor function of Pessoa
// It may contain nome, sobrenome and idade
              // HAS AN IDEA
// Create a method in the prototype that returns
// the full name of the person 
             // NO IDEA

function Pessoa(nome, sobrenome, idade) {
    this.nome = nome,
    this.sobrenome = sobrenome,
    this.idade = idade
}

Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
}


const viviane = new Pessoa('Viviane', 'Queiroz', 20);






// 2. List the accessed methods by the data
// created with NodeList, HTMLCollection, Document      // NO IDEA

// At console: 

// NodeList.prototype;
// HTMLCollection.prototype;
// Document.prototype;

// Alternative: 

Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);

// Document - constructor function
// document - object constructed 


// 3. List the constructors from the data below: 

const li = document.querySelector('li');


li; // li.constructor.name -> HTMLLIElement
li.click; // li.click.constructor.name -> Function
li.innerText; // li.innerText.constructor.name -> String
li.value; // li.value.constructor.name -> Number
li.hidden; // li.hidden.constructor.name -> Boolean
li.offsetLeft; // li.offsetLeft.constructor.name -> Number       
li.click(); // li.click().constructor.name -> undefined             



//4. What is the csontructor of the data below?

// li.hidden.constructor.name; // s t r i n g 

const teste = li.hidden.constructor.name;

// teste.constructor.name => "String"