class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }

    get password() {
        // return this._password.toUpperCase()
        return `${this._password}Luck`      //ARYA@9090Luck   confuse karne ke liye hai 
    }

    set password(value) {
        this._password = value.toUpperCase()
    }


    get email() {
        return `${this._email}`
    }

    set email(value) {
        this._email = value.toUpperCase()
    }
}

const lucky = new User("lucky@gmail@.com", "arya@9090")  //ARYA@9090 apna main password 
console.log(lucky.password)
console.log(lucky.email)