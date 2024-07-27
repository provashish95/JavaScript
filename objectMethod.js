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