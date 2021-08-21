// Only gets the this of it's object independent of being or not in strict mode

this.name = "Violet";

const person = {
  name: "Violeta",
  sayMyName: function() {
    console.log(this.name);
  }
}

person.sayMyName();