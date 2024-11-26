export default class userModel{
    constructor(userId,email,password,role) {

        this._userId = userId;
        this._email = email;
        this._password = password;
        this._role = role;

    }

    get userId() {
        return this._userId;
    }

    set userId(value) {
        this._userId = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }

    get role() {
        return this._role;
    }

    set role(value) {
        this._role = value;
    }
}