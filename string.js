let text = `Provashish Roy is a web developer and Provashish is a good boy`; 
let stringArray = "P,r,o,v,a,h";
let text2 = `Provashish Roy ${10 + 20}`; 
let longText = "Hi I am provashish and my passion \"programming\" and my home is \\ghior\\ "; 
let lengthOne = text.length;
let match = "The rain in SPAIN stays mainly in the plain and cats so what Cats and there cats";
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

//Search string methods here....
console.log(text.indexOf('web'));
console.log(text.lastIndexOf('web'));
console.log(text.search('web'));
console.log(match.match("ain"));
console.log(match.match(/ain/g)); //global search for a word
console.log(match.match(/ain/gi)); //global search for a word who don't care about case-sensative
const words = match.matchAll(/cats/gi);
console.log("Result: " + Array.from(words));
console.log(text.includes('web')); // if a word is present in the string so it return true otherwise return fase


//All string methods return a new string. They don't modify the original string.
//Strings are immutable: Strings cannot be changed, only replaced.
