import initScrollSuave from './modules/scroll-suave.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';
import initAccordion from './modules/accordion.js';
import initTabNav from './modules/tabnav.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';


initScrollSuave();
initAnimacaoScroll();
initAccordion();
initTabNav();
initModal();
initTooltip();


// function espera(texto) {
//     console.log('Passou 0s');
// }

// setTimeout(() => {
//     console.log('Testando');
// }, 0);

//setTimeOut always wait for the call stack be empty 

//If a seTimeout is used in a loop, all of them will be added into the Web Api 
//almost in the same time. An setTimeout event do not wait the time from the previous one end to begin


// setTimeOut is a method from the Window object. So, when using "this" the reference 
// will be the Window and errors can occur due to it.

// Example:

// const btn = document.querySelector('button');
// btn.addEventListener('click', handleClick);

// function handle click(event) {
//    setTimeout(function()) {
//        this.classList.add('active');
//}, 1000)
// }

// The example above will generate an error because this is a reference of Window object.

// To correct this, it is necessary to use --- arrow functions --- they make a reference to the parent of the object 

// function handle click(event) {
//    setTimeout(() => { 
//        this.classList.add('active');
//}, 1000); 
// }





// -----------------------------------------------------------------------

// function loop(texto) {
//     console.log(texto);
// }

// let i = 0;
// setInterval(() => {
//     console.log(i++);
// }, 500);

// setInterval makes a continuous loop 

// to stop it, it is necessary to put setInterval in a variable!!

const contarAte10 = setInterval(callback, 1000);

let i = 0;
function callback() {
    console.log(i++);
    if (i > 10) {
        clearInterval(contarAte10);
    }
}