interface calculations{
    add(a:number, b: number): number;
    subtract(a:number,b:number):number;
    multiply(a:number,b:number):number;
    divide(a:number,b:number):number;
}

const operation : calculations={
    add:(a,b)=>a+b,
    subtract:(a,b)=>a-b,
    multiply : (a,b)=>a*b,
    divide :(a,b)=>a/b
}

console.log(operation.add(3,5));
