// .forEach(callback(actualItem, index, array))

// const carros = ['Ford', 'Fiat', 'Honda']
// carros.forEach((item, index, array) => {
//     console.log(item, index, array);
// });

// If array is modified, it will also change the original array 

// FOREACH always return UNDEFINED






// .MAP works as .forEach but it's returns is A NEW ARRAY with the updated values 
// from the return of each iteration 

// const carros = ['Ford', 'Fiat', 'Honda']

// const novaArray = carros.map((item, index, array) => {
//     return item.toUpperCase();
// });

// console.log(novaArray);

// // carros remains untouchable 

// console.log(carros);

// const numeros = [2, 4, 3 , 6, 75, 43]; 

// const numerosX2 = numeros.map(n => n * 2);

// console.log(numerosX2);

// // .map requires a return, if it has not, the return is going to be UNDEFINED 




// const aulas = [     
//     {
//         nome: 'HTML 1',
//         min: 15
//     },
//     {
//         nome: 'HTML 2',
//         min: 10
//     },
//     {
//         nome: 'CSS 1',
//         min: 20
//     },
//     {
//         nome: 'JS 1',
//         min: 25
//     },
// ]

// *** In this example, 'aula' needs to be an object to properly work as a callback in the .map method

// const tempoAulas = aulas.map(aula => aula.min); // arrow function 

// const nomeAulas = aula => aula.nome; // arrow function 

// const nomeAulas2 = function(aula) {
//     return aula.nome;
// };

// const arrayNomeAulas = aulas.map(nomeAulas2); // ***

// console.log(arrayNomeAulas);

// console.log(tempoAulas);




// [].REDUCE returns a UNIQUE value of the final iteration - it has an accumulator -
// If the accumulator is not defined, the method will consider it as the first item of the array
// So, there will be a decrease of 1 iteration:

// const aulas = [10, 25, 30];

// const reduceAulas = aulas.reduce((accumulator, item) => {
//     console.log(accumulator, item);
//     return accumulator + item;
// });

// console.log(reduceAulas);

// But when defined, it will iterate the exact same amount of items in the array

// const reduceAulas2 = aulas.reduce((accumulator, item) => {
//     console.log(accumulator, item);
//     return accumulator + item;
// }, 0);

// console.log(reduceAulas2);




// const numeros = [12,43,546,57,45,34,233];

// const maiorNumero = numeros.reduce((anterior, atual) => {
//     return anterior > atual ? anterior : atual;
// }, 0);

// console.log(maiorNumero);




// const aulas = [     
//     {
//         nome: 'HTML 1',
//         min: 15
//     },
//     {
//         nome: 'HTML 2',
//         min: 10
//     },
//     {
//         nome: 'CSS 1',
//         min: 20
//     },
//     {
//         nome: 'JS 1',
//         min: 25
//     },
// ]

// const listaAulas = aulas.reduce((accumulator, aula, index) => { // aula === item
//     accumulator[index] = aula.nome;
//     return accumulator;
// }, {});

// How the reduce method create this object: 

// //1.
// aulas.reduce(({}, {nome: 'HTML 1', min: 15}, 0) => {
//     {}[0] = 'HTML 1';
//     return {0: 'HTML 1'};
// }, {});

// //2.
// aulas.reduce(({0: 'HTML 1'}, {nome: 'HTML 2', min: 10}, 1) => {
//     {0: 'HTML 1'}[1] = 'HTML 2';
//     return {0: 'HTML 1', 1: 'HTML 2'};
// }, {});

// //3.
// aulas.reduce(({0: 'HTML 1', 1: 'HTML 2'}, {nome: 'CSS 1', min: 20}, 2) => {
//     {0: 'HTML 1', 1: 'HTML 2'}[2] = 'CSS 1';
//     return  {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'};
// }, {});

// //4.
// aulas.reduce(({0: 'HTML 1', 1: 'HTML 2', 3: 'CSS 1'}, {nome: 'JS 1', min: 25}, 3) => {
//     {0: 'HTML 1', 1: 'HTML 2', 3: 'CSS 1'}[3] = 'JS 1';
//     return {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1', 3: 'JS 1'};
// }, {});



// [].reduceRight ==> iteration occurs from right to left!


// // [].some(); ==> if AT LEAST ONE return is truthy, returns true 
// const frutas = ['Banana', 'Pêra', 'Uva']; 

// const temUva = frutas.some((item) => {
//     console.log(item);
//     return item === 'Uva';
// }); 




// [].every(); ==> if ALL the returns are truthy, returns true. If at least one of it is falsy, returns false


// const numeros = [3,3,3,2];

// const maiorQue3 = numeros.every( n => n > 3);
// console.log(maiorQue3);




// [].findIndex() ==> returns the value of the first iteration that returns true
// [].find() ==> returns the index of the first iteration that returns true

// const numerosMaior3 = numeros.findIndex(n => n > 1);
// console.log(numerosMaior3);

// const numerosMaior2 = numeros.find(n => n > 1);
// console.log(numerosMaior3);






// [].filter(); ==> returns an array with a list of the values that returned true


// const numeros = [ 45,65,6,3,42,5,76,44,6456,67,4343,54,657,6,53,432,4243]


// const buscaMaior200 = numeros.filter(n => n > 200);



// const aulas = [     
//     {
//         nome: 'HTML 1',
//         min: 15
//     },
//     {
//         nome: 'HTML 2',
//         min: 10
//     },
//     {
//         nome: 'CSS 1',
//         min: 20
//     },
//     {
//         nome: 'JS 1',
//         min: 25
//     },
// ]


// const aulasMaiores15 = aulas.filter((aula) => {
//     return aula.min > 15;
// });

// console.log(aulasMaiores15);









