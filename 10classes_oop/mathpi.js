// 3.141593.....
const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);
/* 
o/p: {
    value: 3.14,
    writable: false,
    enumerable: false,
    configurable: false
     }
*/

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/* 
o/p: {
    value: 'ginger chai',
    writable: true,
    enumerable: true,
    configurable: true
     }
*/

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}
/*
o/p: 
name: ginger chai
price: 250
isAvailable: true
*/

// End