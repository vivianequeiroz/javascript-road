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

console.log(pricesFilter);
