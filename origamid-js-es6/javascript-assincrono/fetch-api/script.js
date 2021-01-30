// // FETCH API

// // Make HTTP/HTTPS request through the method fetch(). So, the fetch method requires a local server to work properly
// // It returns a promise resolution
// // then() can be used to interact with the response, an object of type Reponse


// const cep = fetch('https://viacep.com.br/ws/05853390/json/'); 

// console.log(cep);
// // Show a promise

// cep.then(resolucao => console.log(resolucao));


// // RESPONSE

// // The object Response has a body with the content of response. It can ben transformed by 
// // using the prototype methods from the Response object. They return other promises and 
// // usually require another then() to work with the text body 

// // cep.then(resolucao2 => {
// //     return resolucao2.text();
// // }).then((body) => {
// //     const conteudo = document.querySelector('.conteudo');
// //     conteudo.innerText = body;
// // });
 
// cep
// .then( r => r.json()) // just a promise, another then() required to work with the body text
// .then(body => {
//     console.log(body.bairro);
//     const conteudo = document.querySelector('.conteudo');
//     conteudo.innerText = body.logradouro;
// });



// // Injection of CSS Style with text():

// // const style = fetch('./style.css');

// // style.then(r => r.text())
// // .then(body => {
// //     const conteudo = document.querySelector('.conteudo');
// //     const css = document.createElement('style');
// //     css.innerHTML = body;
// //     conteudo.appendChild(css)
// // })

// const sobre = fetch('./sobre.html');

// const div = document.createElement('div');

// sobre.then(r => r.text())
// .then(body => {
//     console.log(body);
//     div.innerHTML = body;
//     const titulo = div.querySelector('h1');
//     document.querySelector('h1').innerText = titulo.innerText;
// });



// .blob()

const imagem = fetch('./screenshot.png');

imagem.then(r => r.blob())
.then(body => {
    const blobUrl = URL.createObjectURL(body);
    console.log(blobUrl);
    const imagemDom = document.querySelector('img');
    imagemDom.src = blobUrl;
})
