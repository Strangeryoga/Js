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

const {courseInstructor: instructor} = course

// console.log(courseInstructor);  error
console.log(instructor); // kunal

// {
//     "name": "kunal",
//     "coursename": "devops",
//     "price": "free"
// }

[
    {},
    {},
    {}
]