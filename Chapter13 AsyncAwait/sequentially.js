function apiCall(name){
    return new Promise(function (resolve){
        setTimeout(function (){
            resolve(name,"Called.....")
        },3000)
    })
}

async function runTest(){
    console.log("....... Execution Started .....");
    let start=Date.now();

    let msg1=await apiCall("Launch Browser")
    console.log(msg1);

    let msg2=await apiCall("Login ")
    console.log(msg2)

    let msg3=await apiCall("Dashboard ")
    console.log(msg3);

    let msg4=await apiCall("Logout")
    console.log(msg4);
    
    console.log("Time Required : ", Date.now()-start,"MS");
}
runTest()
