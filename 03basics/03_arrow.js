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