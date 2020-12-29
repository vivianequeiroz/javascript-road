//Objective: add the navigation using tab to show each text description accordingly to
// the animal's image that will be being displayed in real time 


const tabMenu = document.querySelectorAll('.js-tabmenu li'); 
const tabContent = document.querySelectorAll('.js-tabcontent section'); 

function activeTab(index) {
    tabContent.forEach((section) => {
        section.classList.remove('ativo');
    });
}

tabContent[index].classList.add('ativo');
