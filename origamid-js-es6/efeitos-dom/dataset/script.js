                    // ***** Data Attributes *****



// const h1 = document.querySelector('h1');

// console.log(h1);
// console.log(Object.prototype.toString.call(h1));


// console.log(h1.dataset);

// There are 3 ways we can access data attributes:

let div = document.querySelector('div');
div = document.querySelector('[data-cor]');
div = document.querySelector('[data-cor="azul"]');

console.log(div.dataset.cor);


div.dataset.height = 1000;
console.log(div.dataset);

delete div.dataset.height;
console.log(div.dataset);



// The attributes and values that starts with "data-" can
// be used as a way to config plugins and DOM/JS interactions

// Why data and not class?
// The advantage in using data attributes is that they turn it 
// more easier to avoid CSS styles conflicts.
// Moreover, data attributes makes the tag more organized.

// Nomenclature
// At the HTML element - dash-separated name
// At JS manipulation - camel Case 