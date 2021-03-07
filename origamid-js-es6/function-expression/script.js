// Declaration: (has hoisting)

// * Pro: Good when for some reason it's necessary to activate the function before it's declaration
// * Con: The name of the function will be inserted in the Windows objected and it can make a conflict emerge with same functions names
// function sum(a,b) {
//     return a + b;
// }

// Expression: (has'nt hoisting)

// * Pro: Forces the function creation before it's usage, what can avoid errors nad also does not inject the function into the Windows object
// 
// Not the best practice due to low code legibility, but it exists
const sum = (a,b) => a+ b;
const square = a => a * a;



// IIFE - Immediately Invoked function expression - used before the introduction of modules
// Some olders browsers used to convert modules into IIFE
// IIFE goal was also to isolate the JS code scope.


var instrument = 'Guitar';

(function(){
    // code isolated from the global scope
    var instrument = 'Electric guitar';
    console.log(instrument); // Electric guitar
})();
// () => immediate activation

console.log(instrument); // Guitar

