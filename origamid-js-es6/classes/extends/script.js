// Entends - It is possible to create a subclass 
// It has the acess to the main class methods through it's prototype


class Veiculo {
    constructor(rodas) {
        this.rodas = rodas;
    }
    acelerar() {
        console.log('Acelerou');
    }
}

class Moto extends Veiculo {
    empinar() {
        console.log('Empinou com ' + this.rodas + ' rodas.');
    }
}


const honda = new Moto(2);
honda.empinar();

