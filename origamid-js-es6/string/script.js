const comida = 'macarrao'; // returns a string 
const liquido = new String('agua'); // returns an object with String as it constructor

// both of them allow access to properties and methods of a String data type




// ******* str.length => a property that returns the total number of characters 

console.log(comida.length);

// comida[0];
// liquido[2]; 

const frase = 'A melhor comida';

console.log(frase[--frase.length]); // to check the last character




// ******* charAt( ) => a method that returns the character accordingly to the index given

console.log(frase.charAt(frase.length - 1));




// ******* str.concat(str2, str3, ...) => concatenate strings

const melhor = 'A melhor linguagem é ';
const linguagem = 'JavaScript';

//const novaFrase = melhor + linguagem; 

const novaFrase = melhor.concat(linguagem, '!!');



// ******* str.includes( ) => search for specific data inside another string and return a boolean value if it is find or not

const fruta = 'banana';
const listaFrutas = 'melancia, banana, laranja';

console.log(fruta.includes(listaFrutas));
console.log(listaFrutas.includes(fruta, 4));



// ******* str.endsWith( ) e str.startsWith( ) => search for the exact string inside another string -- case sensitive --

console.log(fruta.endsWith('nana'));
console.log(fruta.startsWith('ba'));
console.log(fruta.startsWith('Ba'));



// ******* str.slice(start, end)  => cut the string accordingly to the initial and final values
// ******* str.substring(start, end) works in the same way, but it does not deal well with negative values! 

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';


console.log(transacao1.slice(0, 3));
console.log(transacao2.slice(0, 3));
console.log(transacao3.slice(0, 3)); 

console.log(transacao1.slice(12)); // cut the first 12 characters
console.log(transacao1.slice(-4)); // returns the last 4 characters 
console.log(transacao1.slice(3, 6)); 



// ******* str.indexOf( ) and str.lastIndexOf( ) => returns the index of the string searched (the first or the last one found)

const instrumento = 'Guitarra';

console.log(instrumento.indexOf('r')); 
console.log(instrumento.lastIndexOf('r'));
console.log(instrumento.indexOf('ta'));



// ******* str.padStart(n, str) and str.padEnd(n, str) => expands the string total characters to the value of n (add to reach at this value) In case a second argument is given, it will be place the remaining spaces, if it isn't, places will fill the free space

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((item) => {
    console.log(item.padStart(20, '.'));
})



// ******* str.repeat(n) => repeat the string n times

const nome = 'Viviane ';

console.log(nome.repeat(5));



// ******* str.replace(regexp/substr, newstr/function) => switch part of a string to another. With regular expressions we can make global changes, while giving a direct value only the first one will be replaced

let listaRoupas = 'Camisas Bonés Calças';
console.log(listaRoupas = listaRoupas.replace(/[ ]+/g, ', ')); // 

let preco = 'R$ 1200,43';
console.log(preco = preco.replace(',', '.'));



// ******* str.split(pattern) => divide the string accordingly to the pattern given and returns an array

console.log(listaRoupas.split(', '));

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';

console.log(htmlArray = htmlText.split('div'));
console.log(htmlNovo = htmlArray.join('section'));



// ******* str.toUpperCase and str.toLowerCase => very useful to make verifications in inputs

const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

console.log(sexo1.toUpperCase() === 'FEMININO');
console.log(sexo1.toLowerCase() === 'feminino');



// ******* str.trim( ), str.trimStart( ) and str.trimEnd( ) => removes all the blank space without interfering in the string content

const valor = '  R$ 23.00   '

console.log(valor.trim());
console.log(valor.trimStart());
console.log(valor.trimEnd());