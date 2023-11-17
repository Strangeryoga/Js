// How to check if an object is an array or not?

function checkArray(e){
   return Array.isArray(e)
}

console.log(checkArray([])); // true
console.log(checkArray({})); // false