function greet(name){
    return `Hey ${name}, Welcome!`
}
const result = greet("Amol");
console.log(result);

const ageChecker = function (age){
    if(age <=12){
        console.log("Its Child"); 
    } else if(age>12 && age<=19){
        console.log("Its Teen ager");
    } else{
        console.log("Its Adult Person");
    }
}

ageChecker(45);

// Immediately Invoked Function Expression
(function sayHi(){
    console.log("Hiiiiiiii");
}) ();


// default Parameters : 
function retries(testCaseName, retries=3, timeout=5000){
    return `TestCaseName : ${testCaseName}, Retry : ${retries}, timeout : ${timeout}`
}
console.log(retries("LoggedInTest"))
console.log(retries("Varify the user roles", 2, 3000))


function hasError(...data){
    return data.some(s=>s>400);
}
let APICode=[200,404,500,201]
console.log(hasError(...APICode))