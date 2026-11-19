import Student from './Student.js';

class OnlineStudent extends Student{
    #platform;

    get platform(){
        return this.#platform;
    }
    set platform(value){
        if(typeof(value) == 'string' && value.length > 0){
            this.#platform =value;
        }else{
            console.log("Неверные данные для платформы!!!");
        }
    }

    constructor(name,age,isAlive,platform){
        super(name,age,isAlive);
        this.#platform = platform;
    }

    show(){
        console.log(`Имя студента: ${this.name}, Возраст: ${this.age}, Он жив?: ${this.isAlive}, Платформа для звонков: ${this.#platform}`);
    }

    copy(){
        return this;
    }

    delete(){
        super.delete();
        this.#platform = null;
    }

    static clone(onlineStudent){
        return new OnlineStudent(onlineStudent.name,onlineStudent.age,onlineStudent.isAlive,onlineStudent.platform);
    }

}
export default OnlineStudent;