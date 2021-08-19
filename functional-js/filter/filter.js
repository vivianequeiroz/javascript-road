// The result array can be the same size as the original or empty
// Returns a true or false result for each element

// Original array remains the same

const numbers = [1, 2, 3, 4, 5, 6];

const greaterThanZero = (el) => el > 0;
const even = (el) => el % 2 === 0;

console.log(numbers.filter(greaterThanZero));
console.log(numbers.filter(even));

const students = [
  { name: "John", score: 10 },
  { name: "Sofia", score: 10 },
  { name: "João", score: 9.9 },
  { name: "Sofie", score: 9.57 },
];

const greatestStudent = student => student.score >= 9.9;

console.log(students.filter(greatestStudent));
