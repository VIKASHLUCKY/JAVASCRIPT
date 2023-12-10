// Dates  ************************************************

let myDate = new Date()

console.log(myDate)                         // 2023-10-14T07:47:54.529Z
console.log(myDate.toString())              //Sat Oct 14 2023 13:17:54 GMT+0530 (India Standard Time)
console.log(myDate.toDateString())          //Sat Oct 14 2023
console.log(myDate.toLocaleString())        //10/14/2023, 1:17:54 PM
console.log(typeof myDate)                  //object

// *********************************************************

// let myCreatedDate = new Date(2023, 9, 14)
// let myCreatedDate = new Date(2023, 9, 14, 1, 22)
let myCreatedDate = new Date("10-14-2023")
console.log(myCreatedDate.toLocaleString())   //  10/14/2023, 12:00:00 AM


// ********************Time************************************

let myTimeStart = Date.now()
console.log(myTimeStart)
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now() / 1000))


let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())
// console.log(newDate.getFullYear)    // // [Function: getFullYear] This is Error  console.log(newDate.getFullYear()) this is right  
console.log(newDate.getFullYear())




