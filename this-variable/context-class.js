//In classes, all variables defined at the constructor will be available
// to anoter methods inside it

class Hello {
  constructor() {
    this.hello = "Olá!";
  }

  sayHello() {
    console.log(this.hello);
  }
}

const hello = new Hello();

hello.sayHello();
