// Get global this only if it is not in strict mode

this.name = "Sofie";

function sayMyName() {
  return console.log(this.name);
}

sayMyName();
