function sum(a, b){ // 10   10
    return a + b; //20
}
sum(10, 10); //20

// a function return a function here...
function changeValue(a){ // a = 100
    console.log("1st a is: " + a ); // 1st a is : 100 
    a = 10; 
    console.log("2nd a is : " + a); // 2nd a is : 10 

    return a; // 10 
}
var a = 100; // 100
// console.log("3rd a is : " + a); //3rd a is : 100
// changeValue(a)
// console.log("4rth a is : " + a);


//sent object as a argument here...
function aFunct(a){
    console.log("before changing value "+ a.one);// one
    a.one = 'three';
    console.log("After changing the value "+ a.one); //two
    return a.one; // two
}
 var a = {
    one: "one"
 }

aFunct(a); //two
console.log(aFunct(a));

//hi this is provashish Roy