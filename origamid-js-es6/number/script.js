console.log(Number.isNaN('ds'));
console.log(Number.isInteger(10.4343));

console.log(Number.parseFloat('234.32'));
console.log(Number.parseInt('234.32'));

const preco = 10.3423;
console.log(preco.toFixed(2)); // string, to transform into number add + 

// new.toString(radix) => transform the data into a string

let valor = 50.50;

valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
console.log(valor);


console.log(Math.PI);

// Some of the most commom methods of the object Math:


console.log(Math.abs( -4.5));
console.log(Math.ceil( 4.5)); // => round up
console.log(Math.floor( 4.5)); // => round down
console.log(Math.round( 4.5)); // => round accordingly to math rules

console.log(Math.max(3,54,354,23,345,67,454,4));
console.log(Math.min(3,54,354,23,345,67,454,4));

const numeroAleatorio = Math.floor(Math.random() * 1000);

console.log(numeroAleatorio);

// To calculate a random number with an interval 

console.log(Math.floor(Math.random() * (40 - 20 + 1)) + 20);