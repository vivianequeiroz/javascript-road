// ********************   forEach and Arrow Function   ********************

// ------------------------------------------------------------------------

// forEach - make it possible to select many items and iteract with them

// parameters:
// 1rst - callback: the function that will be activated for each item
// This function can receive 3 parameters:  currentValue, index and array

// const imgs = document.querySelectorAll('img');

// let i = 0;

// imgs.forEach(function(item, index, array){
//     // console.log(item, index, array);
// });

// forEach is an Array method and some objects array0like have it. 
// However, when an objects does not have forEach method, it can be
// transformed into an Array:

// const titulos = document.getElementsByClassName('titulo'); // it return HTMLCollection
// const titulosArray = Array.from(titulos); // it transforms titulos into an Array

// titulosArray. forEach(function(item, index, array){
// //     console.log(item, index, array);
// // });

// ------------------------------------------------------------------------

// Arrow Function - shorter syntax in relation to a function expression. It removes the 
// word 'function' and add a fat arrow => after the arguments

const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
    console.log(item, index) //when it has only 1 line, do not put ;
});

// ALTERNATIVE WHEN CODE HAS ONLY 1 LINE
// let i  = 0;
// imgs.forEach(() => console.log(i++));
