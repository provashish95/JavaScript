
var arrayName = new Array('rahim', 'karim', 'roy'); //old version of array declaration
var arrayNameOne = ['rahim', 'karim', 'roy']; //array declaration
arrayNameOne[1] = 'tonmoy'; //value assign 
var arrayLength = arrayNameOne.length; // array length
var arrayLength1 = arrayNameOne['length']; // array length another rules

for(var i = 0; i < arrayNameOne.length; i++){
    //console.log('name is: ' + arrayNameOne[i]);
}

arrayNameOne.push('Provashish'); //add value in the last 
arrayNameOne.pop(); //remove value from the last
arrayNameOne.unshift('Shipan'); //ADD value in the first
arrayNameOne.shift(); //remove value from the first

var number = [1,2,3,4,5,6,7,8,9,10,20,30,30];
console.log('Main array is:' + number);
var spilceArray = number.splice(0,5); //return new array 
console.log('Fisrt cutting array : '+ spilceArray);
console.log('After first cutiing Main array is:' + number);

var secondArray = [100,200,300,400,500,600,700,800,900,10000];
var numberTwo = number.concat(secondArray);
console.log('after adding value in the last: '+ numberTwo);

var spilceArrayOne = numberTwo.splice(5, 7); //return new array 
console.log('second cuttiny array is: ' + spilceArrayOne);
console.log('After second cutting main array is: ' + number);

console.log('break');

var classNumber = [1,2,3,4,56,7,8,910,20,30,40,50,50,60,70,80,0,80,90];
console.log(classNumber);
var spliceClassArray = classNumber.splice(4,20); //splice (index number, totall number of element)
console.log(spliceClassArray);

const person = ['provashish', 'roy', 'tonmoy', 'shipan', 'shuvo', 'sabbir']; 
console.log(person[person.length -1]);
console.log(person.forEach(myFunction));

for(let i = 0; i < person.length; i++){
    console.log("for loop in array: " + person[i]);
}

function myFunction(value){
console.log('Array in forEach function: ' + value);
}

person[person.length] = "Riya Roy";

console.log(Array.isArray(person)); // check the varibel is array or not with Array.isArray() method.

console.log(person.join(" + "));
const jointArray = person.concat(arrayName); // add two array 
console.log(person.copyWithin(2,0));


const sortNumber = [40, 100, 2, 300, 20, 50]; 

sortNumber.sort(
    function(a, b){
        return b - a; 
    }
)

console.log(sortNumber);