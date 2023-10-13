const name= "tejas"
const repoCount = 1

// console.log(name + repoCount + "Value");
// This doesn't match the current standard's

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('stranger_yoga')

// console.log(gameName[0]); s
// console.log(gameName.__proto__);  {}

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));