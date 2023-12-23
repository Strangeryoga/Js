const accountId=1235
let accountEmail="tejas@322.com"
var accountPassword="8383"
accountCity="Mumbai"
let accountState;

// accountId=2 // not allowed

accountEmail="bcec@ghe.com"
accountPassword="8338"
accountCity="Chennai"

console.log(accountId);

/* Prefer to use var because of issue in block scope and fnc scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])



/* What are Variables?

Variables are fundamental in JavaScript; they act as containers for storing data values. 

In JavaScript, you can declare variables using three different keywords: ''var", ''let", and ''const". 
The choice between them depends on the scope and mutability of the variable.

- var: Variables declared with var are function-scoped and can be redeclared within the same scope. 
However, it's considered outdated and is rarely used in modern JavaScript. It adds itself to the window object.

- let: Introduced in ES6 (ECMAScript 2015), 
let allows you to declare block-scoped variables that can be reassigned. 
It's the preferred choice for most variable declarations.

- const: Variables declared with const are also block-scoped but cannot be reassigned once they are given a value. 
Use const for values that should not change.

* Variable Naming Rules

When naming variables in JavaScript, follow these rules:

• Variable names are case-sensitive (''myVariable" and ''myvariable" are different).

• They can include letters, digits, underscores, and the dollar sign.

• Variable names cannot start with a digit.

• Avoid using JavaScript-reserved keywords as variable names.

* Assigning and Reassigning Variables

JavaScript allows you to assign and reassign values to variables. 
The choice of “let ” or ''const" will determine whether a variable can be reassigned.
*/