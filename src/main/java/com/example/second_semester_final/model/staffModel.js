export default class staffModel {
    constructor(staffId, staffFName, staffLName, gender, role, email, contact, address, dob, joinedDate, designation) {
        this._staffId = staffId;
        this._staffFName = staffFName;
        this._staffLName = staffLName;
        this._gender = gender;
        this._role = role;
        this._email = email;
        this._contact = contact;
        this._address = address;
        this._dob = dob;
        this._joinedDate = joinedDate;
        this._designation = designation;
    }

    get staffId() {
        return this._staffId;
    }

    set staffId(value) {
        this._staffId = value;
    }

    get staffFName() {
        return this._staffFName;
    }

    set staffFName(value) {
        this._staffFName = value;
    }

    get staffLName() {
        return this._staffLName;
    }

    set staffLName(value) {
        this._staffLName = value;
    }

    get gender() {
        return this._gender;
    }

    set gender(value) {
        this._gender = value;
    }

    get role() {
        return this._role;
    }

    set role(value) {
        this._role = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get contact() {
        return this._contact;
    }

    set contact(value) {
        this._contact = value;
    }

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }

    get dob() {
        return this._dob;
    }

    set dob(value) {
        this._dob = value;
    }

    get joinedDate() {
        return this._joinedDate;
    }

    set joinedDate(value) {
        this._joinedDate = value;
    }

    get designation() {
        return this._designation;
    }

    set designation(value) {
        this._designation = value;
    }
}