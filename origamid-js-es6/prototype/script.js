// Prototype chain is a JS mechanism to verify if the object has the property/method itself.
// if it hasn't, it goes to the next prototype link (data type verifyed) and search
// for the property/method inside it

// This mechanism provides heritage!

// So prototype is an object added into a function when it is created

function Pessoa(nome, idade) {
    this.nome = nome,
    this.idade = idade,
    this.abraçar = function() {
        return 'Abraçou';
    }
    this.andar = function() {
        return 'Andou pelo objeto';
    }
}

var obj = {
    nome: 'João',
    idade: 20,
}

Pessoa.prototype.andar = function() {
    return this.nome + ' pessoa andou';
}

Pessoa.prototype.nada = function() {
    return this.nome + ' pessoa nadou';
}

const viviane = new Pessoa('Viviane', 20);

console.log(Pessoa.prototype);
console.log(viviane.prototype);
