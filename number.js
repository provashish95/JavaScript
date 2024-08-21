let x = "10";
let num = 20;
let notNumber = "I am provashish";
// console.log(isNaN(num));
// console.log(typeof(NaN));
let num1 = 2;
let num2 = 0;
// console.log(num1 / num2);

console.log(typeof (typeof (Infinity)));


//Javascript class...
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    run(status){
        console.log(`${this.name} is running on the road but status is: ${status}`);
    }
}
const car1 = new Car("Audi", 2012);
const car2 = new Car("BMW", 2015);
car1.run("Good");
car2.run("Bad");


//JSON Formate....

let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const myText = JSON.parse(text)
console.log(myText.employees[1].firstName);