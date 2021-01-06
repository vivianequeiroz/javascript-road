function isTruthy(data) {
    return !!data; // !! to verify if it is a value is truthy or false
}

// calc of square perimeter

function squarePerimeter(side) { 
    return side * 4;
}

// full name

function fullName(name, lastName) {
    return `${name} ${lastName}`
}

// verify if the number is even 

function isEven(number) {
    if(number % 2 === 0){
        return 'Par';
    } else {
        return 'Ímpar';
    }
}

// verify data type

function dataType(data) {
    return typeof data;
}

// with addEventListener display full name when the user click on the page

addEventListener('click', function() {
    console.log('Viviane Queiroz');
});

