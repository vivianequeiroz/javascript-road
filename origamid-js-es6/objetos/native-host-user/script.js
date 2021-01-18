// There objects that are native of a language, of the host (browser) or 
// even from the user (libraries, objects created in the code); 

// EXERCISES

// 1. List 5 native objects

Object 
Array
String
Function 
Number


// 2. List 5 objects from the browser (dom)

// at console => window.

Window
innerHeight
HTMLCollection
localStorage
history



// 3. List 2 methods, properties or objects that exist in Chrome but did not exist in Firefox

// Search for the method Window in each browser! 

if(typeof document.webkitHidden !== "undefined") {
    console.log('Existe');
} else {
    console.log('Não existe');
}