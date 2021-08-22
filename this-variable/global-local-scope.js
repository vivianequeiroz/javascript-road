//Without 'use strict' the 
//variable 'this' in sayMyName() would not respect the context and 
//"Joao" would be read
//So, by the use of strict mode, we can prevent this innacurate behaviour
//and 'this' variable of each function and method is isolated
"use strict"

// // Global Scope
this.name = "João";

console.log(this.name);

this.notGlobalname = "Viviane";

// Returns undefined since the this has another context, the one from
// sayMyName() in which no name is defined
function sayMyName() {
  console.log(this.name);
}

sayMyName();

const userWithName = {
  // With name commented, the function returns undefined
  // name: "John",
  // if we use an arrow function here the 'this' would have the global scope
  // here the function is a method, so it has an isolated context
  sayMyName2: function() { 
    console.log(this.name);
  } 
}

userWithName.sayMyName2();

// Window is the 'this' variable at the browser 