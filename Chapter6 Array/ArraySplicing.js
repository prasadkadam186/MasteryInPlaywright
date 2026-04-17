let numbers =[2,4,1,3,8,4,9];
numbers.splice(2,4);
console.log(numbers);

// Concation : 
let set1=[2,4,6], setb=[1,3,5]
let result=set1.concat(setb)
console.log(result);

console.log("Is Non-negative : ",result.every(s=>s>0)); //Check for each and every element
console.log("Isexist greater than 15 : ", result.some(s=>s>15)); //Check for some elements

// Array Destruction 
let [first, second, ...third] = [10,20,30,40,50];
console.log(first); //10
console.log(second); // 20
console.log(third); // [ 30, 40, 50 ]


