// Write a js function that reverse a number

// first method
function reverse1(num) {
    return Number(num.toString().split("").reverse().join(""))
}

// second method
function reverse2(num) {
    var rev=0;
    while(num>0) {
        var rem = num%10;  // 4/3/2/1
        rev=rev*10+rem;  // 4/43/432/4321
        num = Math.floor(num/10);  // 123/12/1/0
    }
    return rev;
}

// console.log(reverse1(1234));
console.log(reverse2(1234));