//EXERCISES

//1. Duplicate the menu and add it to the copy 

const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const cloneMenu = menu.cloneNode(true);

copy.appendChild(cloneMenu);



//---------------------------------------------------------------------------------------------

//2. Select the first DT from dl of Faq
 
const faq = document.querySelector('.faq');
const primeiroDt = faq.querySelector('dt');

console.log(primeiroDt);


//---------------------------------------------------------------------------------------------

//3. Select the DD in reference to the first DT

const proximoDd = primeiroDt.nextElementSibling;

console.log(proximoDd);

//---------------------------------------------------------------------------------------------

//4. Substitute the content html from .faq to the content from .animais

const animais = document.querySelector('.animais');

faq.innerHTML = animais.innerHTML;