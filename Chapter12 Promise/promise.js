let apiCall= new Promise(function (resolve,reject){
    resolve({
        status : 200,
        message : "Sucesses",
        body : "User Data"
    });
    reject("Something went wrong")
})

apiCall.then(function (result){  // Executed only promise got resolve or sucess
    Object.entries(result).forEach((item)=>{
        console.log(`${item}`); 
    })
    console.log(`message : ${result.message}`);
    console.log(`Body : ${result.body}`);
}).catch(function (error){  // Executed only promise got reject
    console.log(error);
}).finally(function (){  // Always executed
    console.log("Finally Block always Executed...");
    
})