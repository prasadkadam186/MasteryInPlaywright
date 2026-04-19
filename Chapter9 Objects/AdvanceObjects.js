const calculater={
    count : 10,
    increment(num){
       this.count+=num
        return this.count
    }
}

console.log(calculater.increment(5));


// Getter setter methods 

let visior={
    firstName : "Prasad",
    lastName : "Kadam",
    get getfullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    set setfullName(value){
        this.firstName = value
    }
}

console.log(visior.getfullName);
visior.setfullName="Updating the firstName"
console.log(visior.getfullName);



// Objects methods : 
console.log("************** Objects Methods ************** ");

const studentInfo = {
    id : 1,
    name : "Sam",
    gender : "male",
    Address : "Pune"
}

for(let data in studentInfo){
    console.log(data);
}

Object.keys(studentInfo).forEach((value)=>{
    console.log(value);
})

Object.entries(studentInfo).forEach(([key, value])=>{
    console.log(`The key is ${key} and value is ${value}`);
})