// function somar(n1, n2) {
//     return n1 + n2;
// }

// console.log(somar.length); // property that returns the total of arguments
// console.log(somar.name); // property that returns function's name



// *** M  ain methods ***

// CALL

// const carro = {
//     marca: 'Ford',
//     ano: 2018,
// }

// function descricaoCarro(velocidade) {
//     console.log(this);
//     console.log(this.marca + ' ' + this.ano + velocidade); //this makes a reference to the object Window, since it was not defined by us and it is the general object of the browser 
// }

// descricaoCarro.call({marca: 'Honda', ano: 2015},  100)

// function.call(additon of new objects, addit ion of parameters);




const li = document.querySelectorAll('li');

const filtro = Array.prototype.filter.call(li, (item) => { // it allow the use of filter (Array method) without transforming it into an Array in another variable
    return item.classList.containes('ativo');
});

console.log(filtro); 

console.log(li);





//APPLY - works as call, but the arguments of the function are passed through an array


const numeros = [3, 4, 6, 1, 43, 44, 32];

Math.max.apply(null, numeros);
Math.max.call(null, 3, 4, 5, 6 ,7, 20);

// null can be passed to this in case the function do not use the main object to work 