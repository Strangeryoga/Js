// for each
// The forEach() method calls a function for each element in an array.
// The forEach() method is not executed for empty elements.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach


const coding = ['js', 'ruby', 'cpp', 'golang']

coding.forEach( function (e) {  // basic function
    // console.log(e);
})

coding.forEach((e) => {  // arrow function
    // console.log(e);
})

function pm(e){
    console.log(e);
}

// coding.forEach(pm)
// o/p
/* js
ruby
cpp
golang */

coding.forEach((e, index, arr) => {
    // console.log(e, index, arr);
})
// o/p
/* js 0 [ 'js', 'ruby', 'cpp', 'golang' ]
ruby 1 [ 'js', 'ruby', 'cpp', 'golang' ]
cpp 2 [ 'js', 'ruby', 'cpp', 'golang' ]
golang 3 [ 'js', 'ruby', 'cpp', 'golang' ] */


// Object inside Array
const language = [
    {
        language: 'Java',
        fileType: 'java'
    },
    {
        language: 'Python',
        fileType: 'py'
    },
    {
        language: 'C++',
        fileType: 'cpp'
    }
]

language.forEach(e => {
    // console.log(`Language is ${e.language} and its file type is ${e.fileType}`);
});
// o/p
/* Language is Java and its file type is java
Language is Python and its file type is py
Language is C++ and its file type is cpp */


// array inside object
var b = {
    maths:[12,23,45],
    physics:[12,23,45],
    chemistry:[12,23,45]
};

// console.log(b.maths); // [ 12, 23, 45 ]
// console.log(b["maths"]); // [ 12, 23, 45 ]
// console.log(b.maths[0]); // first array item // 12

Object.keys(b).forEach(key => {
    // console.log(key, b[key]);
})
// o/p
/* maths [ 12, 23, 45 ]
physics [ 12, 23, 45 ]
chemistry [ 12, 23, 45 ] */

Object.keys(b).forEach(key => {
    // console.log(key);
})
// o/p
/* maths
physics
chemistry */

Object.entries(b).forEach(entry => {
    const [key, value] = entry;
    console.log(key, value);
  });
  // o/p
  /* maths [ 12, 23, 45 ]
physics [ 12, 23, 45 ]
chemistry [ 12, 23, 45 ] */