function testAPI(name){
    return new Promise(function (resolve){
        setTimeout(function (){
            resolve("Calling "+name)           
        },3000)
    })
}

async function sequentialTest(){
    console.log("Execution Started");

    let [r1,r2,r3] = await Promise.all([
        testAPI("Login"),
        testAPI("Dashboard"),
        testAPI("Logout")
    ])
    console.log(r1);
    console.log(r2);
    console.log(r3);
}
sequentialTest()

let attempt=0;
function flakyTestCase()
{
   attempt++;
   if(attempt <3){
    return Promise.reject(`Attempt : ${attempt} : failed`)
   } 
   return Promise.resolve(`Attempt : ${attempt} : Passed`)
}

async function retrytesting(maxRetries){
    for(let i=0;i<maxRetries;i++){
        try{
            let res=await flakyTestCase();
            console.log(res);
        }catch(error){
            console.log(error);
        }
    }
}

retrytesting(5)