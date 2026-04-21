class grandFather{
    stud_name = "Prasad Kadam"
   get()
    {
        console.log("Calling grandFather Class"); 
    }
}

class Father extends grandFather{
    get()
    {
        console.log("Calling Father Class"); 
    }
}


class Child extends Father{
    get()
    {
        console.log(this. stud_name);
        console.log("Calling Child Class"); 
    }
}

let childObj=new Child();
childObj.get()
