// ******************************************************************

let score = 35
console.log(typeof score);
console.log(typeof (score));    // Output:  number

let mob = "91200"
console.log(typeof mob);        // Output:  string

let num = "952233"
let valueInNumber = Number(num)
console.log(typeof valueInNumber)       // Output:  number


let mobile = "952233ABC"
let valueInMobile = Number(mobile)
console.log(typeof valueInMobile)       // Output:  number
console.log(valueInMobile)               // Output:  NaN


//"33" => 33
//"33abc" => NaN
//true => 1; false => 0

// let isLoggedIn = "true"
// let isLoggedIn = ""
// let isLoggedIn = null
let isLoggedIn = undefined

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

// ***************************************************************************


// ========================= Operations =====================================

let value = 3
let negValue = -value
console.log(negValue);

console.log(555 + 999)
console.log("Addition  : ", 2 + 2);
console.log("Subtraction : ", 2 - 2);
console.log("Multiplication : ", 2 * 2);
console.log("Power : ", 2 ** 3);
console.log("Division : ", 2 / 3);
console.log("Module : ", 2 % 3);

// ***************************************************************

let str1 = "Vikash"
let str2 = "Shukla"

let str3 = str1 + str2;
console.log(str3);

// ***************************************************************

let fname = "Lucky"
let lname = "  Shukla"  // space 

let Name = fname + lname;
console.log(Name);

// ***************************************************************

console.log((3 * 4) * 5 + 1)

// ***************************************************************

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);

// ***************************************************************

