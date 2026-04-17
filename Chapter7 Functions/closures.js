function outer(){
    let message="hello";
    console.log("Outer Function calling");
    function inner(){
        console.log(message);
    }
    return inner;
}

let callingFunction=outer()
callingFunction()



function makeRetryChecker(max)
{
    let attempt=0;
    function tryAgain(testCaseName){
        attempt++;
        if(attempt>max){
            return `${testCaseName} exceeds the retries ${max}`;
        }
        return `Attempt ${attempt}/${max} for ${testCaseName}`;
    }
    return tryAgain;
}

let retry=makeRetryChecker(3);
console.log(retry("Login"))
console.log(retry("Login"))
console.log(retry("Login"))
console.log(retry("Login"))


function retyLimit(limit){
    let call=0;
    function check(){
        call++;
        return call<=limit;
    }
    return check;
}

let limiter = retyLimit(3);

console.log(limiter());
console.log(limiter());
console.log(limiter());
console.log(limiter());


function checkTestCase(testCaseName, getResult){
    console.log(`Test Case ${testCaseName} Execution Stared`);
    let result =getResult();
    console.log(`Test Case ${testCaseName} Completed with ${result}`);
    return result;
}
function loginTest(){
    return "pass";
}
function DashboardLanding(){
    return "fail";
}
checkTestCase("Login Functionility", loginTest)
checkTestCase("Dashboard Functionility", DashboardLanding)
