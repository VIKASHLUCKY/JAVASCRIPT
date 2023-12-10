//Globle Scope 

// let a = 10
// const b = 20
// var c = 30

// console.log(a)               //10
// console.log(b)               //20
// console.log(c)               //30

// ==================Block Scope======================================

if (true) {
    //Block Scope
    let a = 100
    const b = 200
    var c = 300
}

// console.log(a)          //ReferenceError: a is not defined
// console.log(b)          //ReferenceError: b is not defined
// console.log(c)          //300

// ==================02 Block Scope======================================

if (true) {
    //Block Scope
    let a = 100
    const b = 200
    var c = 300

    // console.log("Inner : ", b)
}


// =========================Function under function=================

function one() {
    const username = "Lucky"

    function two() {
        const website = "youtube"
        console.log(username)
    }

    // console.log(website)         //ReferenceError: website is not defined

    // two()                           //Lucky
}
one()

// ===========================================================================

if (true) {
    const username = "Lucky"
    if (username === "Lucky") {
        const website = "Youtube"
        // console.log(username + " " + website)           //output : Lucky Youtube
    }
    // console.log(website);               //ReferenceError: website is not defined
}
// console.log(username)                       //ReferenceError: username is not defined



// ==============================Itration===============================================

console.log(addone(5))
function addone(num) {
    return num + 1
}


// addTwo(5)
// console.log(addTwo(6))       //ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function (num) {
    return num + 2
}
// console.log(addTwo(6))              //ReferenceError: Cannot access 'addTwo' before initialization

