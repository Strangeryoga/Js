// for in
// The JavaScript for in statement loops through the properties of an Object:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in


const myObj = { // object
    js: 'javaScript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'swift apple'
}


for (const key in myObj) {
    // console.log(`${key} know as ${myObj[key]}`);
}
// o/p
/* js know as javaScript
cpp know as C++
rb know as Ruby
swift know as swift apple */

const program = ['js','rb','py','java']  // array

for (const key in program) {
//    console.log(program[key]);
}
// o/p
/* js
rb
py
java */

 const map = new Map()
 map.set('IN', "India")
 map.set('USA', "United States of America")
 map.set('Fr', "France")
 map.set('IN', "India")

 

 for (const key in map) {
//   console.log(key); // no output    
 }