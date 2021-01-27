const contato = document.querySelector('#contato');
// console.log(contato.elements.nome);
// console.log(document.forms[0]);
const texto = document.querySelector('.texto');



// Values 
// The property value returns the value of the element in the form
// 'keyup' observe key per key typed by the user
// 'change' observe the value inserted by the user when he channges the field 

function handleKeyup(event) {

    document.body.style.backgroundColor = event.target.value;
    // const target = event.target;

    // if(!target.checkValidity()) {
    //     target.setCustomerValidity('Esse campo é importante. Não deixe de preencher!');
    //     target.classList.add('invalido');
    //     target.nextElementSibling.innerText = target.ValidationMessage;
    // }
    
    // console.log(event.target.checkValidity());
    // console.log(event.target.value);
    // texto.innerText = event.target.value;
}

// contato.addEventListener('keyup', handleKeyup);
// keyup does not detect voice input data, so change can 
// be used to overocome this problem and make the form more accessible:

contato.addEventListener('change', handleKeyup);
