//EXERCISES

// 1. Add the 'ativo' class at all the itens form menu // HAVE AN IDEA

const itensMenu = document.querySelectorAll('.menu a'); 

itensMenu.forEach(item => item.classList.add('ativo'));



// 2. Remove the 'ativo' class from all the itens from menu e keep only
// at the first one // NO IDEA

itensMenu.forEach(item => item.classList.remove('ativo')); // remove from all

itensMenu[0].classList.add('ativo'); // add only at the first item 

// 3. Verify the images with alt attribute // CERTAIN ABOUT IT


const images = document.querySelectorAll('img');

images.forEach(images => console.log(images.hasAttribute('alt')));



// 4. Modify the 'href' of the external link from menu // NO IDEA
const link = document.querySelector('a[hrefˆ="https://]');

link.setAttribute('href', 'https://www.google.com.br');

console.log(link);
