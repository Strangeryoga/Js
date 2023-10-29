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

 function addTwoNumbers(number1, number2){  // <- values pass inside this () is parameters
    console.log(number1 + number2);
}
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
// console.log(loginUserMsg()); // undefined just logged in

// console.log(loginUserMsg()) // Please enter a username

// when the default is giving
// console.log(loginUserMsg()); // sam just logged in


function calculateCartPrice(num1){
    return num1
}
// console.log(calculateCartPrice(1)); //1

function calculateCartPrice1(num1){
    return num1
}
// console.log(calculateCartPrice1(3,4,5)); //3

// rest operator
function calculateCartPrice2(...num1){
    return num1
}
// console.log(calculateCartPrice2(3,0,2,9,2)); //[ 3, 0, 2, 9, 2 ]

function calculateCartPrice3(val1,val2,...num1){
    return num1
}
// console.log(calculateCartPrice3(399,234,932,199)); //[ 932, 199 ]

const user = {
    username: "Stranger",
    price: 777
}

function handleObject(anyObject){
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
const myNewArray = [200,900,300,833]

function returnSecondValue(getArray){
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray)); //300

// console.log(returnSecondValue([799,933,231,982])); //231