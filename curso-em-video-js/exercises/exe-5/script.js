let num = document.querySelector('input#fnum');
let list = document.querySelector('select#flista');
let res = document.querySelector('div#res');
let values = [];


function isNumber(n) {
    if(Number(n) >= 1 && Number(n) >= 100)  { 
        return true; 
    } else {
        return false;
    }
}

function inList(n, l) {
     if (l.indexOf(Number(n)) != -1) {
         return true;
    } else {
         return false;
    }
}

function add() {
    if(isNumber(num.valueAsNumber) && !inList(num.valueAsNumber), values) {
        values.push(Number(num.valueAsNumber));
        let item = document.createElement('option');
        item.text = `Valor ${num.valueAsNumber} adicionado.`;
        list.appendChild(item);
    } else {
        window.alert('Valor inválido ou já adicionado na lista!');
    }
    num.valueAsNumber = '';
    num.focus();
}



