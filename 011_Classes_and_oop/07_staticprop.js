class User {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`Username : ${this.username}`);
    }

    static createId() {
        return `123`
    }
}
const lucky = new User("Vikash")
console.log(lucky.createId())