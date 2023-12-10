// ================Object literal============================

const user = {
    userName: "Lucky G",
    loginCount: 9,
    signedIn: true,

    getUserDetails: function () {
        // console.log("Got user details from database");
        // console.log(`USerName : ${userName}`);             // ReferenceError: userName is not defined
        console.log(`USerName : ${this.userName}`);
        console.log(this)                                      // all current contaics all data print 
    }
}

console.log(user.userName);
console.log(user.getUserDetails());
// console.log(this);
// ================End============================





// ================second============================

function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}

// const userOne = User("Devanshi", 12, true)
// const userTwo = User("Dev", 11, false)              // over ride value 
// console.log(userOne)

// 

const userOne = new User("Devanshi", 12, true)
const userTwo = new User("Dev", 11, false)              // Not over ride value 
console.log(userOne)
console.log(userTwo)

// ================practice third ============================


function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

const car1 = new Car('Eagle', 'Talon TSi', 1993);

console.log(car1);
console.log(car1.model);
  // Expected output: "Eagle"
