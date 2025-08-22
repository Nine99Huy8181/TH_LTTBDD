"use strict";
class Box {
    constructor(value) {
        this.value = value;
    }
    ;
    get val() {
        return this.value;
    }
    set val(value) {
        this.value = value;
    }
}
const box = new Box('Huy');
console.log(box.val);
