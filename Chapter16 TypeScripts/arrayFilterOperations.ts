let marks : number[]=[67,88,78,90,87,67];
let qualifiedStudents=marks.filter((marks)=>{
    return marks >=80;
})
console.log(qualifiedStudents);


type User ={
    personName : String,
    personAge : number,
    address : String
}

let studentData : User[] =[
    {personName : "Prasad",personAge : 26, address : "Pune"},
    {personName : "David",personAge : 60, address : "US"},
    {personName : "Steve",personAge : 30, address : "US"},
    {personName : "Vijay",personAge : 17, address : "Delhi"},
    {personName : "Nishant",personAge : 15, address : "Mumbai"},
];

let adultPerson  = studentData.filter((studentData)=>{
    return studentData.personAge >=18;
})

let foreginers = studentData.filter((studentData)=>{
    return studentData.address.toUpperCase() === "US" && studentData.personName ==="David";
})

console.log(adultPerson);
console.log(foreginers);

let updatedStudentData=studentData.map(studentData => studentData.personName.toUpperCase())

console.log(updatedStudentData);
