// new Promise()

// Promise is a constructor function of promises. It can be resolved, with the execution
// of the first argument, or rejected, in case the second argument is activated


const promessa = new Promise((resolve, reject) => {
    let condicao = true; 
    if(condicao) {
        resolve('John');
    } else { 
        reject(Error('Um erro aconteceu'));
    }
});

console.log(promessa);

// then()

// The method then is inside the prototype of Promises functions. It's callback is only
// activated when the promise is resolved.
// The argument of the callback will be the value given in the function resolve()





// One of the greatest power of promises is in the execution of assyncronous code 
// that will run resolve() at it's end
const promessa2 = new Promise((resolve, reject) => {
let condicao2 = true; 

if(condicao2) {
    setTimeout(() => {
        resolve({nome: 'Viviane', idade: 20});
    }, 1000);
    } else {
        reject(Error('Um erro ocorreu na promise.'));
    } 
});


// const retorno = promessa2.then(resolucao =>  console.log(resolucao));

// then().then()
// The method then() returns another Promise. It is possible to make a chain of then methods
// the value of the first argument of each then will be the value returned of the previous one

const retorno = promessa2
.then(resolucao =>  {
    resolucao.profissao = 'Estagiária';
})
.then(resolucao => {
    console.log(resolucao);
})
// catch() 
// Adds a callback at the promise when it is rejected
.catch(rejeitadada =>{
    console.log(rejeitada);
})
// then()
// By adding at the second argument, then can also be used when a promise is rejected
.then(resolucao => {
    console.log(resolucao);
}, reject => {
    console.log(reject);
})
// finally()
// Independently of being resolved or reject, finally executes the anonymous function passed
.finally(() => {
    console.log('Fim');
    console.log('*');
    console.log('*');
    console.log('*');
    console.log('*');
    console.log('*');
})

console.log(retorno);



// Promise.all()
// Returns a new promise if:
// I. All the promises inside if are resolved
//                       or 
// II. At leat one of them is rejected

// Promise.race()
// Returns a new promise at the moment the first promise is resolved or rejected
// This new promise brings the response of the first one resolved


const login = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Usuário logado');
    }, 1000);
});

const dados = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Dados carregados');
    }, 1500);
});

// const tudoCarregado = Promise.all([login, dados]);
const tudoCarregado = Promise.race([login, dados]);

console.log(tudoCarregado);

tudoCarregado.then((resolucao) => {
    console.log(resolucao); // returns an array
});


