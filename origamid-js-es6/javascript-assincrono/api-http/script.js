// API

// Application - something we interct through commands
// Programming - a chain of pre defined events
// Interface - commands to interact with the application


// HTTP

// Hypertext Transfer Protocol
// Request made through an URL
// The pattern is GET method
// 











fetch('https://pokeapi.co/api/v2/pokemon/')
.then(response => response.json(){
    .then(pokemon => {
        console.log(pokemon);
    })
})


const url = 'htpps://jsonplaceholder.typicode.com/posts';
const options = {
    method: 'POST',
    body: '{"title": "JavaScript"}',
    headers: {
        "Content-Type": "application/json; charset-utf-8"
    }
}

fetch(url, options)
.then(response => response.json())
.then(json => console.log(json));