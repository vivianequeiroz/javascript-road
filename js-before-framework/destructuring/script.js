function handleMouseMove(event) {
  //property names
  const { clientX, clientY, target } = event;
  console.log(clientX, clientY, target);
}

function handleMouseMove2({ clientX, clientY, target }) {
  //property names
  //when given at the argument position can be overridden
  console.log(clientX, clientY, target);
}

const fruits = ["Grape", "Orange"];

const [fruit1, fruit2] = fruits;
console.log(fruit1, fruit2);
//fruits remain the same
console.log(fruits);


document.documentElement.addEventListener("mousemove", handleMouseMove);
//document.documentElement.addEventListener("mousemove", handleMouseMove2);
