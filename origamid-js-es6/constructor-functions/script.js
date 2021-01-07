// EXERCISES

//1. Transform the object below into an Constructor Function:

const pessoa = { 
    nome: 'Nome pessoa',
    idade: 0,
    andar() {
        console.log(this.nome + ' andou');
    }
}


// 2. Create 3 persons. João - 20 years old, Maria - 25 years old and Bruno - 15 years old



//3. Create a Constructor Function (Dom) for the manipulation of elements lists from dom.
// It should have the following properties and methods: 

// elements, returns NodeList with the selected elements
// addClass(classe), add a class to all the elements/
// removeClass(classe), remove the class from all the elements