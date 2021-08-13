// without webpack requires file extension
import { squareArea, squarePerimeter } from "./square.js";
//import teste from "./randomNumber.js";
import randomNumber from "./randomNumber.js";
import Circle from "./Circle.js";

console.log(squareArea(4));
console.log(squarePerimeter(5));
//default export does not require the same of the function as occurs with the previous examples
//console.log(teste());
console.log(randomNumber());

console.log(Circle.area(5));
console.log(Circle.circumference(5));
console.log(Circle.random());

//type module does not download the same resource twice so even thouth random number is imported into two different
//files it will be downloaded only once.
//its benefits are related to this behavior and to the option of high reuse of resources