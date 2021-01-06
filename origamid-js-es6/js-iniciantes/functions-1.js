function imc(weight, height) { // parameters
    imc = weight / (height ** 2);
    return imc;
}

console.log(imc(63, 1.68)); // arguments 


// Arguments can be functions:

// Usally called as "Callback" and happens -- after -- an event 


addEventListener('click', function() {
    console.log('Oi');
});

function showConsole() {
    console.log('Olá')
}

addEventListener('click', showConsole); // is does not demand parenthesis because the JS understand the function has already been declared

// When return is not defined, the function is going to return 'undefined', even though the code inside it's block is executed

// The best practice is that a function only returns 1 data type

