function sayMyname() {
    console.log("V")
    console.log("I")
    console.log("K")
    console.log("A")
    console.log("S")
    console.log("H")
}

// sayMyname()

// =========================Add Tow Number=================================

function addTwoNumber(number1, number2) {
    console.log(number1 + number2)
    // console.log("Subtraction   :", number1 - number2)
    // console.log("Multipliction :", number1 * number2)
    // console.log("Division      :", number1 / number2)
}

// addTwoNumber(4, 3)
// addTwoNumber(4, "2")
// addTwoNumber(4, "a")
// const result = addTwoNumber(3, 4)
// console.log("Result  : ", result)      // Result  :  undefined


// =======================Second method ===========================================================

function addition(no1, no2) {
    let result = no1 + no2
    // console.log("Lucky Shukla..")   // return ke pahle work krta hai return ke bad work nhi krta hai  
    return result
    // console.log("Lucky Shukla..")   // return ke bad kuchh bhi work nhi krta 
}

// const result = addition(15, 10)
// console.log("Result : ", result)


// =========================Third Method short====================================================================

function add(num1, num2) {
    return num1 + num2
}

// const res = add(3, 2)
// console.log("Result : ", res)


// =======================================================================================

function loginUserMessage(username) {
    return `${username} Just logged in`
}
// loginUserMessage("Shukla G Happy ...")  //           not working

// console.log(loginUserMessage())  // working ....  output :undefined Just logged in
// console.log(loginUserMessage("Shukla G Happy..."))  // working .... output :Shukla G Happy... Just logged in


// ===================================================================

function login(user) {
    if (user === undefined) {                                    // or   if (!user)  perfect
        console.log("Please Enter The UserName In Parameter ..")
        return
    }
    return `${user} just logged in..`
}
// console.log(login())                        //undefined
// console.log(login("I M Happy .."))    


// ==============================================================================
function login(user = "Hello Vikash") {
    if (!user) {
        console.log("Please Enter The UserName In Parameter ..")
        return
    }
    return `${user} just logged in..`
}
// console.log(login())        

// ===========================Rest Operator======================================================

function calculateCartPrice(...num1) {
    return num1
}
// console.log(calculateCartPrice(100, 500, 123000))

// ======================================================================================

function calculateCartPrice(val1, val2, ...num1) {    // val1 = 100  / val2 = 500 me store ho gya hai and baki sb num1 me aa gya hai 
    return num1
}
// console.log(calculateCartPrice(100, 500, 1000, 2000, 123))

// ==================================================================================================

const user = {
    username: "Vikash",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user)     

// or

handleObject({
    username: "Akash",
    price: 188
})