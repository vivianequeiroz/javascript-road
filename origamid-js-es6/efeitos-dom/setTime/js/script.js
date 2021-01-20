//EXERCISES SETTIMEOUT E SETINTERVAL

//1. Change the color of the screen to blue e then to red every two seconds

//  w r o n g 
// const blueBody = document.getElementById('body').style.background = 'blue';

// function mudarClasse() {
//     document.body.classList.toggle('active');
//     const redBody = document.getElementById('body').style.background = 'red';
// }

// setInterval(mudarClasse, 2000);


// c o r r e c t

// function mudarClasse() {
//     document.body.classList.toggle('active');
// }

// setInterval(mudarClasse, 200);







// 2. Create a chronometer with that can be started, paused and reset 

const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const tempo = document.querySelector('.tempo');


iniciar.addEventListener('click', iniciarTempo);
pausar.addEventListener('click', pausarTempo);
pausar.addEventListener('dblclick', resetarTempo);

let i = 0;
let timer;

function iniciarTempo() {
    timer = setInterval(() => {
        tempo.innerText = i++;
    }, 100);
    iniciar.setAttribute('disabled', '');
}

function pausarTempo() {
    clearInterval(timer);
    iniciar.removeAttribute('disabled');
}

function resetarTempo() {
    tempo.innerText = 0;
    i = 0;
}