function launchBrowser(callback){
    console.log("step 1 : Browser Launch Sucessfully");
    setTimeout(function (){
        console.log("Browser Launch....");
    },1000);
    callback();
}

function loginToApplication(callback){
    console.log("step 2 : login to Application");
    setTimeout(function (){
        console.log("Login page loaded....");
    },1000);
    callback();
}

function dashboard(callback){
    console.log("step 3 : dashboard checking");
    setTimeout(function (){
        console.log("dashboard page loaded....");
    },1000);
    callback();
}

function logout(callback){
    console.log("step 4 : logout the Application");
    setTimeout(function (){
        console.log("logout page loaded....");
    },1000);
    callback();
}

// This is dirty way to use the callback best way use async and await
// Below is Async callback example
launchBrowser(function (){
    loginToApplication(function (){
        dashboard(function (){
            logout(function (){
                console.log("Execution Completed Sucessfully");
            });
        })
    })
})