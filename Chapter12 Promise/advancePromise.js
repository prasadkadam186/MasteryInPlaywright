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

// openBrowser().then(function (msg){
//     console.log("Step 1 : ",msg);
//     return navigateToLogin()
// }).then(function (msg){
//     console.log("Step 2 : ",msg);
//     return enterTheCredientials();
// }).then(function (msg){
//     console.log("Step 3 : ",msg);
//     return logout()
// }).then(function (msg){
//     console.log("Step 4 : ",msg);
// }).catch(function (){
//     console.log("Something went wrong");
// }).finally(function (){
//      console.log("Finally executing");
// })


Promise.all([
    Promise.resolve("Promise1 Resolved"),
    Promise.reject("Promise2 Rejected"),
    Promise.resolve("Promise3 Resolve")
]).then(function (msg){
    console.log(msg)
}).catch(function (error){
    console.log(error);
})