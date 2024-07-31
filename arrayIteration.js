const numbers = [45, 4, 9, 16, 25];
//forEach() method...
function myFunction(value, index, array){
    console.log(value);
    console.log(index);
    console.log(array);
    console.log("-------");
}
numbers.forEach(myFunction);

//map() method...
function mapFunction(value){
   //console.log(value * 2);
   return value * 2; 
}
const newNumbers = numbers.map(mapFunction);
console.log(newNumbers);

//filter() method...
function filterfunction(value){
    return value > 10; 
}
const greaterThanTen = numbers.filter(filterfunction);
console.log(greaterThanTen);

//reduce() method...
function reduceFunction(total, value){
    console.log(total);
    return total + value;
}
const values = numbers.reduce(reduceFunction, 10);
console.log(values);

//every() method...
function everyFunction(value){
    return value > 18; 
}
const checkEveryValue = numbers.every(everyFunction);
console.log(checkEveryValue); //false cause every element in the array does not comply with the condition.

//find() method ...
function findFunction(value){
    return value > 18; 
}
const findValue = numbers.find(findFunction);
console.log(findValue);

//from() method...
console.log(Array.from("ABCDEF"));

//with() method...
const withArray = numbers.with(2, 200); // for updating any array element without altering main array
console.log(withArray);

//spread operator in array...
const fruits = ['mango', 'apple', 'jackfruit']; 
const season = ['summer', 'winter', 'fall']; 
const elements = ['home', 'food', 'education']; 
const spreadArray = [...fruits, ...season, ...elements]; 
console.log(spreadArray);


