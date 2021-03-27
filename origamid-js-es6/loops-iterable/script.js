//Exercises 

// 1. Use for .. of to add a class into each li tag


const lis = document.querySelectorAll('li');

for(const li of lis){
    li.classList.add('active');
}

console.log(lis);



//2. Use for .. in to list all properties and values of window obj

for(const windowKey in window){
    console.log(windowKey + ': ' + window[windowKey])
}