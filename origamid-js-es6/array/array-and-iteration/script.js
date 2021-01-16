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