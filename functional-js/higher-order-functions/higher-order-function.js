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

//existing functions of JS can be passed too
const result = run(Math.random); //without the return value at run() it returns
                                // undefined
console.log(result);
