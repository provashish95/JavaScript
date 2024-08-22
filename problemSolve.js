//Ludo game from 1 to 6...
function getIntegerNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}
console.log(getIntegerNumber(1,6));

//Print names by alphabetically... 
const names = ['tonmoy', 'provashish', 'riya', 'shipan', 'shuvo', 'gopal', 'sumit']; 
const sortingNames = names.sort();
for(let name of sortingNames){
    console.log(name);
}

//print numbers are minimum to maximum...
const numbers = [20, 10, 30, 4, 5, 6,19, 2, 1, 90];
const sortingNumber = numbers.sort(myFunction);
function myFunction (a, b){ 
    return a - b; 
}
for(let number of sortingNumber){
    console.log(number);
}

//Leap year find out ...
function isLeapYear(year){
    if((year % 400 === 0 ) || ((year % 4 === 0 ) && (year % 100 !== 0))){
        console.log(year + " is Leap Year");
    }else{
        console.log(year + " is not Leap Year");
    }
}
isLeapYear(2020);

//please find out how many vowels are present in a sentence...
const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E','I','O', 'U'];

function getTotalVowels(sentence){
    let count =0; 
    const letters = Array.from(sentence);
    letters.forEach(function(value, index, array){
        if(vowels.includes(value)){
            count++;
        }
    });
    return count;
}
console.log(getTotalVowels('I love Bangladesh'));

//get duplicate number from an array...
const number = [1,2,3,4,5,5,5,6,7,6,8,9,9,9,1,2]; 
const duplicate = number.filter(function(value, index, array){
 return array.indexOf(value) !== index;
});
console.log(duplicate);

//Optional way to find out duplicate value from an array...
const test = [1,2,1,2,3,7,7,2,3,3,6]; 
let arr = [];
for (let i = 0; i<test.length; i++){
    let isDuplicate = false;
    for(let j = i+1; j<test.length; j++){
       if(test[i] === test[j]){
        isDuplicate = true;
        break;
       }
    }
    if(isDuplicate && !arr.includes(test[i])) {
        arr.push(test[i]);
    }
}
console.log(arr);


//find out how many roy word in this sentence and what is the index of first roy word? ....
const text = "My name is provashish roy and roy is one of the best roy and think Roy"; 
let word = text.match(/Roy/gi);
let count = word ? word.length : 0; 
let indexNumber = text.search(/Roy/gi) >= 0 ? text.search(/Roy/gi) : "Not found"; 

console.log(`Total roy word is : ${count} and the index number of first roy word is: ${indexNumber}`);



