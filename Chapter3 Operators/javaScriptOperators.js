// Arthmentic Operators
console.log("**************Arthmentic Operators **************");
let a=10, b=5;
console.log(`The Sum of ${a} and ${b} = ${a+b}`);
console.log(`The Subtraction of ${a} and ${b} = ${a-b}`);
console.log(`The Multiplication of ${a} and ${b} = ${a*b}`);
console.log(`The Division of ${a} and ${b} = ${a/b}`);
console.log(`The Mod of ${a} and ${b} = ${a%b}`);

// Assignment Operators 
console.log("**************Assignment Operators **************");
let x=5;
x+=3;
console.log(`The value of x =  ${x}`);
x-=2;
console.log(`The value of x =  ${x}`);
x*=5;
console.log(`The value of x =  ${x}`);

// Comparision Operators :
console.log("**************Comparision Operators **************");
/**
 *  = Assigning the value
 *  == Checking the equalility 
 *  === Strinct comparsioon inculding their data types
 *  >, <, >=, <=, ==, ===, =, !==, !
 */ 
let first = 10, second=5;
console.log(first > second);
console.log(first === second);
console.log(first <= second);


// Logical Operators 
console.log("**************Logical Operators **************");
let flag=true, redFlag=false;
console.log(flag && redFlag);
console.log(flag || redFlag);
console.log(!flag);

// Ternary Operators 
console.log("********* Ternary Operators *************");
let age=17;
let isEligibleForVote = age>= 18 ? "Eligible" : "Not Elegible";
console.log(isEligibleForVote);

// TypeOf Operators 
console.log("********* TypeOf Operators *************");
let studentName= "Prasad", studentAge=26;
console.log(typeof(studentName));
console.log(typeof(studentAge));

// Null Operators 
console.log("********* Null Operators *************");
let num=10
let capacity = num ?? "default value";
console.log(capacity);


