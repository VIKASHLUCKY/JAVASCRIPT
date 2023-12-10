const myNum = [1, 2, 3, 4, 5];

//Simple Function
// -------------------------------------------------------------
// const myTotal = myNum.reduce(function (acc, currVal) { return acc + currVal }, 0)        //  output : 15
// -------------------------------------------------------------

// const myTotal = myNum.reduce(function (acc, currVal) {
//     console.log(`acc : ${acc} And currVal : ${currVal}`);
//     return acc + currVal
// }, 0);                                                                               // Output : 15

// -Arrow Function------------------------------------------------------------

const myTotal = myNum.reduce((acc, curr) => { return acc + curr }, 0)


console.log(myTotal)

