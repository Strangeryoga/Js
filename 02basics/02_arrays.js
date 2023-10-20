const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) 

// console.log(marvel_heros); ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]
// console.log(marvel_heros[3][1]); flash

// Combines two or more arrays. This method returns a new array without modifying any existing arrays.
//  const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros); ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

// spread operator
// The spread operator is commonly used to make deep copies of JS objects. When we have nested arrays or nested data in an object, 
// the spread operator makes a deep copy of top-level data and a shallow copy of the nested data. Using this operator makes the code concise and enhances its readability.
// Ex. Take a glass and throw it. It will break into pieces
// Just like that spread oper will take an array and spread into individual elements
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros); ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// flat()
// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
/* [
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
] */


console.log(Array.isArray("Tejas")) // false

// from()
// Creates an array from an iterable object.
console.log(Array.from("Tejas")) // [ 'T', 'e', 'j', 'a', 's' ]
console.log(Array.from({name: "hitesh"})) // interesting 
// []

let score1 = 100
let score2 = 200
let score3 = 300

// of()
// Returns a new array from a set of elements.
console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]