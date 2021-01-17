// function somar(n1, n2) {
//     return n1 + n2;
// }

// console.log(somar.length); // property that returns the total of arguments
// console.log(somar.name); // property that returns function's name



// *** M  ain methods ***

// const carro = {
//     marca: 'Ford',
//     ano: 2018,
// }

// function descricaoCarro(velocidade) {
//     console.log(this);
//     console.log(this.marca + ' ' + this.ano + velocidade); //this makes a reference to the object Window, since it was not defined by us and it is the general object of the browser 
// }

// descricaoCarro.call({marca: 'Honda', ano: 2015},  100)

// function.call(additon of new objects, addition of parameters);




const li = document.querySelectorAll('li');

const filtro = Array.prototype.filter.call(li, (item) => { // it allow the use of filter (Array method) without transforming it into an Array in another variable
    return item.classList.containes('ativo');
});

console.log(filtro); 

console.log(li);