const persone = {
    name: "Provashish",
    age: 28, 
    address: "Mirpur"
}
const name = persone.name; 
const age = persone['age']; 
const x = persone.address; 
//console.log(x);

//nested object Here...
const employee = {
    name: "Provashish", 
    age : 20, 
    skills: {
        subject: "ICT", 
        department: "Programming" 
    }, 
    address: "Mirpur-01"
}
//  console.log(employee.skills.subject);
//  console.log(employee['skills']['department']);

//function in object here...
const personeTwo = {
    firstName: "Provashish", 
     lastName: "Roy", 
    id: 1110, 
    fullName: function (){
        return this.firstName + " "+ this.lastName + " and ID is " + this.id;
    }
}
//  console.log(personeTwo.fullName().toUpperCase());
// console.log(personeTwo.fullName);

//toUpperCase() method in object
var text = "My name is provashish roy"; 
// console.log(text.toUpperCase());

//displaying object by loop
for(const properties in personeTwo){
    console.log(`${properties} : ${personeTwo[properties]}`);
}