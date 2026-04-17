
/**
 * admin = All access
 * editor = read and wright
 * view = read only
 */
let isLoggedIn=true, loggedInUser="VIEW";

function checkedLoggedInUser(isLogin, role){
    if(isLogin){
    if(role.toLocaleLowerCase()=="Admin"){
        console.log(`You Logged in as ${role} and you have all the access`);  
    } else if(role.toLocaleLowerCase()=="editor"){
        console.log(`You Logged in as ${role} and you read and edit the access`);
    } else if(role.toLocaleLowerCase()=="view"){
         console.log(`You Logged in as ${role} and you read only access`);
    } else{
        console.log(`You Logged in as ${role} unable to get the access, Invalid user role logged`);
    }
}
else{
    console.log(`Not Logged In yet, Please Login first!`);
}
}

checkedLoggedInUser(isLoggedIn, loggedInUser)
