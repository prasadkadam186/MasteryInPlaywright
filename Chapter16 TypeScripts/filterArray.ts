
function generateFilteredArray(arr : number[]) : number[]{
    return arr.filter(function (arr : number) : boolean{
        return arr >=400;
    })
}


let statusCode : number[] = [200,201, 400, 404,500]

console.log(generateFilteredArray(statusCode));
