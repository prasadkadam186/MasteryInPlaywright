class BaseClass{
    baseUrl = "www.playwright.com";
    testCaseName = "Login Test";
    testCaseId = 1;
    status = "Pass"
    timeout = 3000
    showTestCaseDetails(){
        console.log(`
                Test Case ID : ${this.testCaseId},
                Test Case Name : ${this.testCaseName},
                Status : ${this.status}
            `);
    }
}
class Child extends BaseClass{
    showTestCaseDetails(){
        super.showTestCaseDetails() // Call the parent class method
         console.log(`
                Its Child class executing
                BaseUrl : ${this.baseUrl}
                Test Case ID : ${this.testCaseId},
                Test Case Name : ${this.testCaseName},
                Status : ${this.status},
                timeout : ${this.timeout}
            `);
    }
}
// Method Overriding : parent and child class having same method, so method call depend on the object creation
let obj1 = new BaseClass();
// obj1.showTestCaseDetails()
let obj2=new Child();
obj2.showTestCaseDetails()