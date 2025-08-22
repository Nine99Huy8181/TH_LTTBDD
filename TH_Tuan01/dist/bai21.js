"use strict";
class Resposity {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return this.items;
    }
    getById(index) {
        return this.items[index];
    }
    remove(index) {
        this.items.splice(index, 1);
    }
}
