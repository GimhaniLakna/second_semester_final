export default class MonitoringLogModel {
    constructor(logCode, logDate, logDetails, observedImage, crop, staff, field) {

        this._logCode = logCode;
        this._logDate = logDate;
        this._logDetails = logDetails;
        this._observedImage = observedImage;
        this._crop = crop;
        this._staff = staff;
        this._field = field;
    }

    get logCode() {
        return this._logCode;
    }

    set logCode(value) {
        this._logCode = value;
    }

    get logDate() {
        return this._logDate;
    }

    set logDate(value) {
        this._logDate = value;
    }

    get logDetails() {
        return this._logDetails;
    }

    set logDetails(value) {
        this._logDetails = value;
    }

    get observedImage() {
        return this._observedImage;
    }

    set observedImage(value) {
        this._observedImage = value;
    }

    get crop() {
        return this._crop;
    }

    set crop(value) {
        this._crop = value;
    }

    get staff() {
        return this._staff;
    }

    set staff(value) {
        this._staff = value;
    }

    get field() {
        return this._field;
    }

    set field(value) {
        this._field = value;
    }
}