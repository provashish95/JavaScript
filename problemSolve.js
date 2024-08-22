//Ludo game from 1 to 6...
function getIntegerNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getIntegerNumber(1, 6));

//Print names by alphabetically... 
const names = ['tonmoy', 'provashish', 'riya', 'shipan', 'shuvo', 'gopal', 'sumit'];
const sortingNames = names.sort();
for (let name of sortingNames) {
    console.log(name);
}

//print numbers are minimum to maximum...
const numbers = [20, 10, 30, 4, 5, 6, 19, 2, 1, 90];
const sortingNumber = numbers.sort(myFunction);
function myFunction(a, b) {
    return a - b;
}
for (let number of sortingNumber) {
    console.log(number);
}

//Leap year find out ...
function isLeapYear(year) {
    if ((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))) {
        console.log(year + " is Leap Year");
    } else {
        console.log(year + " is not Leap Year");
    }
}
isLeapYear(2020);

//please find out how many vowels are present in a sentence...
const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function getTotalVowels(sentence) {
    let count = 0;
    const letters = Array.from(sentence);
    letters.forEach(function (value, index, array) {
        if (vowels.includes(value)) {
            count++;
        }
    });
    return count;
}
console.log(getTotalVowels('I love Bangladesh'));

//get duplicate number from an array...
const number = [1, 2, 3, 4, 5, 5, 5, 6, 7, 6, 8, 9, 9, 9, 1, 2];
const duplicate = number.filter(function (value, index, array) {
    return array.indexOf(value) !== index;
});
console.log(duplicate);

//Optional way to find out duplicate value from an array...
const test = [1, 2, 1, 2, 3, 7, 7, 2, 3, 3, 6];
let arr = [];
for (let i = 0; i < test.length; i++) {
    let isDuplicate = false;
    for (let j = i + 1; j < test.length; j++) {
        if (test[i] === test[j]) {
            isDuplicate = true;
            break;
        }
    }
    if (isDuplicate && !arr.includes(test[i])) {
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

//linear search ....
function linearSearch(arr, val) {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return "not found";
}
console.log(linearSearch(['a', 'b', 'c', 'd', 'e', 'f'], 'z'));

//find out longest word and longest words index number of an array...
function findLongestWord(arr) {
    let currentLongestWord = '';
    for (word of arr) {
        if (word.length > currentLongestWord.length) {
            currentLongestWord = word;
        }
    }
    return [currentLongestWord, arr.indexOf(currentLongestWord)];
}
console.log(findLongestWord(['provashish', 'tonmoy', 'niloy', 'provashish Roy', 'riya']));

//find out all number who is divided by 3 and 5 ....
function fizzBuzz(number) {
    for (let i = 0; i <= number; i++) {
        if (i % 15 === 0) {
            console.log(`${i} is FizzBuzz`);
        } else if (i % 3 === 0) {
            console.log(`${i} is Fizz`);
        } else if (i % 5 === 0) {
            console.log(`${i} is Buzz`);
        } else {
            console.log(i);
        }
    }
}
fizzBuzz(100);

//How to find falsy value from an array and how to remove it from array...
// In javaScript falsy value is: [Undefine, null, '', 0, NaN, false]
const mixedArray = [
    "Roy",
    undefined,
    "Provashish Roy",
    false,
    "",
    "apple",
    40,
    "k",
    true,
    "Welcome new code",
    NaN
];

const trueArray = mixedArray.filter(function (element) {
    if (element) {
        return true;
    } else {
        return false;
    }
});
const booleanTrueArray = mixedArray.filter(Boolean); // shortcut code, and here using Boolean function.
console.log(booleanTrueArray);

//How to find falsy value from an Object and how to remove it from Object...
const truthyValue = {
    a: "Roy",
    b: undefined,
    c: "Provashish Roy",
    d:  false,
    f: "",
    g: "apple",
    h: 40,
    k: "k",
    j: true,
    i: "Welcome new code",
    l: NaN
}
function truthyObj(obj){
    for( let i in obj){
        if(!obj[i]){
            delete obj[i]; 
        }
    }
    return obj;
}
console.log(truthyObj(truthyValue));
