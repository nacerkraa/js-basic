// Inheritance

class Person{
    constructor(name){
        this.name = name;
    }

    walk(){
        console.log(this.name + "Is walking")
    }
}

class Teacher extends Person {
    constructor(name, lesson){
        super(name);
        this.lesson = lesson;
    }
    teach(){
        console.log(this.name + ' Teach ' + this.lesson)
    }
}

const p = new Teacher('Ahemd', 'math');
const p2 = new Teacher('khlifa', 'french');

p.teach();
p2.teach();