setTimeout(function() {
    console.log('Time 1');
});

setTimeout(function() {
    console.log('Time 2');
}, 100);

console.log('log 1');

setTimeout(function() { 
    console.log('Time 3');
}, 50);

console.log('Log 2');

// Output: 
// Log 1
// Log 2
// Time 1
// Time 3
// Time 2