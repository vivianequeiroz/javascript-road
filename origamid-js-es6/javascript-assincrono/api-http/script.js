// API

// Application - something we interct through commands
// Programming - a chain of pre defined events
// Interface - commands to interact with the application

// fetch('https://pokeapi.co/api/v2/pokemon/')
// .then(response => response.json(){
//     .then(pokemon => {
//         console.log(pokemon);
//     })
// })




// HTTP

// Hypertext Transfer Protocol
// Request made through an URL
// The pattern is GET method

// GET - pull information from post, users, etc.
// POST - create posts, users, etc.
// PUT - usually to update info
// DELETE - to delete info
 

// Headers

// "allows you to perform various actions on HTTP request and response headers." -mdn

// Cache-Control: max time a file can be in cache (seconds) 
// Content-Type: indicates content type. Mostly, POST and PUT                                 

// const url = 'htpps://jsonplaceholder.typicode.com/posts';
// const options = {
//     method: 'POST',
//     body: '{"title": "JavaScript"}',
//     headers: {
//         "Content-Type": "application/json; charset-utf-8"
//     }
// }

// fetch(url, options)
// .then(response => response.json())
// .then(json => console.log(json));



// CORS

// At the server, it is defined if the resources are
// allowed or not to the content through script of others

// A proxy can beat the barrier

const url = 'https://cors-anywhere.com/https://www.google.com';

fetch(url)
.then(response => response.text())
.theb(text => console.log(text));