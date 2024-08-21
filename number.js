let x = "10"; 
let num = 20;
let notNumber = "I am provashish";
// console.log(isNaN(num));
// console.log(typeof(NaN));
let num1 = 2; 
let num2 = 0; 
// console.log(num1 / num2);

console.log(typeof(typeof(Infinity)));


//Javascript class...

class Car {
    constructor(name, year){
        this.name = name; 
        this.year = year;
    }
}

const car1 = new Car("Audi", 2012); 
const car2 = new Car("BMW", 2015); 

console.log(car1.name , car2.name);