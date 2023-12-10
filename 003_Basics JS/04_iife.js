// Immediately Invoke function expressions (IIFE)

// Normal function
(function sweet() {
    //named IIFE
    console.log(`DB Connected !`)
})();



//Arrow Function
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Vikash')