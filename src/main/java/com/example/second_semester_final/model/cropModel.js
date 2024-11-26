export default class equipmentModel {
    constructor(cropCode, commonName, scientificName, image, category, season, field) {
        this._cropCode = cropCode;
        this._commonName = commonName;
        this._scientificName = scientificName;
        this._image = image;
        this._category = category;
        this._season = season;
        this._field = field;
    }

    get cropCode() {
        return this._cropCode;
    }

    set cropCode(value) {
        this._cropCode = value;
    }

    get commonName() {
        return this._commonName;
    }

    set commonName(value) {
        this._commonName = value;
    }

    get scientificName() {
        return this._scientificName;
    }

    set scientificName(value) {
        this._scientificName = value;
    }

    get image() {
        return this._image;
    }

    set image(value) {
        this._image = value;
    }

    get category() {
        return this._category;
    }

    set category(value) {
        this._category = value;
    }

    get season() {
        return this._season;
    }

    set season(value) {
        this._season = value;
    }

    get field() {
        return this._field;
    }

    set field(value) {
        this._field = value;
    }
}
