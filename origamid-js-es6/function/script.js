//EXERCISEs


//1. Return the total sum of characters using reduce

const totalP = document.querySelectorAll('p');

const totalCaracteres = Array.prototype.reduce.call(totalP, (accumulator, item) =>{
    const caracteres = item.innerText.length;
    return accumulator + caracteres;
}, 0);

console.log(totalP);
console.log(totalCaracteres);





//2. Create an element that return new html elements with the following parameters:
// tag, classe and conteudo

function criarElemento(tag, classe, conteudo) {
    const elemento = document.createElement(tag);
    classe ? elemento.classList.add(classe): null;
    conteudo ? elemento.innerHTML = conteudo : null;
    return elemento;
}

console.log(criarElemento('li', 'azul', 'Este é o conteúdo!'));



//3. Create a new function using the last one as a base
// This new function should always create h1 with the classe titulo
// However, the conteudo paraemeter remains dinamic 

const h1Titulo = criarElemento.bind(null, 'h1', 'titulo');

const cursosJS = h1Titulo('Cursos de JavaScript');
const cursosHTML = h1Titulo('Cursos de HTML');


console.log(cursosJS, cursosHTML)
