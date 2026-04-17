let statusCode = [200, "Not Found", false, "Internal Server Error 500"];
console.log(statusCode);

let days= new Array("Mon", "Tues", "Wed", "thur")
console.log(days);


statusCode.push("fri");
statusCode.push("Sat"); // To add the element at the last
statusCode.unshift("Sun") // To add the element at first
for(let value of statusCode){
    console.log(value);
}   

let number = [2, 1, 4, 5, 2, 7, 4, 6];
number.splice(2,3,10,20,30)  // splice(staring index, number of element to delete, element to add)
console.log(number);
console.log("To Check the 100 is present in the array : ",number.includes(100));
console.log("Find the first index of element who is greater than 5 in the array : ",number.findIndex(x => x>5));
console.log("Find the Index of 5 In the given array : ", number.find(x=>x=5));

// To perform Search operation : include(), indexOf(), find(), findIndex(), findLast(), findLastindex()


// Array Iterations : 

let studentName =["Ajit", "Sushant", "Pratik", "Somesh"];
console.log("*******  for of loop ************");
// Deal with values
for(let name of studentName){
    console.log(`${name}`);
}
console.log("*******  for of with index and values loop ************");
for(let [index,value] of studentName.entries()){
    console.log(`the value at ${index} is ${value}`);
}

console.log("*******  for in loop ************");
let apiData=[200,404,500];
// deal with index 
for(let data in apiData){
    console.log(`the value at ${data} is ${apiData[data]}`);
}


console.log("**********  For Each loop ***********");
let itemSelected=["Fruits", "Vegitables", "Dry Fruits", "Snacks"];
itemSelected.forEach((value,index)=>{
    console.log(`The value at ${index} is ${value}`);
})