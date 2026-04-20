let MatrixData=[
    ["Login Test", "Result : Pass", "Timeout : 5000"],
    ["Dashboard Test", "Result : fail", "Timeout : 2000"],
    ["logut Test", "Result : pass", "Timeout : 5000"]
]
// Traditional way to iterate the 2DMatrix
// for(let i=0;i<MatrixData.length;i++)
// {
//     for(let j=0;j<MatrixData[i].length;j++){
//         console.log(MatrixData[i][j]," ");
//     }
// }

for(let row of MatrixData){
    for(let val of row){
        console.log(val);
    }
}
console.log("******  matrix iteration via for each ************");
MatrixData.forEach((row)=>{
    row.forEach((value)=>{
        console.log(value);
    })
})

