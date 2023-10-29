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