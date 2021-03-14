// Without destructuring

const car1 = {
    brand: 'Honda',
    year: 2021
}

// To access only one property:

const brand1 = car1.brand;
const year1 = car1.year;

console.log(brand1, year1);

// -----------------------------------

// With destructing:

const car2 = {
    brand: 'Chevrolet',
    year: 2012
}

const {brand} = car2;

console.log(brand);

// Destructing is less verbose and allows nesting

// To change variable name:

const {year: yearChevrolet} = car2;

console.log(yearChevrolet)


// To destructuring an array, [] are used instedo of {} and 
// it is possible to freely name the variables:

const fruits = ['Banana', 'Watermelon', 'Grape'];

const [firstFruit, secondFruit, thirdFruit] = fruits;

console.log(firstFruit, thirdFruit);

// Even though it can be not so easyly readble,
// destructuring can be used to create multiples variables

const [firstItem, secondItem, thirdItem] = ['Item 1','Item 2','Item 3'];

console.log(firstItem, secondItem);



