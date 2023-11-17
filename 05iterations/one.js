// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}


/*
1. Introduction to Loops

Loops are fundamental in programming, allowing you to execute a block of code repeatedly.
They are essential for automating repetitive tasks and processing collections of data.

2. for Loop

The for loop is commonly used when you know the number of iterations you need.

3. while Loop

The while loop is useful when you want to continue looping as long as a condition is true.

4. do-while Loop

The do...while loop is similar to while, but it guarantees at least one execution of the code block.

5. Loop Control Statements

- break:
Used to exit a loop prematurely if a certain condition is met.

- continue:
Skips the current iteration and proceeds to the next iteration.

6. Infinite Loops

Beware of creating infinite loops accidentally, where the loop condition is never met, causing the program to run indefinitely.
Always ensure there's a way to exit the loop.

7. Loops are widely used in various scenarios, such as:

- Iterating through arrays or lists of data.
- Reading and processing files or input until specific conditions are met.
- Generating sequences of numbers or patterns.

https://pbs.twimg.com/media/F8O83qzbYAAogT8?format=jpg&name=medium
*/