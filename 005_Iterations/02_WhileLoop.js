// While Loop

// Two table print

let index = 0;
while (index <= 20) {
    // console.log(`value of index is ${index}`);
    index = index + 2
}

// **************************************************************

let myArray = ["Batman", "Superman", "Flash", "Harsh"]

let arr = 0;
while (arr < myArray.length) {
    console.log(`value is ${myArray[arr]}`);
    arr = arr + 1
}

// *************************************************************

// DO While Loop

let score = 1           // condition true printing 10 times
// let score = 10       // condition false printing 1 times 
do {
    console.log(`score is ${score}`)
    score++
} while (score <= 10)