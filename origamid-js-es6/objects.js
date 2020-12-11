// Objects are a set of variables and functions that are consequently called properties and methods.


// name (key) + value

var person = {
    name = 'Viviane',
    age = 20,
}

console.log(person.name);


var square = {
    sides = 4,
    area: function(side){
        return side * side;
    },
    perimeter: function(side){
        return this.sides * side; // this referecens the object itself and prevent the repetition of code/creation of more code like a new variable
    },
}

console.log(quadrado.side(5));

// At ES6 it is possible to omit the word function of a method. It also do not demand a parameter:

var square = {
    sides = 4,
    area(side){
        return side * side;
    },
    perimeter(side){
        return this.sides * side; // this referecens the object itself and prevent the repetition of code/creation of more code like a new variable
    },
}

// To access properties of an object a dot ( . ) is used
// A property can be attributed to a variable:

var menu = {
    width: 800,
    hegiht: 50, 
    backgroundColor: '#84E',
    halfHeight() {
        return this.hegiht / 2;
    }
}


// New properties can be added!

menu. backgroundColor = '#000';
menu.color = 'blue',

menu.hide = function() {
    console.log('Hided!');
}

// AN object inherit properties and methods from the object that was used to create it self

