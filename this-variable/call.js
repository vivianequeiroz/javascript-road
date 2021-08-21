//MDN: "Call method make it possible to write a method once and then inherit it
//in another object, without having to rewrite the method for the new object"

//Syntax: call(thisArg, arg1, ... , argN)

this.name = "Viviane";

function sayMyName(age) {
  this.age = age;
  console.log(this.name, this.age);
}

const dev = {
  name: "João",
};

sayMyName.call(this, 18);
sayMyName.call(dev, 19);

console.log(this.age);
console.log(dev.age);
