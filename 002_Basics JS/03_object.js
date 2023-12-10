// singleton
//Object.create

//object literals
const mySys = Symbol("key1")

const JsUser = {                //object literals
    name: "Vikash",
    age: 20,
    location: "Jaipur",
    [mySys]: "MyKey1",          //Using Symbol method this syntax
    // mySys: "Shukla",        // Using Symbol type  but string show
    email: "Lucky@gamil.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],

    "Full name": "Vikash Shukla"
}

// console.log(JsUser.email)        // not prefer 
// console.log(JsUser["email"])     // important syntax  all time prefer

// // console.log(JsUser.Full name)    // not access this method 
// console.log(JsUser["Full name"])


// console.log(JsUser[mySys])
// console.log(typeof JsUser[mySys])   // sysmbol use method 

// JsUser.email = "Vikash@gmail.com"

// console.log(JsUser["email"])    // emailId Change method  any value change this method 
// console.log(JsUser)

// Object.freeze(JsUser)           // freeze JsUser method  ab isme koi bhi value change nhi hoga 
// JsUser.email = "Luck@gmail.com"   // object freez ab nhi change ho payega koi bhi value 
// console.log(JsUser)


// ===================================Function=====================================================

JsUser.greeting = function () {
    console.log("Hello JS User");
}
JsUser.greetingTwo = function () {
    console.log(`Hello jS User.${this.email}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




