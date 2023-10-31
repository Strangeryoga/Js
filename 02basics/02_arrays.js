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



/* 1. What are Arrays?

An array is a structured collection of values, where each value is assigned a unique index. 
These values can be of any data type, including numbers, strings, objects, and even other arrays.

JavaScript arrays use zero-based indexing, meaning the first element is at index 0, the second at index 1, and so on. 

This indexing system is common in many programming languages.

2. How to create arrays:

Arrays can be created using square brackets []. 
You can initialize them with values, or they can be empty.

3. Accessing Array Elements:

Arrays use a zero-based index as mentioned earlier, meaning the first element is at index 0, the second at index 1, and so on. 
You access array elements by specifying their index inside square brackets.

4. Modifying Array Elements:
You can change the value of an array element by assigning a new value to a specific index.

5. Adding and Removing Array Elements

JavaScript provides methods to add and remove elements from arrays. 
The "push" method adds an element to the end, 
while the "pop" method removes the last element

You can also use "unshift" to add an element to the beginning and "shift" to remove the first element.

6. Array Length: 
You can find the number of elements in an array using the ''length'' property.

7. Looping Through Arrays:
 Loops like for and modern methods like forEach help you iterate through array elements efficiently.

8. Array Destructuring: 
This feature allows you to extract multiple elements from an array and assign them to separate variables.

9. Array Spread Operator: 
The spread operator (...) allows you to copy the contents of one array into another or spread elements in function arguments.

10. Array Manipulation: 
Methods like map, filter, and reduce are essential for transforming and processing array data.

11. Iterating with for...of: 
The for...of loop simplifies array iteration by directly providing the elements, rather than indices.

12. Types of Arrays:

- Static Arrays:
These are the most basic types of arrays.
They have a fixed length determined when the array is created.
You can't add or remove elements beyond the initial length.

- Dynamic Arrays:
Dynamic arrays are more flexible.
They can grow or shrink in size dynamically by adding or removing elements.
JavaScript arrays are typically dynamic.

- Sparse Arrays:
Sparse arrays are those with "holes" or undefined elements.
They don't have consecutive index values.
They are not commonly used but can be created intentionally.

- Typed Arrays:
Typed arrays are designed for working with binary data and have a fixed data type for their elements.
They are often used in scenarios like dealing with audio, video, or network data.

- Array-Like Objects:
Some objects in JavaScript, like the ''arguments'' object or the ''NodeList'' returned by ''querySelectorAll'' , resemble arrays but are not true arrays.
They have indexed properties, but they lack many array methods.

- 2D Arrays (Multidimensional Arrays):
These arrays are arrays of arrays, allowing you to represent data in a grid or table format.
They are useful for working with matrices or other two-dimensional data structures.

- Jagged Arrays:
Jagged arrays are arrays in which the sub-arrays (elements) can have different lengths.
They are often used in scenarios where data is irregular or doesn't conform to a strict grid structure.
*/
// https://pbs.twimg.com/media/F8eQ65LawAADNwt?format=jpg&name=large
// https://pbs.twimg.com/media/F8eOfVOasAAOt1m?format=jpg&name=large
// https://pbs.twimg.com/media/F8eOfddasAAYZJR?format=jpg&name=large
// https://pbs.twimg.com/media/F8eOpo_a8AAmlL3?format=jpg&name=4096x4096