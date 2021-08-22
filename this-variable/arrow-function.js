this.name = "João";

const showNameAndBirthYear = (age) => {
  this.name = "John";
  const birthYear = (age) => {
    this.name = "Joãozinho";
    const year = new Date().getFullYear() - age;
    console.log("Second arrow function context -> ",this.name, year); 
  }

  birthYear(age);
}

showNameAndBirthYear(21);
