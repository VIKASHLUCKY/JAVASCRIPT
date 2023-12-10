
// falsy values  :
//  False , 0 , -0 ,BigInt On , "" ,null , undefined , NaN
// Trualy value  : 
// True  , "0" ,'false' , " ", [] , {} , function() {}


// true value .....

const userEmail = "Luck@gmail.com"

if (userEmail) {
    console.log(`Your Email Address : ${userEmail}`)      // Output  : Your Email Address : Luck@gmail.com
} else {
    console.log("Don't Have Email Address ....")
}


// false value Empty String.......

const userGmail = ""

if (userGmail) {
    console.log(`Your Email Address : ${userEmail}`)
} else {
    console.log("Don't Have Email Address ....")         // Output  :  Don't Have Email Address ....
}


// true value  Empty Array []   true value  .....

const Email = []

if (Email) {
    console.log(`Your Email Address : ${userEmail}`)      // Output  : Your Email Address : Luck@gmail.com
} else {
    console.log("Don't Have Email Address ....")
}


// length  property check

if (Email.length === 0) {
    console.log(`Array is empty , but true value`)
}

//   Object Empty Proerty

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Empty Object, but true value")
}


// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10               //  5
// val1 = null ?? 20            //  20
val1 = undefined ?? 15          //  15


console.log(val1)



// ====================Terniary Operator===========================

const iceTeaPrice = 500

iceTeaPrice <= 300 ? console.log("less than 300") : console.log("more than 300")

// ===============================================================




// *****************************************************





