// Exercises


//1. Extract the backgroundColor, color and margin from button
const btn = document.querySelector('button');
const btnStyles = window.getComputedStyle(btn);

const {backgroundColor, margin, color} = btnStyles;


console.log(backgroundColor, margin, color);



//2. Switch variables names

let activeCourse = 'JavaScript';
let inactiveCourse = 'HTML';

// let javascript = {activeCourse: Javascript};

// console.log(javascript);

[activeCourse, inactiveCourse] = [inactiveCourse, activeCourse]

console.log(activeCourse, inactiveCourse);

const dog = {
    name: 'Bob',
    breed: 'Labrador',
    color: 'Yellow'
}

const {color: bobColor} = dog; 