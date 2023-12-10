// 1               Numbers

// ================== Numbers ======================
console.log("============Numbers=================")
// ================== Numbers ======================

const score = 500
console.log(score)

// 2
const balance = new Number(400)
console.log(balance);                       //[Number: 400]

console.log(balance.toString().length)   //  counting length   3

console.log(balance.toFixed(2))         // fixed floating point your range    400.00   

// 3
const otherNumber = 25.8956
// console.log(otherNumber.toFixed(1))       //25.9
console.log(otherNumber.toPrecision(3))

// 4

const hundred = 1000000
console.log(hundred.toLocaleString())               //1,000,000
console.log(hundred.toLocaleString('en-IN'))        //10,00,000



// ================== Maths ======================
console.log("============Maths=================")
// ================== Maths ======================

console.log(Math)

console.log(Math.abs(-4));     // Negative  to postive values  4
console.log(Math.round(4.4))    //  rounding value print   4

console.log(Math.round(4.6))   // rounding 5
console.log(Math.ceil(4.2))    // rounding  upper 5
console.log(Math.floor(4.2))   // rounding Lower 4

console.log(Math.min(5, 6, 8, 7, 4, 1))  // minimum  value print   1
console.log(Math.max(5, 6, 8, 7, 4, 1))  // minimum  value print   8

console.log(Math.random())                  // 0.1   , 0.2 
console.log(Math.random() * 10 + 1)         // 1 to 9  1.0, 1.2 
console.log(Math.random() * 20 + 1)

console.log(Math.floor(Math.random() * 10) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)



