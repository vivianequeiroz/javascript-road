// Entends - It is possible to create a subclass 
// It has the acess to the main class methods through it's prototype


// Super - to acess the main class and it's methods and properties
// It allows the manipulation of the main method or property


class Veiculo {
    constructor(rodas) {
        this.rodas = rodas;
    }
    acelerar() {
        console.log('Acelerou');
    }
}

class Moto extends Veiculo {
    constructor(rodas, capacete) {
        super(rodas, capacete); // super(all the parameters of the original constructor + the new that will be created)
        this.capacete = capacete;
    }
    acelerar() {
        super.acelerar();
        console.log('Acelerou rápido.');
    }
    empinar() {
        console.log('Empinou com ' + this.rodas + ' rodas.');
    }
}


const honda = new Moto(2, true);


