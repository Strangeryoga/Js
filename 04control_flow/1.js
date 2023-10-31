// if
const isUserloggedIn = true
const temperature = 41

// === strict equal/type equal (checks no as well as its datatype)
// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}


/* 
1. Introduction to Conditional Statements

Conditional statements in JavaScript allow you to make decisions in your code based on specific conditions. 
These statements are essential for controlling the flow of your program.

2. The if Statement

The if statement is the most fundamental type of conditional statement in JavaScript. 
It allows you to execute a block of code if a condition is true.

3. The else if Statement

The else if statement lets you test multiple conditions in sequence. 
If the first condition is not met, it checks the next one.

4. The else Statement

The else statement provides a default action when none of the previous conditions are met.

5. Nested Conditional Statements

You can nest (if, else if, and else ) statements inside one another to handle complex decision-making scenarios.

6. The Ternary Operator

The ternary operator 
(condition ? expression1: expression2) provides a concise way to perform simple conditional assignments.

7. Switch Statement

The switch statement is used for multi-way conditional branching based on a specific value.

8. Control Flow

Conditional statements control the flow of your program. Depending on the conditions met, the program takes different paths, executing specific blocks of code.
*/
// https://pbs.twimg.com/media/F8O528OasAAlfx0?format=jpg&name=4096x4096
// https://pbs.twimg.com/media/F8O529waEAAl467?format=jpg&name=4096x4096
// https://pbs.twimg.com/media/F8O52_RbUAAr0GY?format=jpg&name=large