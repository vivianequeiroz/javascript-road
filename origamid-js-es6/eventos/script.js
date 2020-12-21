//  // ********************     Events    ********************

// // ------------------------------------------------------------------------

// // Events add a function called 'callback' into an element 
// // it will be activated at the momento that an specific event occur
// // at this element


// const img = document.querySelector('img');


// //element.addEventListener(event, callback, options)
// img.addEventListener('click', function() {
//     console.log('Clicou!');
// });

// // third parameter is optional


// // It is a good practice to separate the callback function from the
// // addEventListener by declaring an function before:

// const img = document.querySelector('img');

// function callback() {
//     console.log('Clicou!');
// }

// img.addEventListener('click', callback); // this is the correct way
// // img.addEventListener('click', callback()); // it will result in 'undefined' 
// // a anonymous functions make it hard to debug the code 


// const animaisLista = document.querySelector('.animais-lista');

// function animaisCallback(event){
//     const currentTarget = event.currentTarget; // returns the entire element
//     const target = event.addEventListener; // returns exactly where the event ocurred
//     const type = event.type; // returns a string with the event type
//     const path = event.path;
//     console.log(currentTarget, target, type, path); 
// }

// animaisLista.addEventListener('click', animaisCallback);


// //event.preventDefault()

// // It is a method that prevents the browser's standard behavior 

// const linkExterno = document.querySelector('a[hrefˆ="http"]');

// function clickNoLink(event){
//     event.preventDefault();
//     console.log(event.currentTarget.href);
// }

// linkExterno.addEventListener('click', clickNoLink);


// // this
// // In events, it references the element in which the addEventListener was added
// // In general, it is equal to event.currentTarget:

// const linkExterno = document.querySelector('a[hrefˆ="http"]');

// function clickNoLink(event){
//     event.preventDefault();
//     console.log(this);
//     console.log(evenet.currentTarget);
// }

// linkExterno.addEventListener('click', clickNoLink);

// //There are a lot of events as click, scroll, resize, keydown, keyup, mouseenter, etc.
// // Events can be added into different elements, as windows and document as well

// const h1 = document.querySelector('h1');

// function callback(event) {
//     console.log(event.tye, event);
// }

// h1.addEventListener('click', callback);
// h1.addEventListener('mouseenter', callback);
// window.addEventListener('scroll', callback);
// window.addEventListener('resize', callback);
// window.addEventListener('keydown', callback);




//Keyboard - events that helps with the navigation at the site

function handleKeyboard(event) {
    if(event.key === 'a') {
        document.body.classList.toggle('azul');
    }
}

window.addEventListener('keydown', handleKeyboard);





