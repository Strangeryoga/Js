// Write a Js function that checks whether a passed string is palindrome or not

function stringPal(str) {
    var rev = str.split("").reverse().join("");
    // if(rev === str) return true;
    // else return false;

    return rev === str;
}

console.log(stringPal("yoya"));