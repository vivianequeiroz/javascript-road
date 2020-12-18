// ********************     Dimensions and distances   ********************

// ------------------------------------------------------------------------

// Height and Width are propeties and methods from Element and HTMLElements
//objects - most of them are Read-only

const listaAnimais = document.querySelector('.animais-lista');
console.log(listaAnimais);

const height = listaAnimais.scrollHeight;
console.log(height);

// section.clientHeight; // height + padding
// section.offsetHeight; // height + padding + border
// section.scrollHeight; // total height even inside a scroll

// SAME FOR WIDTH!


// offsetTop- distance between the element and page's top

const animaisTopo = listaAnimais.offsetTop;

console.log(animaisTopo);

// offsetLeft - diatance from the left side of the element to the page's 
// left side

const primeiroH2 = document.querySelector('h2');

const h2Left = primeiroH2.offsetLeft;

console.log(h2Left);

const rect = primeiroH2.getBoundingClientRect();

console.log(rect.top); //returns an object that have more properties available to check

console.log(
    window.innerWidth,
    window.innerHeight,   // All of them are used to verify user's window
    window.outerWidth,    // proportions
    window.outerHeight,   // -> consider the nav bar of the browser
    
    window.pageYOffset,   //-> measures how much scroll the user did
)


// matchMedia() is used as in CSS to verify the broser's width

const small = window.matchMedia('(max-width: 600px)');

if(small.matches) {
    console.log('Tela menor que 600px');
} else {
    console.log('Tela maior que 600px');
}

