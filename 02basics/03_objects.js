// singleton
// When we make an object using constructor is called singleton.

// Object.create
// way of declaring an object using constructor method through

// object literals
// way of declaring an object

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

const mySym = Symbol("key1")

const JsUser = {
    name: "Stranger",  
    "full name": "Stranger Yoga",  // the system will by default will process name as String
    [mySym]: "mykey1",
    age: 18,
    location: "mumbai",
    email: "stranger@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)  <- this is not right way
// console.log(JsUser["email"])  <- this one is correct way
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])  mykey1


JsUser.email = "openai@chatgpt.com"

// freeze()
// Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
// Object.freeze(JsUser)
JsUser.email = "openai@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
     console.log("Hello JS user"); 
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting()); // Hello JS user
console.log(JsUser.greetingTwo()); // Hello JS user, Stranger