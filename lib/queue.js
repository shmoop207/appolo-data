"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
class Queue {
    constructor() {
        this._items = [];
    }
    enqueue(element) {
        this._items.push(element);
    }
    dequeue() {
        return this._items.shift();
    }
    get first() {
        return this._items[0];
    }
    get last() {
        return this._items[this._items.length - 1];
    }
    get isEmpty() {
        return this._items.length === 0;
    }
    get size() {
        return this._items.length;
    }
    get items() {
        return this._items;
    }
}
exports.Queue = Queue;
//# sourceMappingURL=queue.js.map