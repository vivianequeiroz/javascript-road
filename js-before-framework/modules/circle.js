import randomNumber from "./randomNumber.js";

function area(r) {
  return Math.PI * r + r;
}

function circumference(r) {
  return 2 * r * Math.PI;
}

function random() {
  return randomNumber;
}

const Circle = {
  area,
  circumference,
  random,
};

export default Circle;