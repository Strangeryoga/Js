function sayMyName(){
    console.log("S");
    console.log("T");
    console.log("R");
    console.log("A");
    console.log("G");
    console.log("E");
}

//  sayMyName()
 // here sayMyName is reference and () is execute

 // function addTwoNumbers(number1, number2){  // <- values pass inside this () is parameters
//     console.log(number1 + number2);
// }

// addTwoNumber(3,7) // <- values pass inside this () is arguments

function addTwoNumber(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumber(4,9)
// console.log("Result ", result);

function loginUserMsg(username = 'sam'){
    if(!username){  // or username === undefined both are same
        console.log('Please enter a username');
        return
    }
    return `${username} just logged in`
}

loginUserMsg("hello") // <- this is not returning anything because we didn't tell the user to
// to print or we didn't store it in any variable to print it

// when we didn't give an check inside this function and also default values inside paramenter then
// we will get undefined
console.log(loginUserMsg()); // undefined just logged in

console.log(loginUserMsg()) // Please enter a username
