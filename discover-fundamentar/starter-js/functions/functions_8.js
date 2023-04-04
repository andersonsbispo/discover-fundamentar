/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/ 

function Person(name) {
    this.name = name;
    this.walk = function() {
        return this.name + " está andando";
    }
}

const anderson = new Person("Anderson");
const joao = new Person("João");
console.log(anderson.walk);
console.log(joao.walk);