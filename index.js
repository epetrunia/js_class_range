'use strict';

class RangeValidator {
    constructor(from = 0, to = 0) {
        this._from = from;
        this._to = to;
    }

    set from(value) {
        if (typeof value !== 'number') {
            throw new TypeError('value must be a number')
        }

        this._from = value;
    }

    get from() {
        return this._from;
    }

    set to(value) {
        if (typeof value !== 'number') {
            throw new TypeError('value must be a number')
        }

        this._to = value;
    }

    get to() {
        return this._to;
    }

    get range() {
        const rangeArray = [];
        rangeArray.push(this._from, this._to);
        return rangeArray;
    }

    value(num) {
        if (typeof num !== 'number') {
            throw new TypeError('value must be a number')
        }

        return (num >= this._from && num <= this._to);
    }
}

const range1 = new RangeValidator(5, 10);
console.log(range1.range);