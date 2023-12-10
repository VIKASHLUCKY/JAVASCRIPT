function SetUsername(username) {
    //complex DB calls
    this.username = username
}

function createUser(username, email, password) {
    // SetUsername(username)                // not working 
    SetUsername.call(this, username)        // annother object accept 

    this.email = email
    this.password = password
}

const jhinguriya = new createUser("jaunpur", "Jaunpur@.com", "123456")
console.log(jhinguriya)