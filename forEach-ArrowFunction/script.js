//EXERCISES

// 1, Display in console each paragraph from the site // CERTAIN ABOUT IT 

const totalP = document.querySelectorAll('p');

totalP.forEach(item => console.log(item));

// 2. Display in console the text from the paragraphs // NOT SURE WHERE TO INSERT INNERTEXT

totalP.forEach(item => console.log(item.innerText));


// 3. Identify and correct the error from the code below works;

const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => { // error: there wasn't parenthesis around the 
                                //arguments from the callback function
    console.log(item,index);

});

let i = 0 
imgs.forEach(() => { // error: there there wasn't empty parenthesis before 
                     // the arrow and it prevents code to run 
    console.log(i++);

});

imgs.forEach(() => i++); //the arguments wasn't inside parenthesis 
console.log(i);

