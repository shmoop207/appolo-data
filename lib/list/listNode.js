"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListNode = void 0;
class ListNode {
    constructor(item) {
        this._item = item;
    }
    get item() {
        return this._item;
    }
    set item(value) {
        this._item = value;
    }
    get next() {
        return this._next;
    }
    set next(value) {
        this._next = value;
    }
    get prev() {
        return this._prev;
    }
    set prev(value) {
        this._prev = value;
    }
}
exports.ListNode = ListNode;
//# sourceMappingURL=listNode.js.map