fetch('./dados/json')
.then( r => r.json())
.then(json => {       //transform the json into an object so the quotation marks are removed
    // console.log(json[0].aula);
    json.forEach(materia => {
        console.log(materia.aula);
    })
})

// JSON.parse() => transform a JSON text into an JS Object
// JSON.stringfy() => transform an JS Object into an JSON format file


// fetch('./dados/json')
// .then( r => r.text())
// .then(jsonText => {       //transform the json into an object so the quotation marks are removed
//     const jsonFinal = JSON.parse(jsonText)
//     json.forEach(materia => {
//         console.log(materia.aula);
//     })
// })


const configuracoes = {
    player: "Google",
    tempo: 25.5,
    aula: "2.1 JavaScript",
}

const stringConfig = JSON.stringify(configuracoes);
// console.log(stringConfig);
// creating an object: 


localStorage.config = JSON.stringify(configuracoes);

console.log(JSON.parse(localStorage.config));