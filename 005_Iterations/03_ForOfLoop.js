//For Of Loop
// Basic Syntax of For Of Loop
// const num=[1,2,3,4,5]
// for (const iterator of object) {       // iterator Any Name meens variable / object =your data  num

// }

// *********************************************
const arr = [1, 2, 3, 4, 5, 6, 7]

for (const num of arr) {
    // console.log(num)
}

// *********************************************

const myArr = ["Mango", "Orange", "Banana"]

for (const frutes of myArr) {
    // console.log(`Frutes Name : ${frutes}`)
}

// ***********************************************

const greeting = "Hello World"

for (const greet of greeting) {
    // console.log(greet)
}

// ***Map*********************************************

const map = new Map()
map.set('IND', "India")
map.set('USA', 'United State of America')
map.set('Fr', 'France')
map.set('IND', 'India')                 // Dublicate not print in map
// console.log(map)

// Print Looping 

for (const [key, value] of map) {
    // console.log(key, ':-', value)
}


