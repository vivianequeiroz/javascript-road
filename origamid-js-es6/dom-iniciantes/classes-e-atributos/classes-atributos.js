// ********************   Classes and Attributes   ********************

// ---------------------------------------------------------------------


// ClassList is an object that allows the addition, deletion, 
// verification and substitution of classes. Inside it there are
// more methods 

const menu = document.querySelector('.menu');

console.log(menu.classList);

menu.classList.add('ativo', 'teste');
menu.classList.remove('ativo');
menu.classList.toggle('azul'); // if it exists, remove, if doesn't, add

if(menu.classList.contains('azul')){
    menu.classList.add('possui-azul');
} else {
    menu.classList.add('nao-possui-azul');
}

// To ADD a class at previous versions of ES6: 

menu.className += ' vermelho';
console.log(menu.className);


// ---------------------------------------------------------------------


// Attributes return an array-li with the elements attributes

const animais = document.querySelector('.animais');

animais.attributes; // return all the atttributes on code
console.log(animais.attributes);

console.log(animais.attributes[0]); // return the first position

// getAttribute and seAttribute are methods that return or define 
// accordingly to the attribute selected

const img = document.querySelector('img'); 
const srcImg = img.getAttribute('src');

console.log(srcImg);

img.setAttribute('alt', 'Foto de raposa vermelha'); // first the attribute that will
                                            // be defined. JS DO NOT VERIFY
                                            // IF IT IS A VALID ATTRIBUTE!

const possuiAlt = img.hasAttribute('alt'); // verify if the attribute exists
console.log(possuiAlt);



// ---------------------------------------------------------------------


// READ ONLY e WRITABLE

// There are properties that do not allow the change of it's values,
// known as read only. 

// const animais = document.querySelector('.animais');

// animais.className; // return string with the name from the classes
// animais.className = 'azul'; // make a complete substitution the string
// animais.className += ' laranja'; // add orange to the string

// class.Name is an attribute that allow us to write on it 

// animais.attributes = 'class="ativo"'; // does not work, ,attributes is read-only