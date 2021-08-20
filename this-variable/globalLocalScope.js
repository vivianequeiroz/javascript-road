// Global Scope
this.name = "João";

console.log(this.name);

this.notGlobalname = "Viviane";

// Returns undefined
function sayMyName() {
  console.log(this.name);
}

sayMyName();

