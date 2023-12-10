let myName = "Vikash    "
console.log(myName.length)        // space bhi add krke value deta hai 
console.log(myName.trim().length) // extra spaces not read
console.log(myName.toUpperCase())  // upperCase 
// console.log(myName.trueLength())   // 



// ========================================================

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is  : ${this.spiderman}`)
        console.log(`Thor power is  : ${this.thor}`)

    }
}

heroPower.getSpiderPower()



// inheritance

const User = {
    name: "chai",
    email: "chai@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)