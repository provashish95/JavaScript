//Normal function or function statement ...
function myFunction(num1, num2){
    return num1 * num2; 
}

//function in variable or function expression...
var name1 = function(num1, num2){
    return num1 * num2; 
}


//pass function as a argument in the function...
function callMyName(name, callback){
    var age = 28; 
    callback(age); 
    console.log("print in the function and name is: " + name);
}

function hello(age){
    console.log("out of the function and age is: " + age);
}
//callMyName("Provashish", hello);

//return function from the function ...

function welcome(name){
    console.log('Welcome mr. ' + name);
    return function (menu){
        console.log('My fevrite menu is '+ menu);
    }
}
//welcome('Provashish') ('Tea'); 



function changeValue(a){
    console.log('value of the inside function before changing: ' + a); 
    a = 10;
    console.log('Value of the inside function after changing: '+ a);
    return a; 
}
var a = 100;
console.log('Value of a before changing function is applied: ' + a); 
changeValue(a);
console.log('Value of a after changing function is applied: '+ a); 


function aFunction(a){
    console.log('Before changing value: ' + a.one);
    a.one = 'Two';
    console.log('after changing value: ' + a.one);
}
const obj ={
    one: 'one'
}
//aFunction(obj);

