// Immediately Invoked Function Expressions (IIFE)
// To avoid the problems happened because of global scope pollution
// To remove the var,fnc which is declared in global scope 

(function chai(){
    // it is also called named IIFE
    console.log(`DB CONNECTED`); // DB CONNECTED
})();
// here if don't write ; we will be getting error (TypeError: (intermediate value)(...) is not a function)


( () => {
    console.log(`DB CONNECTED TWO`); // DB CONNECTED TWO
} )();


// arrow fnc inside iife
( (name) => {
    // It is called simple IIFE
    console.log(`DB CONNECTED THREE ${name}`); // DB CONNECTED THREE
} )('stranger');


// () here we write fnc definition
// () execution call