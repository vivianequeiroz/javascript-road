
// Behavior as the same as the call method but arguments are provided as an 
// array 

// Syntax: apply(thisArg, [argsArray, ...]) 

this.name = "Viviane";
this.age = 21;

function sayMyName() {
  //arguments can deal with variables that are not provided by the function parameters
  this.age = arguments[0];
  this.fruit = arguments[1];
  console.log(this.name, this.age, this.fruit);
}

const dev = {
  name: "João",
};

sayMyName.apply(this, [18, "Orange"]);

function multiply() {
  const args = Array.from(arguments);
  return args.reduce((acc,item) => {
    return acc * item;
  }, 1)
}

const total = multiply.apply(this, [2, 5, 5]);
console.log(total); 