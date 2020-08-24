"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dictionary = void 0;
class Dictionary {
    constructor() {
        this._items = new Map();
    }
    has(key) {
        return this._items.has(key);
    }
    set(key, value) {
        this._items.set(key, value);
    }
    delete(key) {
        return this._items.delete(key);
    }
    get(key) {
        return this._items.get(key);
    }
    get size() {
        return this._items.size;
    }
    keys() {
        return Array.from(this._items.keys());
    }
    values() {
        return Array.from(this._items.values());
    }
    clear() {
        this._items.clear();
    }
}
exports.Dictionary = Dictionary;
//# sourceMappingURL=dictionary.js.map