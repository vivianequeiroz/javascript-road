// const upperName = (name) => {
//   return name.toUpperCase();
// };

// const upperName = (name) => name.toUpperCase();
// const countLetters = (word) => word.length;

// console.log(countLetters("Test"));

class Menu {
  constructor(menu) {
    this.menuElement = document.querySelector(menu);
    this.activeClass = "active";
  }
  addActiveEvent() {
    // sem o arrow function ele não iria funcionar
    this.menuElement.addEventListener("click", (event) =>
      event.target.classList.add(this.activeClass)
    );
  }
}

const menu = new Menu(".principal");
menu.addActiveEvent();

//'This' makes a reference to the mother element, the function syntax creates a new context for 'this' keyword
