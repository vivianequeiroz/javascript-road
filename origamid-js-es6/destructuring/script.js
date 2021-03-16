// Exercises


//1. Extract the backgroundColor, color and margin from button
const btn = document.querySelector('button');
const btnStyles = window.getComputedStyle(btn);

const {backgroundColor, margin, color} = btnStyles;


console.log(backgroundColor, margin, color)