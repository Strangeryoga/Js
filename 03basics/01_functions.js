function sayMyName() {
    console.log("S");
    console.log("T");
    console.log("R");
    console.log("A");
    console.log("G");
    console.log("E");
}

//  sayMyName()
// here sayMyName is reference and () is execute

function addTwoNumbers(number1, number2) {  // <- values pass inside this () is parameters
    console.log(number1 + number2);
}
// addTwoNumber(3,7) // <- values pass inside this () is arguments

function addTwoNumber(number1, number2) {

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumber(4, 9)
// console.log("Result ", result);

function loginUserMsg(username = 'sam') {
    if (!username) {  // or username === undefined both are same
        console.log('Please enter a username');
        return
    }
    return `${username} just logged in`
}

loginUserMsg("hello") // <- this is not returning anything because we didn't tell the user to
// to print or we didn't store it in any variable to print it

// when we didn't give an check inside this function and also default values inside paramenter then
// we will get undefined
// console.log(loginUserMsg()); // undefined just logged in

// console.log(loginUserMsg()) // Please enter a username

// when the default is giving
// console.log(loginUserMsg()); // sam just logged in


function calculateCartPrice(num1) {
    return num1
}
// console.log(calculateCartPrice(1)); //1

function calculateCartPrice1(num1) {
    return num1
}
// console.log(calculateCartPrice1(3,4,5)); //3

// rest operator
function calculateCartPrice2(...num1) {
    return num1
}
// console.log(calculateCartPrice2(3,0,2,9,2)); //[ 3, 0, 2, 9, 2 ]

function calculateCartPrice3(val1, val2, ...num1) {
    return num1
}
// console.log(calculateCartPrice3(399,234,932,199)); //[ 932, 199 ]

const user = {
    username: "Stranger",
    price: 777
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user) //Username is Stranger and price is 777

// For Object
// handleObject({
//     username: "sam",
//     price: 323
// })
//Username is sam and price is 323

// For Array
const myNewArray = [200, 900, 300, 833]

function returnSecondValue(getArray) {
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray)); //300

// console.log(returnSecondValue([799,933,231,982])); //231



/* 1. What are Functions?

Functions are at the heart of JavaScript and programming in general.
They are reusable blocks of code that serve specific purposes or return values.
Functions are essential for structuring your code in an organized, modular, and efficient manner.
They allow you to break your code into smaller, manageable parts that can be used whenever needed.

2. Declaring Functions:

In JavaScript, you declare a function using the function keyword.
A function declaration typically includes:

- The "function" keyword.
- A function name that you choose (e.g., greet).
- A set of parentheses that can hold parameters (input values).
- A code block enclosed in curly braces {} that contains the instructions for what the function should do.

3. Calling Functions:

Once you've defined a function, you can call it to execute the code inside the function.
To call a function, simply use its name followed by parentheses.
If the function expects any arguments (parameters), you provide those within the parentheses.

4. Function Parameters:

Functions can receive parameters, which are like variables that hold values you pass into the function.
Parameters make functions versatile because you can pass different data to them when calling the function

5. Return Statements:

Functions can use the "return" statement to send a value back when they're called.
This value can be assigned to a variable or used directly

6. Function Expressions:

Functions can also be defined as expressions and assigned to variables.
These are known as function expressions.
Function expressions are useful when you need to pass functions as arguments to other functions or store them in data structures.

7. Arrow Functions:

Arrow functions provide a concise way to define functions, especially for simple, one-liner functions.
They are a shorthand for writing functions and are often used for anonymous functions.

8. Function Scope:

In JavaScript, variables declared inside a function are scoped to that function.
They are not accessible from outside the function, which is known as function scope.
This scoping behavior helps prevent variable name collisions and isolates variables within the context of the function.

9. Function Declarations vs. Function Expressions:

It's essential to understand the difference between function declarations and function expressions.

Function declarations are hoisted, meaning they are available throughout their scope, even before the declaration.

Function expressions, on the other hand, are not hoisted, and they can only be used after the point in code where they are defined.
*/
// https://pbs.twimg.com/media/F8T_zWsbIAA4sAA?format=jpg&name=large
// https://pbs.twimg.com/media/F8T_zWvbYAAwQev?format=jpg&name=large