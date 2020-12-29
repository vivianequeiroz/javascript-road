// outerHTML, innerHTML e innerText

// They're attributes that return the HTML or it's text
// All of them allow us to modify the content of what we select

const h1 = document.querySelector('h1');

h1.outerHTML; // select all the HTML that wrap the element
h1.innerHTML; // select the intern HTML from the element (child)
h1.innerText; // return text, without tags

h1.innerText = '<p>Texto</p>'; // the tag will be added as a text
h1.innerHTML = '<p>Texto</p>'; // the tag will be rendered

// --------------------------------------------------------------------------------------------------------

// Transversing  - navigating by the DOM using it's properties and methods

const lista = document.querySelector('.animais-lista');

console.log(lista.parentElement); // father
console.log(lista.parentElement.parentElement);
console.log(lista.parentElement.parentElement.parentElement);

console.log(lista.nextSibling); // returns the next element below in the same level 
console.log(lista.previousElementSibling); //  returns the next element above in the same level 

console.log(lista.children[4]); // returns an HTML Collection that can be accessed as an Array
console.log(lista.children[--lista.children.length]); // returns the last item!


console.log(lista.querySelectorAll('li'));

console.log(lista.querySelector('li:last-child'));



// --------------------------------------------------------------------------------------------------------


// Elements and Node - element's represent a HTML element, a tag. Node represents any DOM 
// object and can be an element, text, comment, line break, etc.

console.log(lista.previousSibling); // returns the node above
console.log (lista.firstChild); // returns the first node child
console.log(lista.childNodes); // returns all the node's child