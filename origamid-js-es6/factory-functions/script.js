"use strict"

// Functions that return an object without the necessity of using the new word


function createButton(text) {

    function element() {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = text;
        return buttonElement;
    }

    return {
        text,
        element
    }
}

const btnBuy = createButton('Buy');
const btnSell = createButton('Sell');

// It allow the creation of private methods and variables
// Object.freeze

function Person(name) {
    if(!(this instanceof Person)) {
        return new Person(name);
    }
    this.name = name;
}

Person.prototype.walk = function() {
    return `${this.name} andou`;
}

const programmerStudent = Person('Viviane');

console.log(programmerStudent)