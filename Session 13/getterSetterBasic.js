class Student{
    #marks;
    constructor(marks){
        this.#marks = marks;
    }
    getMarks(){
        return this.#marks;
    }
    setMarks(value){
        if(value >= 0 && value <=100){
            this.#marks = value;
            return true;
        }else{
            console.log("Invalid Marks!!");
            return false;
        }
    }
}
let obj = new Student(40);

console.log(obj.getMarks());
console.log(obj.setMarks(50));

console.log(obj.getMarks());
console.log(obj.setMarks(120));


console.log(obj.getMarks());