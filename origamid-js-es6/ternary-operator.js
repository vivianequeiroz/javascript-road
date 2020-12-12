// condition ? true : false 

var age = 20;

var canDrink;
var dontHaveDiabetes = true;

canDrink = (age >= 18 && dontHaveDiabetes) ? 'Pode beber.' : 'Não pode beber.';

console.log(canDrink);

var hasCar = true;
var hasHouse = true;

var giveCredit;

giveCredit = (hasCar && hasHouse) ? 'Você pode receber crédito!' : 'Você ainda não pode receber crédito!';
console.log(giveCredit);