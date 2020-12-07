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
    if(isNumber(num.value) && !inList(num.value), values) {
        values.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado.`;
        list.appendChild(item);
        res.innerHTML = '';
    } else {
        window.alert('Valor inválido ou já adicionado na lista!');
    }
    num.value = '';
    num.focus();
}


function finish() {
    if(values.length == 0) {
        window.alert('Adicione valores antes de finalizar.');
    } else {
        let total = values.length;

        let major = values[0];
        let lower = values[0];

        let sum = 0;
        let media = 0;


        for(let pos in values) {
            sum += values[pos];

            if(values[pos] > major)
                major = values[pos];
            if(values[pos] < lower)
                lower = values[pos]
        }

        media = sum/total;
        media = media.toFixed(2);

        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${major}</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${lower}</p>`;
        res.innerHTML += `<p>A soma de todos os valores informados é igual a ${sum}</p>`;
        res.innerHTML += `<p>A média de todos os valores informados é igual a ${media}</p>`;

    }
}


