class Student{
    #name;
    #age;
    #isAlive;

    constructor(name,age,isAlive)
    {
        this.#name=name;
        this.#age=age;
        this.#isAlive=isAlive;
    }

    get name(){
        return this.#name;
    }
    set name(value){
        if(value.length > 0 && typeof(value) == 'string'){
            this.#name=value;
        }else{
            console.log("Неверные данные для имени пользователя!!!");
        }
    }

    get age(){
        return this.#age;
    }

    set age(value){
        if(typeof(value) == 'number' && value > 0 && value < 120){
            this.#age = value;
        }else{
            console.log("Неверные данные для возраста студента!!!");
        }

    }

    get isAlive(){
        return this.#isAlive;
    }

    set isAlive(value){
        if(typeof(value) == 'boolean'){
            this.#isAlive = value;
        }else{
            console.log("Неверные данные для существования студента!!!");
        }
    }


    show(){
        console.log(`Имя студента: ${this.#name}, Возраст: ${this.#age}, Он жив?: ${this.#isAlive}`);
    }
    delete(){
        this.#name = null;
        this.#age = null;
        this.#isAlive = null;
    }
    copy(){
        return this;
    }

    #studentAttendance(){
        return this.#isAlive ? 100 : 0
    }

    getStudentAttendence(){
        return this.#studentAttendance();
    }


    static clone(std){
        return new Student(std.name,std.age,std.isAlive);
    }

}

export default Student;