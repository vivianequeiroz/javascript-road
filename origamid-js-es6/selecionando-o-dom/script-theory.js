// Types of selection - comment code to test each option!
// 1. By ID

const animais = document.getElementById('animais');
console.log(animais);

//2. By TAG and CLASS - both of them automatically update elements that can be later added

const gridSection = document.getElementsByClassName('grid-section');
const contato = document.getElementsByClassName('grid-section contato'); // it only selects those grid sections that necessarily have contato as well

const ul = document.getElementsByTagName('ul');

// Both of them above return a HTMLCollection 

console.log(gridSection[2]); // => array-like

//3. Universal General Selector

// querySelector is going to return the first element that com matches with the CSS selector

// const animais = document.querySelector('.animais');
// const contato = document.querySelector('#contato');
const ultimoItem = document.querySelector('.animais0lista li:last-item');
const linkCSS = document.querySelector('[hrefˆ="https://"]');
const primeiroUl = document.querySelector('ul');

// Searching - only - inside of the Ul previously declared
const navItem = primeiroUl.querySelector('li'); 

// querySelectorAll is going to select all the elements at the html - it returnos a NodeList (has methods and properties that HTML does not has). STATICS, if something new is added, it will be not updated

const animaisImg = document.querySelectorAll('.animais img');
console.log('animaisImg');

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('grid-section');

primeiroUl.classList.add('grid-section');

console.log(gridSectionHTML); // automatically updated, so it should have one more item at the console
console.log(gridSectionNode);

//HTMLCollection and NodeList are array-like, they seem to be an array but they aren not. But the forEach() method, for example, only exists in NodeList
// It is possible to transform an array-like into a real Array - to do so, use the method Array.from(selectorInAVariable); 

gridSectionNode.forEach(function(item, index){
    console.log(item);
});

// transforming into an array

const arrayGrid = Array.from(gridSectionHTML);

// Now, already as an array, it is possible to use forEach method

arrayGrid.forEach(function(item){
    console.log(item);
});

