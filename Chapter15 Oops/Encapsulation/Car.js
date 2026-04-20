class Car{
    // Attributes
    name;
    price
    #isAvailale

    // Constructors / Inilizers
    constructor(carName, amount, isAvailable){
        this.name=carName;
        this.price=amount; 
        this.isAvailable=isAvailable;
    }

    // Methods
    showDetails(){
        console.log(`Car Name => ${this.name} : Price => ${this.price} : Is Available => ${this.#isAvailale}`); //  Car Name => Punch : Price => 200000 : Is Available => undefined
    }
}

let obj1=new Car("Punch",200000,false);
obj1.showDetails()