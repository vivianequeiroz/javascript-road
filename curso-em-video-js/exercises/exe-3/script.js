function count() {
    let begin = document.getElementById('txtnum');
    let end = document.getElementById('txtend');
    let pass = document.getElementById('txtpass');
    var res = document.getElementById('res');

    if (begin.value.length == 0 || end.value.length == 0 || pass.value.length == 0 ) {
        res.innerHTML = 'Contagem impossível de ser feita! 😕 <p> Mas tente novamente, ok? 😊';
    } else {
        res.innerHTML = '<p>Contando...</p>';
        let i = Number(begin.value);
        let e = Number(end.value);
        let p = Number(pass.value);

        

        if (i < e) { 
            for (let c = i; c <= e; c += p) {
                res.innerHTML += `${c} 🎄 `;
            }
        } else {
            for (let c = i; c >= e; c -= p) {
                res.innerHTML += `${c} 🎄 `;
            }
        }
        res.innerHTML += ` <p>Contagem feita!🎅 🌟</p>`;
    } 

}