const persone = {
    name: "Provashish", 
    age: 28, 
    job: "IT"
}
const objectArray = Object.values(persone); // give object array 
const myArray = Object.entries(persone);
const jsoneFormate = JSON.stringify(persone);

//showing object properties with value...
for(let [key, values] of myArray){
    //console.log(key + ": " + values);
}

//Object constructor... 
function Person(name, age, job)
{
    this.name =  name; 
    this.age =  age; 
    this.job =  job; 
    this.Address = "Mirpur-10" // default object property and value for all objects
}

const studentOne = new Person('Tonmoy', 28, 'IT'); // get an object of Tonmoy
const studentTwo = new Person('Provashish', 30, 'Executive'); 
const studentThree = new Person('Riya', 22, 'Graphics designer'); 
studentOne.Job = "Web developer"; //replace object value 
studentOne.Hobby = "Coding"; //replace object property and values

//N:B: You can NOT add a new property to an object constructor But To add a new property, you must add it to the constructor function prototype: Person.prototype.nationality = "Bangladeshi";

for(let [key, values] of Object.entries(studentOne)){
    console.log(key + ": " + values);
}
for(let [key, values] of Object.entries(studentTwo)){
    console.log(key + ": " + values);
}
for(let [key, values] of Object.entries(studentThree)){
    console.log(key + ": " + values);
}

// Object.fromEntries() method ...
const fruits = [
    ["apples", 300],
    ["pears", 900],
    ["bananas", 500]
  ];


const fruitsObj = Object.fromEntries(fruits); //make a list into object formate.
const entries = Object.entries(persone); //make an object into twi dimentional array.
const value = Object.values(persone); // make an object into one dimentional array.
const keys = Object.keys(persone); //return an array with all keys of an object.

//Object propeties method....
Object.defineProperty(persone, "passion", {value: "coding"});  //Adding a new Property
Object.defineProperty(persone, "age", {value: 300});  //Changing a Property Value
const names = Object.getOwnPropertyNames(persone); //List all Object Properties with Array
Object.defineProperty(persone, "age", {enumerable: false}); 
console.log(Object.keys(persone));
