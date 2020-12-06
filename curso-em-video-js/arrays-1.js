let num = [5, 8, 2, 9, 3];
num.sort(); // method that puts values of the array in growing order
num.push(1); //method to automatically add the number between parenthesis at the last position of the array
console.log(num);
console.log(`O vetor tem ${num.length} posições.`);
console.log(`O primeiro valor do vetor é ${num[0]}`);


// for (let i = 0; i < num.length; i++) {
//     console.log(`A posição ${i} tem o valor ${num[i]}`);
// }

// Most recent model to display arrays and objects in js: 

for(let i in num ){ // for each position (i) inside variable num 
    console.log(`A posição ${i} tem o valor ${num[i]}`);
}

// finding values inside an array  


let pos = num.indexOf(76);
if (pos == -1){  // -1 indicates that the value does not exist inside the array
    console.log('O valor não existe nesse vetor ');
} else { 
    console.log(`O valor está na posição ${pos}`);
}