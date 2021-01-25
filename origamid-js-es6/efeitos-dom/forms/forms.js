const contato = document.querySelector('#contato');
console.log(contato.elements.nome);
console.log(document.forms[0]);


// Values 
// The property value returns the value of the element in the form
// 'keyup' observe key per key typed by the user
// 'change' observe the value inserted by the user when he channges the field 

function handleKeyup(event) {
    console.log(event.target.value);
}

// contato.addEventListener('keyup', handleKeyup);
// keyup does not detect voice input data, so change can 
// be used to overocome this problem and make the form more accessible:

contato.addEventListener('change', handleKeyup);
