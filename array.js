
var arrayName = new Array('rahim', 'karim', 'roy'); //old version of array declaration
var arrayNameOne = ['rahim', 'karim', 'roy']; //array declaration
arrayNameOne[1] = 'tonmoy'; //value assign 
var arrayLength = arrayNameOne.length; // array length
var arrayLength1 = arrayNameOne['length']; // array length another rules

for(var i = 0; i < arrayNameOne.length; i++){
    //console.log('name is: ' + arrayNameOne[i]);
}

arrayNameOne.push('Provashish'); //ADD value in the last 
arrayNameOne.pop(); //Remove value from the last
arrayNameOne.unshift('Shipan'); //ADD value in the first
arrayNameOne.shift(); //Remove value from the first

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

console.log(Array.isArray(person)); //check the varibel is array or not with Array.isArray() method.

console.log(person.join(" + "));
const jointArray = person.concat(arrayName); //add two array 
console.log(person.copyWithin(2,0));


const sortNumber = [40, 100, 2, 300, 20, 50]; 

let min = Infinity; //The value Infinity (positive infinity) is greater than any other number.
for(let i = 0; i < sortNumber.length; i++){ 
    if(sortNumber[i] < min){
        min = sortNumber[i];
    }
}
console.log("Hand wroted code & minimum value is: " + min);

//Method use here for finding lowest and heighst value from an array...
sortNumber.sort(
    function(a, b){
        return b - a; 
    }
)
/* 
how the function is work explain below here...
Rules: 1. Result is (-) sort a. 
       2. Result is (+) sort b. 
       3. Result is (0) sorting value unchanged.

1st iteratron: 
a - b = 40 - 100 = -60, sort a = 40
      = 40 - 2 = 38, sort b = 2
      = 2 - 300 = -298, sort a = 2
      = 2 - 20 = -18, sort a = 2
      = 2 - 50 = - 48, sort a = 2
so, array element 2, place the 0 index of array 
Now, Array will be [2, 40, 100, 300, 20, 50];
*/

console.log("Lowest value is: " + sortNumber[sortNumber.length-1]);
console.log("Heighst value is: " + sortNumber[0]);
console.log("Lowest value is: " + Math.min.apply(null, sortNumber));
console.log("Heighst value is: " + Math.max.apply(null, sortNumber));

//Sorting array object here...
const objectArray = [
    {type:"car1", year: 2012},
    {type:"car2", year: 2005},
    {type:"car3", year: 2020}
];

objectArray.sort(
    function(a, b){
        return a.year - b.year;
    }
);

for(let i = 0; i < objectArray.length; i++){
    console.log(objectArray[i].year);
}













