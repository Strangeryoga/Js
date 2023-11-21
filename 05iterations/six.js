// for each didn't return anything

const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach((e) => {
    // console.log(e); // ["js", "ruby", "java", "python", "cpp"]
    return e;
})

// console.log(values); // undefined
//o/p
/* js
ruby
java
python
cpp
undefined */


// filter
/* The filter() method creates a new array filled with elements that pass a test provided by a function.
The filter() method does not execute the function for empty elements.
The filter() method does not change the original array. */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// filter will always return something

const mynumber = [1,2,3,4,5,6]

const Nums1 = mynumber.filter((e) => {
    return e>1;
})
// console.log(Nums1); // [ 2, 3, 4, 5, 6 ]

const Nums2 = mynumber.filter((e) => e>4)
// console.log(Nums2); // [ 5, 6 ]

const newNumber=[]

mynumber.forEach((e) => {
    if(e>2){
        newNumber.push(e)
    }
})
// console.log(newNumber); // [ 3, 4, 5, 6 ]


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter((e) => e.genre === 'History')
//   console.log(userBooks);
// o/p
/* [
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
] */

userBooks = books.filter((e) => {
    return e.publish >= 1995 && e.genre === 'History'
})

// console.log(userBooks);
// o/p
/* [
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  }
] */