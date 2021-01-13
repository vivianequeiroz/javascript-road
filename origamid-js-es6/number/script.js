// EXERCISES

// 1. Return a random number between 1050 and 2000

console.log(Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050);


// 2. Return the greatest value of the list below 

const numeros = '4, 5, 22, 8, 9';

const arrayLista = numeros.split(', ');
console.log(arrayLista);

const arrayNumeros = Math.max(...arrayLista); // spread operator

console.log(arrayNumeros);

 
//3. Create a function to clean the prices
// and return the numbers with cents rounded 
// then return the total sum

const listaPrecos = ['R$ 59,99', 'R$ 100,222',
                     'R$ 230  ', 'r$ 200'];

function limparPreco(preco){
    preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.');
    preco = +preco.toFixed(2);
    return preco;
}

let soma = 0;
listaPrecos.forEach((preco) =>{
    soma += limparPreco(preco);
})

console.log(soma.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'}));