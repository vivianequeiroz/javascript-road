function $$(selectedElements) {
    const elements = document.querySelectorAll(selectedElements);

    function hide() {
        elements.forEach(element => {
            element.style.display = 'none';
        });
        return this; // allow the chain of other methods 
    }

    function show() {
        elements.forEach(element => {
            element.style.display = 'initial';
        });
        return this; // allow the chain of other methods 
    }

    function on(onEvent, callback) {
        elements.forEach(element => {
            element.addEventListener(onEvent, callback)
        });
        return this; // allow the chain of other methods 
    }

    function addClass(className) {
        elements.forEach(element => {
            element.classList.add(className);
        });
        return this; // allow the chain of other methods 
    }
  
    function removeClass(className) {
        elements.forEach(element => {
            element.classList.remove(className);
        });
        return this; // allow the chain of other methods 
    }

    return {
        elements,
        hide,
        show,
        on,
        addClass,
        removeClass
    }
}

const btns = $$('button');

console.log(btns.hide().show());


function handleClick(event) {
    console.log(event.target);
}

btns.on('click', handleClick);
btns.addClas('active');
