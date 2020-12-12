var videoGames = ['Nitendo', 'PS4', 'XBoxOne'];

var lastItem = videoGames.pop(); // ,pop returns AND remove the last item in the array list 

videoGames.push('3DS'); // add the item at the last position of array


// LOOPS

for( var i = 0; i <= 5; i++) {
    console.log(i);
}  

var i = 0;

while(i <= 10) {
    console.log(i);
    i++
}

// LOOPS AND ARRAYS

var videoGames2 = ['Nitendo', 'PS4', 'XBoxOne', '3DS'];

for( i = 0; i < videoGames2.length; i++) {
    console.log(videoGames2[i]); // to display each content of the array instead of it`s position in it
}

// LOOPS WITH BREAK COMMAND 

var videoGames3 = ['Nitendo', 'PS4', 'XBoxOne', '3DS'];

for( i = 0; i < videoGames2.length; i++) {
    console.log(videoGames2[i]);
    if(videoGames3[i] === 'PS4') {
        break;
    }
}

//

var fruits = ['banana', 'grape', 'pineaple', 'apple'];

fruits.forEach(function(fruit, index, array) { // forEach is a method that executs a function we determined for each item of the array. Simplest form to use loop with arrays
    console.log(fruit, index, array);
});
 
var lastFruit = fruits[fruits.length - 1]; // to put the last item in a variable without removing it from the array 

console.log(lastFruit);