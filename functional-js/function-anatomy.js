//***** Function declaration ***** 

//Does not receive parameters neither 
//has a return statement
function sayHello() {
  console.log('Hello');
}

sayHello();

// let test = sayHello();
// console.log(test);               => returns undefined

//Receives a parameters but has not a return statement
function sayHelloTo(name) {
  console.log(`Hello ${name}`);
}

sayHelloTo('John');


//Has a return statement but not parameters
function returnHi() {
  return 'Hi!';
}

let greeting = returnHi();
console.log(greeting);
console.log(returnHi());


//Receive both parameter and a return statement
function returnHiTo(name ) {
  return `Hi ${name}!`;
}
console.log(returnHiTo('John'));
