export default class filedDateModel {
    constructor(filedCode, filedName, filedImage1, filedImage2, location, extent) {
        this._filedCode = filedCode;
        this._filedName = filedName;
        this._filedImage1 = filedImage1;
        this._filedImage2 = filedImage2;
        this._location = location;
        this._extent = extent;

    }

    get filedCode() {
        return this._filedCode;
    }

    set filedCode(value) {
        this._filedCode = value;
    }

    get filedName() {
        return this._filedName;
    }

    set filedName(value) {
        this._filedName = value;
    }

    get filedImage1() {
        return this._filedImage1;
    }

    set filedImage1(value) {
        this._filedImage1 = value;
    }

    get filedImage2() {
        return this._filedImage2;
    }

    set filedImage2(value) {
        this._filedImage2 = value;
    }

    get location() {
        return this._location;
    }

    set location(value) {
        this._location = value;
    }

    get extent() {
        return this._extent;
    }

    set extent(value) {
        this._extent = value;
    }
}
