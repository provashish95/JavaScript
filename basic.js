let x= 30;
let y = 20; 
// console.log(x+y);

function colorStyle(){
    document.getElementById('demo').style.color='red';
}

//concatenation in js
let text1 = "Provashish";
let text2 = "Roy"
let text = text1 + ' '+text2;
text1 += text2;

//adding number and string 
let sum = 5 + 5; 
let sum1 = "5" + 5; 
let string = "hello" + 5;

// console.log(sum);
// console.log(sum1);
// console.log(string);


//Problem solving one ...
const person = {
    name: 'Provashish Roy', 
    age: 28, 
    number: [1,2,3,4,5,6,7,8],
    sum: function(num1, num2){
        return num1 + num2; 
    }
}

// person.number[1] = 200;
person.zipcode = 1208;
const arr1 = person.number;

for(var i=0; i<arr1.length; i++){
    console.log('Item is: ' + arr1[i]);
}

console.log('Sum is: '+ person.sum(20,30));
console.log(person);


//Problem solving Two...
var array = [1,2,3,4,
    {
        name: 'Provashish',
        sum: function(num1, num2){
            return num1 * num2; 
        },
        ID: [10,20,30,
            {
                name: "Shipan", 
                age: 28, 
                div: function(){
                    return 100/ 10; 
                }
            }
        ]
    }
]

console.log(array[4].ID[3].div());
console.log(array[4].ID);


const personTwo = {
    name: "Shipan", 
    age: 29,
    ID: 1222, 
    NID: 122221
}; 
 for(Item in personTwo){
    console.log(personTwo[Item]); // get property as a string for checking typeof(Item)
 }


console.log(personTwo.name); // objectName['string']
                            // objectName.property

//console.log(personTwo);

const arrayTwo = [12, 3,45,6,67,7,88]; 
for(Items of arrayTwo){
    console.log(Items);
}

console.log('break');
for(var i=0; i<arrayTwo.length; i++){
    console.log(arrayTwo[i]);
}
console.log('break');

var n = 10;
console.log(n--); // 10 
console.log(++n); // 11 -- 10
console.log(n--); // 10
console.log(--n); // 9 -- 8
console.log(n++); // 8
console.log(n); // 9


// varibale --/++   varibale

// --/++ varibale 

const service = [12,234,345,46,6,7,777,777];
