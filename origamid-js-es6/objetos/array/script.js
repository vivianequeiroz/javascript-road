//EXERCISES


const comidas = ['Pizza', 'Brocolis', 'Alface', 'Macarrao']

// Add 'Arroz' at the end of the array
comidas.push('Arroz'); 
console.log(comidas);

// Add 'Tofu' and 'Batata' at the beginning of the array
comidas.unshift('Tofu', 'Batata');
console.log(comidas);

// Remove the first value and add it into a variable
const primeiraComida = comidas.shift();
console.log(primeiraComida);

// Remove the last value and add it into a variable
const ultimaComida = comidas.pop();
console.log(ultimaComida);



// -------------------------------------------------------------------------



const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];

// Organize the students in alphabetic order
console.log(estudantes.sort());

// Invert the students's names order
console.log(estudantes.reverse());

// Verify if Joana is part of the students
console.log(estudantes.includes('Joana'));

// Verify if Juliana is part of the students
console.log(estudantes.includes('Juliana'));


// ------------------------------------------------------------------------


// Substitute section to ul and fiv to li using split and join


let html = `<section> 
                <div>Sobre</div>
                <div>Produtos</div>
                <div>Contato</div>
            </section>`

html = html.split('section');
console.log(html);

html = html.join('ul');
console.log(html);

html = html.split('div');
console.log(html);

html = html.join('li');
console.log(html);


// ------------------------------------------------------------------------

const carros = ['Ford', 'Fiat','VW', 'Honda'];

// Remove the last car, but before it save the original array into another variable

let novoCarros = carros.slice();

novoCarros.pop();

console.log(novoCarros);