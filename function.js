function multi(a, b){
    return a * b;
}

let x = multi(10, 2); // output: 20; 
let y = multi; // output: Function 
let text = "The age of foysal is "+ multi(10, 5) + " in 2024"; // output: The age of foysal is 50 in 2024 

//Normal function here...
function myFunction(){
    let carName = 20; 
}
// myFunction(); // output: 20;

//Function variable here...
var FunctionName = function(){
    console.log("Hi I am provashish Roy");
}
// FunctionName(); // Hi I am provashish Roy;

//function pass as a argument here...
function callMyName(name, callback){
    let age = 20; 
    callback(age);
    console.log("My name is" + name);
}

function hello(age){
    console.log("My name is Provashish and my age is "+ age);
}
// callMyName("Provashish Roy", hello);




//function return a function here...
function returnFunction(name){
    console.log("My name is " + name);
    return function option (menu)
    {
        console.log("My name is " + name + "and my fevrite food is "+ menu);
    }
}

 returnFunction("Provashish") ("Tea"); 
// returnFunction("Provashish", "Tea");
// returnFunction ("Provashish");
// returnFunction ("Tea");