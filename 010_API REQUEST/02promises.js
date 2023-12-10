
// ---1--------------------------------------------------------------------

const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    //DB calls, cryptography , network

    setTimeout(function () {
        console.log('Async task is compelete !');
        resolve()
    }, 5000)                                        // Run hone ke bad 5 second bad output aayega 


})

promiseOne.then(function () {

    console.log("Promise Consumed !")
})

// --end---------------------------------------------------------------------


// --2---------------------------------------------------------------------

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2 ...");
        resolve()
    }, 8000)

}).then(function () {
    console.log("Async 2 resolve ..");
})

// -----End------------------------------------------------------------------

// ---3--------------------------------------------------------------------

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {

        resolve({ username: "Jaunpur", email: "Jaunpur@gmail.com", mob: "9120092205" })
    }, 10000)
})

promiseThree.then(function (user) {
    console.log(user);
})


// -----End------------------------------------------------------------------

// ----4-------------------------------------------------------------------

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // let error = true
        let error = false

        if (!error) {
            resolve({ username: "Lucky", password: "123" })    // true pe ye print hoga 
        } else {
            reject('Error : Something went wrong ..')           // false pe ye print hoga 
        }
    }, 11000)
})

promiseFour.then((hello) => {
    console.log(hello);
    return hello.username
})
    .then((username) => {
        console.log(username);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(() => console.log("Thee promise is either resolve or rejected !"))


// ---End--------------------------------------------------------------------

// ---5--------------------------------------------------------------------


const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true

        if (!error) {
            resolve({ username: "JavaScript", password: "123" })    // true pe ye print hoga 
        } else {
            reject('Error : JS went wrong ..')           // false pe ye print hoga 
        }
    }, 12000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)

    }
}

consumePromiseFive()

// -----------------------------------------------------------------------

// --6---------------------------------------------------------------------

// async function getAllUser() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch {
//         console.log("E :", error);
//     }
// }

// getAllUser()

// --End---------------------------------------------------------------------


// -------7----------------------------------------------------------------

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => console.log(error))




// ------End-----------------------------------------------------------------
