// Primitive

// 7 Types :  String , Number , Boolean , null , undefined , Symbol,BigInt

const score = 100
const scoreValue = 100.33
const isLoggedIn = false
const outsideTemp = null     // null meens empty but typeof checking result object
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

const bigNumber = 333222569871248515n;

// Reference (Non Primitive)

// Array , Object , Functions

const Actors = ["Shaktiman", "Nagaarjun", "Vishva"];  //Array

// console.log(Actors)

let myObj = {                       // Object
    name: "Lucky Shukla",
    age: 25,
}

// console.log(myObj)

const myFunctions = function () {       // Functions
    console.log("Hello World !")
}

// myFunctions();

console.log(typeof myFunctions)
console.log(typeof myObj)
console.log(typeof Actors)


console.log(typeof anotherId)

console.log("id" === "anotherId")


// ===============================================================
console.log(" Stack (Primitive), Heap (Non-Primitive) ")
// Stack (Primitive), Heap (Non-Primitive)

// Stack (Primitive)    isme value ka ak copy ban jata hai 

let myYoutubename = "Jaunpur Coder"

let anotherYoutubename = myYoutubename
anotherYoutubename = "Jaunpur coding style"

console.log(anotherYoutubename);
console.log(myYoutubename);


// Heap (Non-Primitive)      ke ander jo value lete hai vo uska refrence milta hai 
console.log("Heap (Non-Primitive) ")
// ======================================================

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

console.log(userOne)

let userTwo = userOne

userOne.email = "user@google.com"
console.log(userTwo)
console.log(userOne)