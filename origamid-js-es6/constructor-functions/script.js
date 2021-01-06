// Constructor functions make it possible to create new different objects but with 
// the same characteristics

 // Pascal Case identify a constructor function => function Carro () { ... }

 function Carro() {
    this.marca = 'Marca';
 }

//  const honda1 = Carro();

 // it returns undefined


 const honda = new Carro();
 const fiat = new Carro();
 fiat.marca = 'Fiat';

 // the addition of -- new -- turns the constant into an object of the type Carro() 
 // Carro() {...} is the constructor function
 // this returns the constructor itself


 // How --- new --- works:

 //1. First, it creates a new object 
 //=> honda = {}

 //2. Then, defines a prototype based on the constructor function
 //=> honda.prototype = Carro.prototype

 //3. Indicates the variable this to the object
 //=> this = honda

 //4. Executes a function, replacing 'this' with the object
 //=>honda.marca = 'Marca';
 //=>honda.preco = 0;

 //5. It returns the new object 
 //=> return honda = {
//      marca: 'Marca',
//      preco: 0,
//  }



// Parameters andarguments can be used at the moment of an object creation:

function Moradia(cidadeAtribuida, cepAtribuido) {
    this.cidade = cidadeAtribuida; // 'this.' creation of a new property of object!
    this.cep = cepAtribuido
}

const casa = new Moradia('São Paulo', 05654542);
const apto = new Moradia('Rio de Janeiro', 0657340);