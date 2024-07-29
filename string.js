let text = `   Provashish Roy is a web developer and Provashish is a good boy`; 
let stringArray = "P,r,o,v,a,h";
let text2 = `Provashish Roy ${10 + 20}`; 
let longText = "Hi I am provashish and my passion \"programming\" and my home is \\ghior\\ "; 
let lengthOne = text.length;
let y = "5";

console.log(text.length);
console.log(text.charAt(2));
console.log(text.charCodeAt(4));
console.log(text[3]);
console.log(text.slice(10, 14));
console.log(text.slice(-20, -10));
console.log(text.concat(" ", text2));
console.log((text.trim()).length);
console.log(y.padStart(4, 0));
console.log(y.padEnd(4, 0));
console.log(text.repeat(5));
console.log(text.replace(/provashish/i, 'Tonmoy'));
console.log(text.replace(/Provashish/g, 'Tonmoy'));
console.log(stringArray.split(" , "));


//All string methods return a new string. They don't modify the original string.
//Strings are immutable: Strings cannot be changed, only replaced.
