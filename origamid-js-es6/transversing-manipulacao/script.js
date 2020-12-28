// outerHTML, innerHTML e innerText

// They're attributes that return the HTML or it's text
// All of them allow us to modify the content of what we select

const menu = document.querySelector('.menu');

menu.outerHTML; // select all the HTML of the element
menu.innerHTML; // select the intern HTML from the element
menu.innerText; // return text, without tags

menu.innerText = '<p>Texto</p>'; // the tag will be added as a text
menu.innerHTML = '<p>Texto</p>'; // the tag will be rendered