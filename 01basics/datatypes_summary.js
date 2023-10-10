// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score =100
const scoreValue =100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId)

const bigNumber = 893923892839909302n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// Js is dynamic type or static type
// Dynamic type
// https://developer.mozilla.org/en-US/docs/Glossary/Dynamic_typing
