//Normal object here...
const persone = {
    name: "Provashish", 
    age : 28, 
    job : "IT", 
    Address: "Mirpur-1", 
    phone : "01766552407"
}; 

// delete persone.job; 
console.log(persone);

//empty object here...
const employee = {}; 
employee.name = "Provashish"; 
employee.age = 28; 
// console.log(employee.name);

//using new keyword for declare object..
const jobHolder = new Object(); 
jobHolder.name = "Provashish";
// console.log(jobHolder.name); 
// console.log(jobHolder['name']); 


//Object method 
const personeOne = {
    firstName : "Provashish", 
    lastName : "Roy",
    id: 27,
    fullName: function fullName(){
        return this.firstName + " "+ this.lastName + " and my ID is: " + this.id;
    } 
}
// console.log(personeOne.fullName());

const demoOne = {
    name: "Provashish", 
    age: 28
}
const x = demoOne; 
x.age = 30;
console.log(demoOne.age);