function openBrowser(){
    return new Promise(function (resolve){
        resolve("Browser Opened")
    })
}

function navigateToLogin(){
    return new Promise(function (resolve){
        resolve("Login Page Opened")
    })
}

function enterTheCredientials(){
    return new Promise(function (resolve){
        resolve("Credientials entered")
    })
}

function clickedToLoginButton(){
    return new Promise(function (resolve){
        resolve("Login button Clicked")
    })
}

function logout(){
    return new Promise(function (resolve){
        resolve("logout Opened")
    })
}

async function runTestCase(){
    let msg1=await openBrowser()
    console.log(msg1);
    let msg2=await navigateToLogin()
    console.log(msg2);
    let msg3=await enterTheCredientials()
    console.log(msg3);
    let msg4=await logout()
    console.log(msg4);
}


async function testAPI(){
    try{
        await Promise.reject("503 : Internal Server error");
    }catch(error){
        console.log(error);
    }finally{
        console.log("Finally Block executed sucessfully");
    }
}

testAPI()

// runTestCase()