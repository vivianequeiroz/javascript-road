// FETCH API

// Make HTTP/HTTPS request through the method fetch(). So, the fetch method requires a local server to work properly
// It returns a promise resolution
// then() can be used to interact with the response, an object of type Reponse


const doc = fetch('./doc.txt'); 

console.log(doc);
// Show a promise

doc.then(resolucao => console.log(resolucao));


// RESPONSE

// The object Response has a body with the content of response. It can ben transformed by 
// using the prototype methods from the Response object. They return other promises and 
// usually require another then() to work with the text body 

// doc.then(resolucao2 => {
//     return resolucao2.text();
// }).then((body) => {
//     const conteudo = document.querySelector('.conteudo');
//     conteudo.innerText = body;
// });
 
doc
.then( r => r.text()) // just a promise, another then() required to work with the body text
.then(body => {
    const conteudo = document.querySelector('.conteudo');
    conteudo.innerText = body;
});