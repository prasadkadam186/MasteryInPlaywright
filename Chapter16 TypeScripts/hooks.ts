interface TestHook{
    (testName :string) :void;
}

let beforeEachHook : TestHook = function (testName :string):void{
    console.log(`Before Each hooked called`);
}

let afterEachHook : TestHook = function (testName :string) : void{
    console.log('After Each hook called..');
}

beforeEachHook("Login Test started")
console.log(`hujhjkkjjk`);
afterEachHook("After Hook Called")

