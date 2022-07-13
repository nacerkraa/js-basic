import { Person } from "./person";

export class Teacher extends Person {
    constructor(name, lesson){
        super(name);
        this.lesson = lesson;
    }
    teach(){
        console.log(this.name + ' Teach ' + this.lesson)
    }
}

