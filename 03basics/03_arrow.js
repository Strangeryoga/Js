// this refers to current context
const user = {
    username: "stranger",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this); //gives the value which is present inside user
    }

}


// user.welcomeMessage() //stranger, welcome to website
// user.username = "sam" 
// user.welcomeMessage() //sam, welcome to website

// console.log(this); //{} if we are in node we will be getting empty array
// But if we try to print this inside browser console we well be getting window objecte


// function chai(){
//     let username = "stranger"
//     console.log(this) // Object [global]
//     console.log(this.username); //undefined
// }
// chai()
// if we try to print this inside fnc we will be getting Object [global]


// const chai = function () {
//     let username = "stranger"
//     console.log(this); // Object [global]
//     console.log(this.username); //undefined
// }
// chai()


// arrow function
// const chai =  () => {
//     let username = "stranger"
//     console.log(this); // {}
//     console.log(this.username) //undefined
// }
// chai()

// aF
// explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// implicit return
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )
// If we wrap values inside currly braces then we have to write return
// But if wrap it inside parenthesis() then we don't have to write

// return object
const addTwo = (num1, num2) => ({username: "stranger"})
// console.log(addTwo(3, 4)) // {username: 'stranger'}


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()


/* 1. What is this keyword?

The "this" keyword in JavaScript is a special identifier that refers to the current execution context, specifically, the object that is currently executing the function.
It is not determined by the scope in which the function is declared but rather by how the function is called.

2. Key points about this and its relationship to scope:

- this and Scope: 
Unlike variables that are determined by lexical (static) scope, the value of this is not based on the function's position in the code. 
It depends on the dynamic context in which the function is invoked.

- Invocation Context: 
The value of this is determined by how a function is called. There are several ways to call a function in JavaScript, and each way affects the value of this.

3. Key aspects of the "this" keyword in more detail:

- Dynamic Binding: 
Unlike regular variables, the value of this is not determined by the lexical (static) scope where a function is defined. Instead, it's determined dynamically based on how the function is called at runtime.

- Invocation Context: 
The value of this is highly dependent on the context of the function's invocation. 
Different ways of calling functions in JavaScript yield different values for this.

- Global Context: 
In the global context (i.e., not within a function or object), this refers to the global object. 
In a web browser, this is typically the window object. In Node.js, it's the global object.

- Method Context: 
When a function is invoked as a method of an object, this refers to the object itself. 
This is particularly useful for object-oriented programming.

- Event Handlers: 
In event handlers, such as those used in web development, this typically refers to the DOM element that triggered the event.

- Constructor Functions: 
When a function is used as a constructor with the new keyword, this refers to the newly created instance.

- Arrow Functions: 
Arrow functions have a different behavior regarding this. They do not have their own "this" binding but instead capture the "this" value from the enclosing lexical (static) scope.
*/

// https://pbs.twimg.com/media/F9hUqKFbUAAJ9ez?format=jpg&name=900x900