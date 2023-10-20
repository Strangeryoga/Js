// array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy
// https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6) add values in the array
// myArr.push(7)
// myArr.pop() remove last value from the array

// myArr.unshift(9) add value in the start of the array
// myArr.shift()  remove first value in the array

// console.log(myArr.includes(9)); check the value is present in the array or not
// console.log(myArr.indexOf(3)); gives the index of the value

// const newArr = myArr.join() bind one array into another array and convert into string

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr); // A [ 0, 1, 2, 3, 4, 5]

const myn1 = myArr.slice(1, 3)
console.log(myn1); // [ 1, 2]
console.log("B ", myArr); // B [ 0, 1, 2, 3, 4, 5]


const myn2 = myArr.splice(1, 3)
console.log(myn2); // [ 1, 2, 3]
console.log("C ", myArr); // C [ 0, 4, 5]

// The main difference between slice and splice that in slice it will give
// the range except the last element and didn't manipulate the array but in splice it will removes
// the elements from the array