let a="Hello";
console.log(a);
let greet="Good Morning";
console.log(greet.includes("Gowod"));
for(let item in greet)
{
     console.log(greet[item]);
}
// for(let i=0;i<greet.length;i++){
//     console.log(greet[i]);
// }

console.log("*********  Some String inbuild functions ************");
let url="https://staging.vwo.com/api/login?retry=true";
console.log("Starts with function : ",url.startsWith("https"));
console.log("ends with with function : ",url.endsWith("login"));
console.log("include with function : ",url.includes('staging'));
console.log("Search Function ", url.search(/login/));
let subString=url.substring(7)
console.log(subString);


let studentName="Prasad Kadam"
console.log("To Upper Case : ",studentName.toUpperCase());
console.log("Lower Case : ",studentName.toLowerCase());
console.log(studentName.split('_').join());

console.log((200).toString());
console.log(parseFloat(3.14));



