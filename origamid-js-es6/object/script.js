
// // *********** OBJECT.CREATE() ***********
// // => returns a new object that will has as a prototype the object from the first argument
// // ~ alternative way to build a new object without using a constructor function 

// const carro1 = {
//     rodas: 4,
//     init(valor) {
//         this.marca = valor;
//         return this;
//     },
//     acelerar() {
//         return this.marca + ' acelerou';
//     },
//     buzinou() {
//         return this.marca + ' buzinou';
//     },
// }

// const honda = Object.create(carro1).init('Honda');;

// // honda.marca = 'Honda';

// // honda.init(honda);

// const ferrari = Object.create(carro1).init('Ferrari');




// // *********** OBJECT.ASSIGN() ***********
// // => add a target at the first parameter (that will be modified) properties and methods from other objects 
// // ~ 

// const funcaoAutomovel = {
//     acelerar() {
//         return 'acelerou';
//     },
//     buzinar() {
//         return 'buzinou';
//     },
// }

// const moto = {
//     rodas: 2,
//     capacete: true,
// }

// const carro = {
//     rodas: 4,
//     cinto: true,
// }

// Object.assign(moto, funcaoAutomovel);
// Object.assign(carro, funcaoAutomovel);



//  *********** OBJECT.DEFINEPROPERTIES() ***********
//  => turns the properties of an object immutable
//  ~ 

const moto = {
    capacete: true,
}

Object.defineProperties(moto, {
    rodas: {
        // value: 2,
        // configurable: false,
        // writable: true,
        get() {
            return this._rodas;
        },
        set(valor){ 
            this._rodas = valor * 4;
        }
    }
});


console.log(moto);




//  *********** OBJECT.getOwnPropertyDescriptor/s() ***********
//  List all methods and properties from an object, as well as it's configurations 
// ~

Object.getOwnPropertyDescriptors(moto); 

//  *********** OBJECT.keys() ***********
//  *********** OBJECT.values() ***********
//  *********** OBJECT.entries() ***********
// All these methods returns an array with the info in it's names 
// ~ Only works with enumerable!

//  *********** OBJECT.getOwnPropertyNames() ***********
// List in an array all the properties from the object
// ~ Works with non enumerable too!

//  *********** OBJECT.getPrototypeOf() ***********
// => returns the constructor function of the object
// ~ 

//  *********** OBJECT.is() ***********
// => verify if the objects are equal
// ~ 

//  *********** OBJECT.FREEZE() ***********
// => don't allow any deletions, changes of additions
//  *********** OBJECT.SEAL() ***********
// => don't allow any addition or changes 
//  *********** OBJECT.PREVENTEXTENSION() ***********
// => don't allow any additions 