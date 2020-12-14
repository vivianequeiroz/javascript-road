// var when inserted in a block can "leak out" from it and it's value is reproduced out of it

{ 
    var car = 'mercedes'; 
    console.log(car);
}

console.log(car);

// to correct it and some other issues, ES6 introduced "let" and "const" that don't have this behaviour

{ 
    let car2 = 'gol';
    console.log(car2);
}

// console.log(car2); //here console show that car2 is not defined

// In for loops with var the variable that is the counter leak out: 

var i = 50

// for(var i = 0; i < 10; i++) {
//     console.log(`Número ${i}`);
// }

// console.log(i * 10); // result = 100. Instead of 0, i now stores number 10. 

for(let i = 0; i < 10; i++) {
    console.log(`Número ${i}`);
}

console.log(i * 10); // result = 500

//CONST - it preserves the block escope, avoid the redeclaration and also the modification of a variable value. 

const month = 'December';
// month = 'January'; modification of value tried
// const semana; // declared without value 

const date = {
    day: 12,
    month: 'December',
    year: '2018',
}

date.day = 29; // it works while it is an object 
// date = 'January'; it does not work because a different data type is trying to be added


// LET - equal to const with the difference that allows a value modification of a variable

