// const tinderUser = new Object()     // Singleton Object

const tinderUser = {}               // Non Singleton Object 
tinderUser.id = 123
tinderUser.name = "Vikash Shukla"
tinderUser.study = "MCA"
tinderUser.Job = "Private Sector"
tinderUser.isLogged = false

// console.log(tinderUser)


// ============================Object ke andar object==========================================

const regularUser = {                       //first object
    email: "Alok@gmail.com",
    fullname: {                             // second object               
        userName: {                         // third object
            firstName: "Ashok G",
            lastName: "Pree"
        }
    }
}

// console.log(regularUser.email)
// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userName)
// console.log(regularUser.fullname.userName.firstName)



// =========================Combine Object====================================================

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }
const obj4 = { 5: "c", 6: "d" }

// const obj3 = { obj1, obj2 }
// console.log(obj3)                //  output = { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj3 = Object.assign(obj1, obj2)
// console.log(obj3)                   // output  = { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3)                       //output ={ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'c', '6': 'd' }


// const all_obj = { ...obj1, ...obj2, ...obj4 }  // spride operator   90% use industrial in
// console.log(all_obj)                        //output :{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'c', '6': 'd' }


// console.log(Object.keys(tinderUser))              //[ 'id', 'name', 'study', 'Job', 'isLogged' ]
// console.log(Object.values(tinderUser))           //[ 123, 'Vikash Shukla', 'MCA', 'Private Sector', false ]
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))
