// map
/* map() creates a new array from calling a function for every array element.
map() does not execute the function for empty elements.
map() does not change the original array. */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map


const number = [1,2,3,4,5,6]

const newNum = number.map((e) => e+10);
// console.log(newNum); // [ 11, 12, 13, 14, 15, 16 ]

const newNum1 = number.map((e) => {return e+10});
// console.log(newNum); // [ 11, 12, 13, 14, 15, 16 ]


// Method Chaining in JavaScript
// https://www.geeksforgeeks.org/method-chaining-in-javascript/

const newNum2 = number
                .map((e) => e*10)
                .map((e) => e+1)
                .filter((e) => e>=30)

// console.log(newNum2); // [ 31, 41, 51, 61 ]
