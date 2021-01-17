
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