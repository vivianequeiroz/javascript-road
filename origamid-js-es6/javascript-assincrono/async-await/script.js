// async await

// async => assyncronous parts that must need resolved before continue with the function 
// await => indicates the promise we must wait for being resolved (ES8 feature)

// try and catch => visualize errors


// async function puxarDados() {
//     try {
//         const dadosObjetoResponse = await fetch('./dados.json');
//         // console.log(dadosObjetoResponse);
//         const dadosJSON = await dadosObjetoResponse.json();
//         // console.log(dadosJSON);
//         documeent.body.innerText = dadosJSON.titulo;
//      } catch(erro) {
//          console.log(erro);
//      }
   
// }

// puxarDados();

// Comparing with .then, async await has a clearer syntax 

// .THEN
// function iniciarFetch() {
//      fetch('./dados.json')
//      .then(dadosResponse => dadosResponse.json())
//      .then(dadosJSON => {
//       document.body.innerText = dadosJSON.titulo;
//})
//}
// iniciarFetch();


// ASYNC AWAIT
// async function iniciarAsync() {
//     const dadosResponse = await fetch('./dados.json);
//     const dadosJSON = await dadosResponse.json();
//     document.body.innerText = dadosJSON.titulo;
// }
// iniciarAsync();


// It's is not necessary to wait for a fetch in order to
// begin another one. But, it is necessary to wait for the resolved
// response of one to transform it into a json format response.

async function iniciarAsync() {
    const dadosResponse = fetch('./dados.json');
    const clientesResponse = fetch('./clientes.json');

    // there is a wait of what is inside the expression () to occur first
    const dadosJSON = await (await dadosResponse).json();
    const clientesJSON = await (await clientesResponse).json();

    console.log(dadosJSON, clientesJSON)
}

iniciarAsync();


// Promises => The result of the expression in front of await need to be a promise
// Await returns always will be the result of this promise 


// async function asyncSemPromise() {
    // Console will not wait for it
    // await setTimeout(() => console.log('Depois de 1 segundo'), 1000);
    // console.log('Acabou');
// }
//asyncSemPromise();

async function iniciarAsync() {
    await new Promise(resolve => {
        setTimeout(() => resolve(), 2000)
    });
    console.log('Depois de 2 segundos');
}
iniciarAsync();