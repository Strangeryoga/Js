//{} scope
function abc(){ // function scope

}
// scope which is present outside the fnc is global scope

//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a); //10
    
}



// console.log(a); //300
// console.log(b);
// console.log(c);

// scope which is present inside browser console in different
// and inside the node env scope is different


// function which is present inside another function
// closures -> child fnc can access members of parent fnc but parent fnc
// cannot access the members of child fnc
function one(){
    const username = "stranger"

    function two(){
        const website = "youtube"
        console.log(username); // stranger
    }
    // console.log(website); //error

     two()

}

// one() // stranger


if (true) {
    const username = "stranger"
    if (username === "stranger") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); //error
}

// console.log(username); //error


// ++++++++++++++++++ interesting ++++++++++++++++++


//Hoisting
console.log(addone(5)) //6 
//if we return the fnc before then we didn't get any error
function addone(num){ //<-- this is function
    return num + 1
}



addTwo(5) //error 
//if we return the fnc before which is present inside a variable then we get an error
const addTwo = function(num){ //<-- this is expression/fnc
    return num + 2
}




/* 1. What is scope?

Scope in programming refers to the context in which variables and functions are defined and can be accessed.
It determines the visibility and lifespan of these identifiers. 

Understanding scope is crucial for writing bug-free and maintainable code.

2. Local Scope:

Local scope refers to the visibility of variables and functions within a specific block of code, typically within a function. 
In local scope, variables and functions are only accessible from within the block where they are defined. 
This isolation helps prevent naming conflicts and allows for encapsulation.

3. Global Scope: 

Global scope refers to the outermost scope of a program. 

Variables and functions defined in the global scope are accessible from any part of the code, including inside functions. 
While global variables are convenient, they can lead to unintended side effects and naming conflicts.

4. Why Scope Matters in JavaScript:

Scope is essential in JavaScript for several reasons:

- Variable Isolation: 
Local scope helps prevent variable name collisions and allows for the encapsulation of data within functions.

- Access Control: 
It defines where a variable or function can be accessed. This control is critical for managing the flow of data and preventing unintended modifications.

- Memory Management: 
Variables defined in local scope are automatically destroyed when the function exits, freeing up memory. 
This is not the case with global variables.

- Maintainability: 
Proper scope usage enhances code clarity and maintainability by limiting the reach of variables to where they are needed.

5. Block Scope (ES6 and Later):

Block scope was introduced in JavaScript with the let and const keywords. 
Variables declared with let or const have block scope, which means they are limited to the block in which they are defined. 
This is particularly useful within conditional statements and loops.

6. Variable Hoisting:

Variable hoisting is a JavaScript behavior where variable declarations are moved to the top of their containing function or global scope during execution. 
However, the initializations remain in place.

7. Common Scope Issues:

- Accidental Global Variables: 
Creating a variable without the var, let, or const keyword in a function can unintentionally create a global variable, leading to unexpected behavior.

- Variable Shadowing: 
When a variable in a local scope has the same name as a variable in an outer scope, it can lead to confusion. 
The inner variable "shadows" the outer one, making it inaccessible within the local scope.
*/
// https://pbs.twimg.com/media/F9MsSU_aIAARr5_?format=jpg&name=small