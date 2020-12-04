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
                img.setAttribute('src', 'baby-boy.svg');
            } else if( age > 5 && age <= 10){ 
                // criança
                img.setAttribute('src', 'child-boy.svg');
            } else if (age  < 20) {
                // adolescente
                img.setAttribute('src', 'teenager-boy.svg');
            } else if (age < 60) {
                // adulto
                img.setAttribute('src', 'adult-men.svg');
            } else {
                // idoso 
                img.setAttribute('src', 'elder-men.svg');
            }

        } else if(fsex[1].checked) {
            gender = 'uma mulher';
        }
        if( age >= 0 && age < 5){
            // bebe
            img.setAttribute('src', 'baby-girl.svg');
        } else if( age > 5 && age <= 10){ 
            // criança
            img.setAttribute('src', 'child-girl.svg');
        } else if (age  < 20) {
            // adolescente
            img.setAttribute('src', 'teenager-girl.svg');
        } else if (age < 60) {
            // adulto
            img.setAttribute('src', 'adult-women.svg');
        } else {
            // idoso 
            img.setAttribute('src', 'elder-women.svg');
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${gender} com ${age} anos.`;
        res.appendChild(img);
    }
}