//Constructor function:

// function Button(text, background) {
//     this.text = text;
//     this.background = background;
// }


// Button.prototype.element = function() {
//     const buttonElement = document.createElement('button');
//     buttonElement.innerText = this.text;
//     buttonElement.style.background = this.background;
//     return buttonElement;
// }


// Class: 
// the method constructor(args) {} receive all the properties the obj will have
// this. makes a reference to the obj created with new, and allow us to access the class's methods 

class Button {
    constructor(text, background) {
    this.text = text;
    this.background = background;
    }
    element() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    return buttonElement;
    }
    appendTo(target) {
        const targetElement = document.querySelector(target);
        targetElement.appendChild(this.element());
        return targetElement;
    }
}

const blueButton = new Button('Compras', 'blue');


console.log(blueButton.element());
console.log(blueButton.appendTo('body'));




// Static - allow us to create method directly in the class since that the methods created always
// are connected to the class prototype. 
// It is similar to the Array.from that is a method from the Array constructor, instead of [].map, that 
// is a method from an Array

class Button {
    constructor(options) {
        this.options = options;
    }

    static createButton(text, background) {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = this.text;
        buttonElement.style.background = this.background;
        return buttonElement;
    }
}

const optionBlue = {
     backgroundColor: 'blue',
     text: 'Comprar',
     color: 'white',
}

const blueButton = new Button(optionBlue);


const blueButtonStatic = Button.createButton('Clique', 'blue');