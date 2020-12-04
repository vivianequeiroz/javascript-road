function verify() {
    var data = new Date();
    var year = data.getFullYear();
    var fyear = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if (fyear.value.length == 0 || Number(fyear.value) > year) {
        window.alert('Erro. Verifique os dados e tente novamente.');
    } else {
        var fsex = document.getElementsByName('radsex');
        var age = year - Number(fyear.value);
        var gender = ''; 

        var img = document.createElement('img');
        img.setAttribute('id', 'photo');

        if(fsex[0].checked) {
            gender = 'um homem';
            if( age >= 0 && age < 5){
                // bebe
            } else if( age > 5 && age >= 10){ 
                // criança
            } else if (age  < 20) {
                // adolescente
            } else if (age < 60) {
                // adulto
            } else ( age <= 60) {
                // idoso 
            }
// 17:05

        } else if(fsex[1].checked) {
            gender = 'uma mulher';
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${gender} com ${age} anos.`
    }
}