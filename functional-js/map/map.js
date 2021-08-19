// Map generates another array and apply the function given to each element.

const numbers = [1, 2, 3, 4, 5, 6];

const mapNumbers = numbers.map((el) => el * 2 + 1000);
console.log(mapNumbers);

const students = [
  { name: "John", score: 10 },
  { name: "Sofia", score: 10 },
  { name: "João", score: 9.9 },
  { name: "Sofie", score: 9.57 },
];

const getScore = (el) => el.score;

const result = students.map(getScore).map(Math.ceil);

console.log(result);
