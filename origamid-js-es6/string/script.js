// EXERCISES

// 1. WIth a loop sum the total of "taxa" and "recebimento"

const transacoes = [
    {
        descricao: 'Taxa do pao',
        valor: 'R$ 39',
    },
    {
        descricao: 'Taxa do mercado',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento do cliente',
        valor: 'R$ 99',
    },
    {
        descricao: 'Taxa do banco',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de taxa do cliente',
        valor: 'R$ 49',
    },
];

let taxaTotal = 0;
let recebimentoTotal = 0;

transacoes.forEach((item) => {
    const numeroLimpo = +item.valor.replace('R$ ', '');
    if(item.descricao.slice(0, 4) === 'Taxa'){
        taxaTotal += numeroLimpo;
    } else if(item.descricao.slice(0, 4) === 'Rece'){
        recebimentoTotal += numeroLimpo;
    }
}); 

console.log(taxaTotal);
console.log(recebimentoTotal);


// 2. Returns an array with the list below

const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

console.log(transportes.split(';'));


// 3. Substitute all the span`s for a`s 

const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
             </ul>`;

htmlArray = html.split('span');
console.log(htmlArray); 
const newHtml = htmlArray.join('a');
console.log(newHtml);


// 4. Return the last character from the phrase 

const frase = 'Melhor do ano!'; 

console.log(frase.charAt(--frase.length));


// 5. Return the total of taxes

let segundaTransacao = ['Taxa do banco', '  TAXA DO PÃO', ' taxa do mercado',
'depósito bancário', 'TARIFA especial'];

let totalTaxes = 0;
segundaTransacao.forEach((item) => {
    item = item.toLowerCase();
    item = item.trim();
    if(item.slice(0, 4) === 'taxa') {
        console.log(item);
        totalTaxes++;
    }
});

console.log(`O total de taxas é igual a ${totalTaxes}`);