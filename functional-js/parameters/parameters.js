// JS is a flexible language, so if more parameters were provided than the
// function is able to handle, it simply ignore the additional ones

function logParams(a, b, c) {
  console.log(a, b, c);
}

logParams(1, 2, 3, 4, 5);
logParams(1, 2, 3, 4);
logParams(1, 2, 3);
logParams(1, 2); // the third position display 'undefined' value

const x = logParams(1);
console.log(x); // returns undefined since the function hasn't a return value

function defaultParams(a, b, c = 0) {
  console.log(a, b, c);
}

defaultParams(1, 2, 3); // 1 2 3
defaultParams(1, 2); // 1 2 0
defaultParams(1); // 1 undefined 0

//Receiving a non fixed total of numbers:
function logNums(numbers) {
  for (let number of numbers) {
    console.log(number);
  }
}
logNums([1, 2, 3, 4, 5]);
//Using spread/rest operator:
function logNumsSpreadRest(...numbers) {
  console.log(numbers);
}
logNumsSpreadRest(6, 7, 8, 9, 10);

function sumAll(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

console.log(sumAll(5, 4, 9));
