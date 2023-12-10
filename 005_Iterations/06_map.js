// Map Function 

const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// ---------------------------------------------------------
const newNumbers = myNumber.map((num) => num + 10)              //Output : [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// or
// const newNumbers = myNumber.map((num) => { return num * 2 }) //Output :  [2,  4,  6,  8, 10, 12, 14, 16, 18, 20]
// ---------------------------------------------------------

// const newNumbers = myNumber
//     .map((num) => { return num * 10 })     // Output : [10, 20, 30, 40,  50, 60, 70, 80, 90, 100]
//     .map((num) => { return num + 1 })     // Output  : [11, 21, 31, 41,  51, 61, 71, 81, 91, 101]
//     .filter((num) => { return num > 50 })  // Output : [ 51, 61, 71, 81, 91, 101 ]

// ----------------------------------------------------------



console.log(newNumbers);