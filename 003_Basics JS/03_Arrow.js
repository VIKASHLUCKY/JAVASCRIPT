const user = {
    username: "Vikash",
    price: 599,

    welcomeMessage: function () {
        // console.log(`${this.username} , welcome to website`);       // this keyword current context ko refer krta hai
        // console.log(this)                                           // current context value show
    }
}

// user.welcomeMessage()           //Vikash , welcome to website
// user.username = "syam"
// user.welcomeMessage()           //syam , welcome to website
// console.log(this)               //{} empty


// ===========================================================================

const cofy = () => {
    let username = "suger"
    console.log(this)
}

cofy()

// =========================Arrow Function======Explicite return=======================================

const addTwo = (num1, num2) => {        // curly brases laganae pe return keyword nhi likhana pdta 
    return num1 + num2
}
console.log(addTwo(5, 6))


// =========================Arrow Function===========Implicite return==================================

const addition = (num1, num2) => num1 + num2
console.log(addTwo(5, 5))

// =========================Arrow Function===========Implicite return==================================

const add = (num1, num2) => (num1 + num2)   // parantheses  lagane pe return nhi llikhna pdta 
console.log(addTwo(12, 3))

