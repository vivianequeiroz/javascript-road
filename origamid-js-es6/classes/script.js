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
}

const blueButton = new Button('Compras', 'blue');


console.log(blueButton.element());