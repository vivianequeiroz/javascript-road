//EXERCISES

// Select each course and return an array
// with objects containing 'titulo', 'descricao',
// 'aulas' e 'horas' de cada curso

const cursos = document.querySelectorAll('.curso');

const arrayCursos = Array.from(cursos);

const objetosCurso = arrayCursos.map((curso) => {
    const titulo = curso.querySelector('h1').innerText;
    const descricao = curso.querySelector('p').innerText;
    const aulas = curso.querySelector('.aulas').innerText;
    const horas = curso.querySelector('.horas').innerText;
    return {
        titulo, //ES6 update, it is the same of titulo: titulo
        descricao,
        aulas,
        horas: horas + ' horas',
    }
}); 

console.log(objetosCurso);


// Return a list with all the number bigger than 100

const numeros = [3,656,343,2,3,5,56,7,676,85,634,523,2,99.9]; 

const maiores100 = numeros.filter(n => n > 100);

console.log(maiores100);


// Return the total amount of the purchases

const compras = [
    {
        item: 'Banana',
        preco: 'R$ 4,99'
    },
    {
        item: 'Ovo',
        preco: 'R$ 2,99'
    },
    {
        item: 'Carne',
        preco: 'R$ 25,49'
    },
    {
        item: 'Refrigerante',
        preco: 'R$ 5,35'
    },
    {
        item: 'Queijo',
        preco: 'R$ 10,60'
    },
]

// replaces, map preco, reduce


// const replacesCompras = compras.forEach((preco) =>{
//     compras.replace('R$ ', '')
// })

// console.log(replaceCompras);

// const comprasPreco = compras.map((compras) => {
//     return {
//         preco: compras.preco,
//     }
// });

// console.log(comprasPreco);

const valorTotal = compras.reduce((accumulator, item) => {
    const precoLimpo = +item.preco.replace('R$ ', '').replace(',','.');
    return accumulator + precoLimpo;
}, 0);

console.log(`O valor total da compra é igual a ${valorTotal}`);

