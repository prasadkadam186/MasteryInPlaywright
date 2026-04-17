let marks = [65,78,44,98,70,88,90];

let grades = marks.map(s => s > 70 ? "pass" : "fail")
console.log(grades);

let qualified=marks.filter(s=>s>70);
console.log("marks more than 70",qualified);

let total=marks.reduce((sum,s)=> sum+s,0);
console.log("The Sum of array",total);


