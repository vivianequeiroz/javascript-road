// EXERCISES

// 1. When the user click at the intern links of the site, 
// add a class 'ativo' at the item clicked and remove from
// the other items in case it already has it. Prevent the 
// standard behavior from these links  // HAVE A SIMPLE IDEA

//WRONG ATTEMPTS
//  const linksInternos = document.querySelectorAll('a[hrefˆ="https"]');

//  function callbackLinks(event) {
//      event.preventDefault();
//      event.addClassList('ativo');
//  }

//  linksInternos.forEach(item, () => {
//     item.addEventListener('click', callbackLinks);
//  });

//  console.log(linksInternos);


//CORRECT ANSWER

// const linksInternos = document.querySelectorAll('a[href=ˆ"#"]');

// function handleLink(event) {
//     event.preventDefault();
//     linksInternos.forEach((link) => {
//         link.classList.remove('ativo');
//     });
//     event.currentTarget.classList.add('ativo');
// }

// linksInternos.forEach((link) => {
//     link.addEventListener('click', handleLink);
// });





// 2. Select all the elements from the site starting from the body
// and when it is clicked, display which elements that are being selected

const totalElements = document.querySelectorAll('body *');

function handleElemento(event) {
    console.log(event.currentTarget);
}


totalElements.forEach((elemento) => {
    elemento.addEventListener('click', handleElemento);
});


//Now, instead of using console, remove the element that is being selected


// function handleElemento(event) {
//     event.currentTarget.remove();
// }



//And, is the user click on 't', increase the font size from the site.


function handleClickT(event){
    if(event.key === 't') {
        document.documentElement.classList.toggle('textomaior');
    }
}

window.addEventListener('keydown', handleClickT);