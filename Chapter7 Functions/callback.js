function first(callback){
    console.log("Calling First Function");
    console.log("############");
    third();
    // It should be last statement 
    callback(secondFunction)
}
function third(){
    console.log("Calling the third function"); 
}
function secondFunction(){
    console.log("Calling second Function");
}
first(secondFunction)




// Another Callback examples : 


function outer(callback){
    console.log("Caling outer function"); 
    callback()
}

function anoterOuter(){
    console.log("Calling anoterOuter function");
}

outer(anoterOuter)