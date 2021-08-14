const prices = [
  "Crédito",
  "R$ 200",
  "R$ 400",
  "Contas Pagar",
  "R$ 300",
  "R$ 400",
  "Meus dados",
];

//All methods return new , they don't modify the original one

// ******* FILTER *******
// When return true include the obj into the string

// const pricesFilter = prices.filter(function (price) {
//   console.log(price.includes("R$"));
//   // without return => pricesFilter is undefined => false
//   // if return true => item is localted in the array
//   // if (price === "R$ 400") {
//   //   return true;
//   // } else {
//   //   return false;
//   //}
//   if (price.includes("R$")) {
//     return true;
//   } else {
//     return false;
//   }
// });

const pricesFilter = prices.filter((price) =>  price.includes("R$"));
console.log("Filter:")
console.log(pricesFilter);

// ******* MAP *******
// Apply an action for each item from the array selected and include the return in the new array

const pricesNumbers = pricesFilter.map((price) => +price.replace("R$", ""));
console.log("Map:")
console.log(pricesNumbers);


// ******* REDUCE *******
//Returns an unique value, the value returned from the last action executed
// previousValue is usually called as the accumulator (acc)
const total = pricesNumbers.reduce((previousValue, currentValue) =>  previousValue + currentValue, 0);
  // specify the value to start with, not mandatory, if not specified the first value of the array will be used
console.log(total);