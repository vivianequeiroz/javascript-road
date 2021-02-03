// Using the API https://blockchain.info/ticker 
// return in DOM the purchase value of bitcoin in reais
// Update this value each 30seconds


const btcDisplay = document.querySelector('.btc');


function fetchBtc() {
    fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(btcJson => {
        btcDisplay.innerText = 'R$ ' + btcJson.BRL.buy;
    });
}

// setInterval(fetchBtc(), 1000 * 30);

// fetchBtc();