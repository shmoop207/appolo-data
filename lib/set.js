"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetItems = void 0;
class SetItems {
    constructor() {
        this._items = new Set();
    }
    has(item) {
        return this._items.has(item);
    }
    keys() {
        return Array.from(this._items.keys());
    }
    add(value) {
        this._items.add(value);
    }
    delete(item) {
        return this._items.delete(item);
    }
    get size() {
        return this._items.size;
    }
    values() {
        return Array.from(this._items.values());
    }
    clear() {
        this._items.clear();
    }
    union(set) {
        let union = new SetItems();
        this.values().forEach(item => union.add(item));
        set.values().forEach(item => union.add(item));
        return union;
    }
    intersection(set) {
        let intersection = new SetItems();
        this.values().forEach(item => set.has(item) && intersection.add(item));
        return intersection;
    }
    difference(set) {
        let difference = new SetItems();
        this.values().forEach(item => !set.has(item) && difference.add(item));
        return difference;
    }
    subset(set) {
        return this.values().every(item => set.has(item));
    }
}
exports.SetItems = SetItems;
//# sourceMappingURL=set.js.map