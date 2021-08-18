//Functions as a parameter

//Functions that are passed as a parameter to another function or are returned
// by it

function run(func) {
  return func();
}

function sayHello() {
  console.log("Hello!");
}

run(sayHello);
// run(sayHello()) => returns undefined

//an anonymous function can be passed as a parameter
run(function () {
  console.log("Run!");
});

//existing functions of JS can be passed as a parameter too
const result = run(Math.random); //without the return value at run() it returns
                                // undefined
console.log(result);




// Function as a return

// function finalPrice(tax, price) {
//   return price * (1 + tax);
// }


function finalPrice(tax) {
  return function(price) {
    return price * (1 + tax);
  }
}
const brFinalPrice = finalPrice(0.0875);

console.log(brFinalPrice(25.1));