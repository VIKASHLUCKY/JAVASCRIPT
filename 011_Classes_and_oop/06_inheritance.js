class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME is : ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const jaunpur = new Teacher("Jaunpur", "Jaunpur@.com", "123456")
// console.log(jaunpur)
jaunpur.addCourse()
jaunpur.logMe()