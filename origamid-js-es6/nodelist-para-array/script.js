const cpfs = document.querySelectorAll('.cpf li');

function elementsInnerText([...elements]) {
    return elements.map(element => element.innerText);
}

console.log(elementsInnerText(cpfs));
