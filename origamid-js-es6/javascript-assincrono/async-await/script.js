// async await

// async => assyncronous parts that must need resolved before continue with the function 
// await => indicates the promise we must wait for being resolved (ES8 feature)

async function puxarDados() {
    const dadosObjetoResponse = await fetch('./dados.json');
    console.log(dadosObjetoResponse);
    const dadosJSON = await dadosObjetoResponse.json();
    console.log(dadosJSON);
    documeent.body.innerText = dadosJSON.titulo;
}

puxarDados();

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