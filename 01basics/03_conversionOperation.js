let score= "tejas"

// console.log(typeof score); //string
// console.log(typeof(score)); //string

//https://www.w3schools.com/js/js_typeof.asp

let valueInNumber = Number(score)
//console.log(typeof valueInNumber); //number
//console.log(valueInNumber); //NaN

// "tejas" => NaN
// "33" ==>  33
// "883ae" =>  NaN
// null => 0
// undefined => NaN
// true => 1; false => 0


let isLoggedIn = "tejas"
let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn); //true

// 1 => true; 0 => false
// "" => false 
// "tejas" => true


let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber); //33
// console.log(typeof stringNumber); //string



// ************************* Operations *********************** //



let value=3
let negValue= -value
// console.log(negValue);

// console.log(2+2); 
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = "tejas"
let str3 = str1 + str2
// console.log(str3);

// console.log("1"+2); 12
// console.log(1+"2"); 12
// console.log("1" + 2 + 2); 122
// console.log(1 + 2 + "2"); 32

// console.log((3 + 4) * 5 % 3); 2

// console.log(+true); 1
// console.log(+false); 0
// console.log(+""); 0

let num1, num2, num3

// num1 = num2 = num3 = 2 + 2
// this is not proper 

let gameCounter = 100
++gameCounter
console.log(gameCounter);

// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion