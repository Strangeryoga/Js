// Write a Js fnc that return a passed string with letters in alphabetical order

function stringAlpha(str){
    return str.split("").sort().join("");
}

console.log(stringAlpha('apple'));