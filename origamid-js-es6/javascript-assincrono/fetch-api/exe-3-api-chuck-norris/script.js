const btnNext = document.querySelector('.next');
const pJoke = document.queryCommandEnabled('.joke');

function pullJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(r => r.json())
    .then(joke => {
        pJoke.innerText = joke.value;
    })
}

btnNext.addEventListener('click', pullJoke());

pullJoke();