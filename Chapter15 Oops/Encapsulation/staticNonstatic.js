class StaticBasic{
    static studentName;
    static studentAge;
    islocalStudent

    constructor(name, age, isLocal){
        this.studentName=name;
        this.studentAge=age;
        this.islocalStudent=isLocal
    }

    static showStudentName(){
        console.log("Calling ShowDetails {Static Functions}");
    }

    showDetails(){
        console.log(`Name : ${this.studentName}, Age : ${this.studentAge}, Is Local Student : ${this.islocalStudent}`);
    }
}
// Can access the static methods directly via class name
StaticBasic.showStudentName()

// To use the non static methods and varible object creation is mandatory
let stud1=new StaticBasic("Prasad Kadam", 26, true)
stud1.showDetails()