// //REST
// function showList(company, ...customers) {
//   console.log(company);
//   console.log(customers);
// }

// //SPREAD

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(Math.max(...numbers));

// const items = document.querySelectorAll("li"); // NodeList

// //'spread' items into an array so methods such as .map can be accessed
// [...items].map((item) => {
//   console.log(item);
// });

// console.log(items);

// const car = { color: "Blue", doors: 4, year: 2000 };
// console.log(car);

// const carClone = { ...car };
// console.log(carClone);

// // its calleda  shallow clone since its prototype isnt 100% equal to the original obj
// const shallowCarClone = { ...car, airbags: 2 };
// console.log(shallowCarClone);

class Transport {
  constructor() {
    this.ground = true;
  }

  move() {
    console.log("move");
  }
}

class Car extends Transport {
  constructor(color, doors) {
    super();
    this.color = color;
    this.doors = doors;
  }
}

const car = new Car("red", 4);
console.log(car.move());
////<prototype>: Car { … }

const shallowCloneCar = { ...car };
console.log(shallowCloneCar );
//<prototype>: Object { … }
