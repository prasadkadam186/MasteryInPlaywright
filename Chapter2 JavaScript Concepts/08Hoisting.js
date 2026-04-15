/* 
    Quick call
    - Hoisting : Moving the varible and function declaration to the top of scope at compiling phase.
    - hoisting with var : gives undefined if its not declare and inilize
    - hoisting with let : gives reference error
    - TDZ(Temporal Dead Zone) : Its period between when a scope starts and when the let/const declaration is encountered.
*/

// Hoisting with var

console.log("Before the declaration ", a); // Output: undefined
var a = 10; // Variable declaration is hoisted, but assignment is not
console.log("After the declaration ", a); // Output: 10


// Hoisting with function
function greet(){
    console.log("Value of Greet time", greetTime);
    var greetTime="Morning";
    console.log("Value of Greet time", greetTime);
}
greet()


/*

console.log("The Name of Student before declaration : ", studentName); // Cannot access 'studentName' before initialization
let studentName="Prasad";
console.log("The Name of Student before declaration : ", studentName);

*/


const pi=3.14
console.log(pi);


