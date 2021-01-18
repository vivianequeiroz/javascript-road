//EXERCISES

// 1. Return in console all the images from the site // CERTAIN ABOUT IT

const imagens = document.getElementsByTagName('img');
console.log(imagens);


// 2. Return in console all the images that begin with the word "imagem" // NO IDEA

const imagensAnimais = document.querySelectorAll('[srcˆ="./css/img/imagem"]') // ('CSS-Selector[attribute ^ (that indicates how it needs to begin)="attribute itself"]');
console.log(imagensAnimais);


// 3. Select all the intern links (those that href begins with #); //HAVE AN IDEA

const linksInternos = document.querySelectorAll('[hrefˆ="#"]');
console.log(linksInternos);


// 4. Select the first h2 inside the .animais-descricao // HAVE AN IDEA

const primeiroH2 = document.querySelector('.animais-descricao h2');
console.log(primeiroH2);

// AN ALTERNATIVE: 

const animaisDescricao = document.querySelector('.animais-descricao'); 
const totalH2 = animaisDescricao.querySelector('h2');

console.log(animaisDescricao);
console.log(totalH2);


// 5. Select the last p tag from the site // HAVE AN IDEA  

// const ultimoP = document.querySelector('.copy p'); // NOT THE BEST WAY
// console.log(ultimoP);

const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[--paragrafos.length]); // it is equal to console.log(paragrafos[paragrafos.length - 1])

