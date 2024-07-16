const persone = {
    name: "Provashish", 
    age: 28, 
    job: "IT"
}
const myArray = Object.entries(persone);
const jsoneFormate = JSON.stringify(persone);
console.log(jsoneFormate);