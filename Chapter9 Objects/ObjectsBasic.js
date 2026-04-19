let dataObject={
    studentName: "Prasad Kadam",
    age : 26,
    subjects : ["Math", "Science", "Commerce"]
}
console.log(dataObject);
 let copyObject=dataObject;
 copyObject.studentName = "Dr. Prasad Kadam"
 console.log(copyObject);


//  Constant objects : 

const user={
    person : "Gauri",
    age : "20",
    gender : "Female"
}
console.log(user);
user.age=25;
user.timeout=1000; //To Add the new properties
user.isValid=true;
console.log(user);
delete user.isValid; //To delete the new properties
console.log(user);

let obj1={user:"Active"}
let obj2=obj1;
console.log(obj1);
console.log(obj2.user);

 