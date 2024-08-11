//Normal object here...
const persone = {
    name: "Provashish", 
    age : 28, 
    job : "IT", 
    Address: "Mirpur-1", 
    phone : "01766552407"
}; 

// delete persone.job; 
//console.log(persone);

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

//replace object properties...
const demoOne = {
    name: "Provashish", 
    age: 28, 
    job: "IT"
}
const x = demoOne; 
x.age = 30;
console.log(demoOne.age);

//display object value by loop...
for(let properties in demoOne){
    console.log(demoOne[properties]);
}

//convert object as a array...
var obj = {
    name: "Provashish", 
    age: 20, 
    address: "Tangail", 
    NID: 2299
};
var result = Object.entries(obj);
console.log(result[0][1]);

//for in loop use for object only...
for(let key in obj){
    console.log(obj[key]);
}