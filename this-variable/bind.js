// Returns the function called but as a bound function


this.name = "Viviane";
this.age = 21;

function sayMyName(age) {
  this.age = age;
  console.log(this.name, this.age);
}

const dev = {
  name: "João",
  age: 18,
  sayMyAge: function() {
    console.log(this.age);
  }
};

const boundSayMyNameGlobalThis = sayMyName.bind(this);
boundSayMyNameGlobalThis(20);

const boundSayMyNameDev = sayMyName.bind(dev);
boundSayMyNameDev(21);

const boundSayMyNameDev2 = sayMyName.bind(dev)(23);


// age() will return undefined undefined => const age = dev.sayMyAge();
                        // the bind method reestablish the connection that was
                        // cut off when setting the variable age
                        // it can be bounded to any other context
const age = dev.sayMyAge.bind(dev);
age();