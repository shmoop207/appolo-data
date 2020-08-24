"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
class Stack {
    constructor() {
        this._count = 0;
        this._items = [];
    }
    push(value) {
        this._items[this._count] = value;
        this._count++;
    }
    pop() {
        if (this._count === 0) {
            return null;
        }
        this._count--;
        let item = this._items[this._count];
        delete this._count[this._count];
        return item;
    }
    peek() {
        return this._items[this._count - 1];
    }
    size() {
        return this._count;
    }
}
exports.Stack = Stack;
//# sourceMappingURL=stack.js.map