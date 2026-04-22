let student_name : string
let age : number
let isLocal : boolean 
let undefinedValue : undefined = undefined
let nullValue : null = null;
let unknownValue : unknown ="Hii"

let arrayNum : number[] = [2,4,5,2,4,5,2,4,6,6,6]

function showDetails(name:string, age: number, isLocal:boolean) : void{
    console.log(`
            Student Name : ${name},
            Age : ${age},
            Is Local : ${isLocal},
            nullValue : ${nullValue},
            Undefined Value : ${undefinedValue},
            unknown Data Type : ${unknownValue}
        `);
}

showDetails("David Simmons", 56, false)

// for(let val of arrayNum){
//     console.log(val);
// }

arrayNum.forEach((val,index)=>{
    console.log(`Value : ${val} = > index : ${index}`);
    
})

let array: Array<String> = ["Rohan", "Mohit", "Avinash"];

for(let value of array){
    console.log(value);
}


function greetthePerson(name : String) : String{
    return `Hey ${name} Welcome to Playwright! `
}

console.log(greetthePerson("Ajay"));

let testCaseObject : {testCaseID : number, testcaseName : String, status : String, time: number}={
    testCaseID : 1, 
    testcaseName : "Login Test",
    status : "pass",
    time : 3000
}

console.log(testCaseObject);
