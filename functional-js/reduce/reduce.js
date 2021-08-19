// Map, filter and reduce can all receive more than one parameter
// element, index, array
// But Reduce usually has 2 parameters (accumulator, element)

const numbers = [1, 2, 3, 4, 5, 6];

const sum = (total, el) => total + el;

const total = numbers.reduce(sum);
console.log(total);


const average = (acc, el, i, array) => {
  if (i === array.length - 1) {
    return (acc + el) / array.length;
  } else {
    return acc + el;
  }
};

const result = numbers.reduce(average)

console.log(result);