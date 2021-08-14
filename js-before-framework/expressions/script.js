const groupA = 100;
const groupB = 300;


// Not an expression
if(groupA > groupB) {
  console.log("Test");
}

// Valid expressions:
const winner = groupA > groupB ? "Group A won!" : "Group B won!";
console.log(winner);

const squareArea = l => l * l;