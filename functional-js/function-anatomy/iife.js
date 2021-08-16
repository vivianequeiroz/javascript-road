// IIFE: Immediately Invoked Function Expression

//Since anonymous functions can't be invoked by a name, its called as soon as
// the parenthesis is closed

(function (a, b, c) {
  let x = 3;
  console.log(`Result: ${a + b + c}`);
  console.log(x);
})(1, 2, 3);

(function () {
  let x = 100;
  console.log(x);
})();

//Can receive arrow functions
(() => {
  console.log('Arrow 1');
})();

(() => console.log('Arrow 2'))();
