this.name = "João";

function showNameAndBirthYear(age) {
  this.name = "John";

  function birthYear(age) {
    this.name = "Joãozinho";

    const year = new Date().getFullYear() - age;
    console.log("Second function context -> ",this.name, year); 
  }

  birthYear(age);
  //this context will change, it requires attention when dealing with
  //functions inside functions
  console.log("First function context (modified) -> ", this.name);
}

showNameAndBirthYear(21);

console.log("Global context -> ", this.name);