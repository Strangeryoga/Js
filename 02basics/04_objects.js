// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "stranger",
            lastname: "yoga"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
// assign()
// Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

// spread operator
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// Returns the names of the enumerable string properties and methods of an object
// console.log(Object.keys(tinderUser));

// Returns an array of values of the enumerable properties of an object
// console.log(Object.values(tinderUser));

// Returns an array of key/values of the enumerable properties of an object
// console.log(Object.entries(tinderUser));

// Determines whether an object has a property with the specified name.
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "devops",
    price: "999",
    courseInstructor: "kunal"
}

// course.courseInstructor

const {courseInstructor} = course
// console.log(courseInstructor);  kunal

const {courseInstructor: instructor} = course
console.log(instructor); // kunal


// {} inside the () is the concept of destructring it will give the value which has passed
const navbar = ({company}) => {

}
navbar(company = 'hrx')

// this is json format
// {
//     "name": "kunal",
//     "coursename": "devops",
//     "price": "free"
// }

// sometimes we get data in array format
[
    {},
    {},
    {}
]

// https://randomuser.me/
// https://jsonformatter.org/



/* 1. What are  JavaScript Objects:

Think of objects as containers that hold information. 
These containers can store data in pairs: 
a name (key) and a value. 
Objects are like real-world things you want to describe or model in your code.

2. Creating Objects

To create an object, you use curly braces {}. 
Inside these braces, you put key-value pairs separated by colons. 
For example, you can create an object to describe a person

3. Accessing Object Properties

When you create an object in JavaScript, you can access its properties using dot notation or square bracket notation. 

Dot notation is commonly used and involves specifying the object's name, followed by a dot, and then the property's name.

You can also use square bracket notation to access object properties. It involves enclosing the property name in square brackets

4. Modifying Object Properties

Objects are not static; you can modify their properties after creation. 
To change a property's value, you simply assign a new value to it.

5. Adding and Deleting Properties

You can add new properties to an object or remove existing ones at any time. 

To add a new property, assign a value to a non-existing property name.

To delete a property, you can use the delete keyword.

6. Looping Through Object Properties

You can iterate through an object's properties using a for...in loop. 
This loop helps you access all properties of an object one by one.

7. Object Methods

In JavaScript, objects can contain functions as properties. These are known as methods. 
Methods allow objects to perform actions related to their purpose.

8. Object Constructor Function

In JavaScript, you can create objects using constructor functions. 
These functions act as templates for creating objects with specific structures.

9. Object Prototypes

Objects in JavaScript can share common properties and methods through prototypes. 
A prototype is like a blueprint for objects of a particular type. 
By defining properties and methods in a prototype, you make them available to all objects created from that constructor function.
*/
// https://pbs.twimg.com/media/F8ZJGhcbIAApela?format=jpg&name=large
// https://pbs.twimg.com/media/F8ZJGhaawAAo0mG?format=jpg&name=4096x4096
// https://pbs.twimg.com/media/F8ZJGhgaIAAbe8f?format=jpg&name=4096x4096