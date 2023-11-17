// Given a string, reverse each word in the sentence

var str ="hello world";

var stringArray=str.split(" ").map(function(e) {
   return e.split("").reverse().join("");
})

console.log(stringArray.join(" ")); // olleh dlrow