// Control Flow Statement  : < , > , <= , >= , == , != , === , !==

if (true) {
    // console.log("Hello Sir")
}

// =================================================

if (false) {
    // console.log("Hello Sir")
}

// =================================================

let akash = 9918121692

if (akash == 9918121692) {
    // console.log(`Hi Akash G , Your Mob Number ${akash} `)
} else {
    // console.log(`Not Found Your Mobile Number ... ${akash}`)
}

// ===================================================

const score = 200

if (score > 100) {
    const power = "fly"          //ReferenceError: power is not defined    Only Run In Scope 
    // let power = "fly"            //ReferenceError: power is not defined
    // var power = "fly"            // Globle Define  : User power : fly
    // console.log(`User power : ${power}`)
}
// console.log(`User power : ${power}`)            //ReferenceError: power is not defined

// ======================================================

const balance = 1000

// if (balance > 500) console.log("Yes"), console.log("S");   // Not Good Practise

if (balance < 500) {
    // console.log("less than 500 ")
} else if (balance < 850) {
    // console.log("less than 850 ")
} else if (balance < 950) {
    // console.log("less than 950 ")
} else {
    // console.log("less than 1200 ")

}


// ======================================================

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    // console.log("Allow to Debited Account ..")
}
// *********************************************************
if (userLoggedIn && debitCard && 2 == 2) {
    // console.log("Allow to Debited Account ..")
}

// ********************************************************

if (loggedInFromGoogle || loggedInFromEmail) {
    // console.log("Successfully Login Id .... ")
}
