// ES6


class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword() {
        return `${this.password}abc`
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`             // username upper case 
    }

}

const jaunpur = new User("Coder", "JaunpurCoder@gmai.com", "123")
console.log(jaunpur.encryptPassword())
console.log(jaunpur.changeUsername())


// behind the scene

function Person(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}


Person.prototype.encryptPassword = function () {
    return `${this.password}abc`
}

const say = new Person("Man", "Man@.com", "456")
console.log(say)
console.log(say.encryptPassword())

