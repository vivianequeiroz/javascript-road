//EXERCISES

//1. Verify the distance from the first image in relation
// to the page's top                                        // HAVE AN IDEA

const img = document.querySelector('img');
console.log(img);

const imgTopo = img.offsetTop;
console.log(imgTopo);



//2. Return the sum of the width of all images    // NO IDEA

function somaImagens() { 
    const totalImgs = document.querySelectorAll('img');

    let soma = 0;

    totalImgs.forEach((imagem) => {
       soma += imagem.offsetWidth;
    });
    console.log(soma);
}

window.onload = function() {
    somaImagens();
}



//3. Verify if all links has the minimum area recommended to touch screen
// 48px/48px accordingly to Google

const links = document.querySelectorAll('a');

links.forEach((link) => {
    const linkWidth = link.offsetWidth;
    const linkHeight = link.offsetHeight;

    if(linkWidth >= 48 & linkHeight >= 48) {
        console.log('Esse link está no padrão recomendado!')
    } else {
        console.log('Esse link não está no padrão recomendado!')
    }
});




// If a browser is smaller than 720px, add the class menu-mobile at menu

const browserSmall = window.matchMedia('(max-width: 720px)').matches;

if(browserSmall) {
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile');
}