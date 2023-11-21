// for of
// The JavaScript for of statement loops through the values of an iterable object.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num); // 1 2 3 4 5
}

const welcome = "Hello World"
for (const w of welcome){
    // console.log(`char is ${w}`);
}
// o/p
/* char is H
char is e
char is l
char is l
char is o
char is  
char is W
char is o
char is r
char is l
char is d
*/

// Maps

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

const map = new Map()
map.set('IN', "India")
map.set('USA', "America")
map.set('FR', "France")
map.set('IN', "India")

// console.log(map); // Map(3) { 'IN' => 'India', 'USA' => 'Ameriac', 'FR' => 'France' }

for (const [key, value] of map) {
    // console.log(key, ':', value);
}
// o/p
/* IN : India
USA : Ameriac
FR : France
*/

const myObj = {
    'h1': 'Batman',
    'h2': 'Superman'
}

for ( const [key, value] of myObj){
    // console.log(key, ':', value); // TypeError: myObj is not iterable
}