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