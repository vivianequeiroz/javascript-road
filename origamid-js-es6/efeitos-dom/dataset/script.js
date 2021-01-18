//EXERCISES

// Add an attribute data=anime"show-down"and 
// data=anime"show=-right" to all the description animals sections


// 1: add of attributes mentioned at HMTL

// 2: at animacoes-1.js, inside the activeTab function, creation of:
// const direcao = tabContent[index].dataset.anime
// console.log(direcao);
// tabContent[index].classList.add('ativo', direcao);

//3: At CSS, changes and additions at the tab following styles: 
// .js-tabcontent section.ativo {
//     display: block !important;
// }

// .js-tabcontent section.ativo.show-right {
//     animation: show-right .5s forwards;
// }

// .js-tabcontent section.ativo.show-down {
//     animation: show-down .5s forwards;
// }

// @keyframes show-right {
//     from {
//         opacity: 0;
//         transform: translate3d(-30px, 0, 0);
//     }

//     to {
//         opacity: 1;
//         transform: translate3d(0, 0, 0);
//     }
// } 

// @keyframes show-down {
//     from {
//         opacity: 0;
//         transform: translate3d(0, -30px, 0);
//     }

//     to {
//         opacity: 1;
//         transform: translate3d(0, 0, 0);
//     }
// }



//2. Substitute all the classes js- to data attributes

// 1. At the HTML add of attributes
// 2. Substitute the attribute's names at the JS interactions