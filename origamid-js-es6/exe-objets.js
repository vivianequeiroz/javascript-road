var data = {
    firstName: 'Viviane',
    lastName: 'Queiroz',
    age: 20,
    city: 'São Paulo',
    neighborhood: 'Jardim Duprat',
}

// a method in the previous objects that display fullname

data.fullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

// an object of a dog who represents a black labrador with 10 year that barks for a man

var dog = {
    race: 'labrador',
    cor: 'black',
    age: 10,
    bark(person) {
        if(person === 'male'){
            return 'Bark';
        } else {
            return 'Nada';
        }
    }
}