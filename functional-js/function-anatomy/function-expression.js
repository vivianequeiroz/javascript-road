// Anonymous function
(function (a, b, c) {
  return a + b + c;
});

// Function expression -> set a variable value as a function
const sum = function (a, b) {
  return a + b;
};

const result = sum(5, 5);
console.log(result);

const anotherSum = sum;
console.log(anotherSum(5, 9));


let x = 3;