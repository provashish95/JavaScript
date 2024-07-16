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
 console.log(employee.skills.subject);
 console.log(employee['skills']['department']);
