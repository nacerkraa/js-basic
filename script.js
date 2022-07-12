// Difine a class and a constructor

class Person{
    constructor(name){
        this.name = name;
    }

    walk(){
        console.log(this.name + "Is walking")
    }
}

const per1 = new Person("Nacer");

console.log(per1.name);

per1.walk();