// for .. of => a loop at each iteration of an iterable obj 
// Only iterable obj accepts the Spread operator **

// It occurs due to the method Symbol(Symbol.iterator) at their constructor


const fruits =['Banana', 'Strawberry', 'Grape'];
const frase = 'Loops and iterable in JavaScript';

for(const fruit of fruits) {
    console.log(fruit);
}

for(const char of frase) {
    console.log(char);
}


// for .. in => return the key of all enumerable properties (that aren't a symbol) of an obj
// only works for the enumrable property as true

const car = {
    brand: 'Honda',
    year: 2018,
}


Object.defineProperties(car, {
    wheels: {
        value: 4,
        enumerable: true
    }
})


for(const key in car){
    console.log(car[key]);
}

for(const f in fruits) {
    console.log(fruits[f]);
}

const btnUnic = document.querySelector('button');
const btnStyles = getComputedStyle(btnUnic);

for(const style in btnStyles) {
    console.log(`${style}: ${btnStyles[style]}`);
}