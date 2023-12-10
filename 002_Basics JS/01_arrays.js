// ****************** Array *******************

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Luck", "Say"]


console.log(myArr[0])           // index wise print   0
console.log(myArr[1])           // index wise print   1
console.log(myArr)              // total array show   [ 0, 1, 2, 3, 4, 5 ]

// const myArr2 = new Array(1, 2, 3, 4)

//Array Methods *******************************
// 1
myArr.push(6)           // Adding Any Value In  Array   [ 0, 1, 2, 3, 4, 5, 6 ]
console.log(myArr)

myArr.push(8)           // Adding Any Value In  Array   [ 0, 1, 2, 3, 4, 5, 6, 8]
console.log(myArr)

// 2
myArr.pop()             // Last value Remove in array  [ 0, 1, 2, 3, 4, 5, 6] 
console.log(myArr)

myArr.unshift(2)        // first index input value     [2 , 0, 1, 2, 3, 4, 5, 6] 
console.log(myArr)

myArr.shift()           //first index  value  remove   [2 , 0, 1, 2, 3, 4, 5, 6] 
console.log(myArr)

console.log(myArr.includes(9))     // searching in array this number s or no    false
console.log(myArr.includes(5))     // searching in array this number s or no    true
console.log(myArr.indexOf(2))     // searching in array this number index wise  Kis index pe kaun si value hai 


console.log(myArr)




// ***************slice / splice*******************************

console.log("A", myArr)       // A [0, 1, 2, 3, 4, 5, 6]
const myn1 = myArr.slice(1, 3) //[ 1, 2 ]
console.log(myn1)

console.log("B", myArr)        // B [0, 1, 2, 3, 4, 5, 6]
const myn2 = myArr.splice(1, 3) //[ 1, 2, 3 ]
console.log("C", myArr)
console.log(myn2)


