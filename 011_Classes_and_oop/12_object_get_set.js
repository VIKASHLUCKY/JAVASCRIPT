const User = {
    _email: 'l@sona.in',
    _password: 'abc',

    get email() {
        return this._email.toUpperCase()
    },
    set email(value) {
        this._email = value
    }
}

const say = Object.create(User)
console.log(say.email);