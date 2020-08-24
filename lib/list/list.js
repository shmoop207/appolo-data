"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
const listNode_1 = require("./listNode");
class List {
    constructor() {
        this._size = 0;
        this._head = null;
        this._tail = null;
    }
    get size() {
        return this._size;
    }
    get head() {
        return this._head ? this._head.item : null;
    }
    get tail() {
        return this._tail ? this._tail.item : null;
    }
    add(item) {
        this.addAt(this._size, item);
    }
    addAt(index, item) {
        let node = new listNode_1.ListNode(item), currentIndex = 0;
        if (this._head == null) {
            this._head = node;
        }
        if (this._tail == null) {
            this._tail = node;
        }
        let currentNode = this._head;
        while (currentNode.next && currentIndex < index) {
            currentIndex++;
            currentNode = currentNode.next;
        }
        this._size++;
        if (currentNode === node) {
            return;
        }
        node.next = currentNode.next;
        currentNode.next = node;
        node.prev = currentNode;
        if (this._tail === currentNode) {
            this._tail = node;
        }
    }
    remove(item) {
        let currentNode = this._head;
        while (currentNode.item !== item) {
            currentNode = currentNode.next;
        }
        if (!currentNode) {
            return;
        }
        this._removeNode(currentNode);
    }
    removeAt(index) {
        let node = this._itemAt(index);
        if (!node) {
            return;
        }
        this._removeNode(node);
    }
    _removeNode(node) {
        node.prev && (node.prev.next = node.next);
        node.next && (node.next.prev = node.prev);
        this._size--;
        if (this._head === node) {
            this._head = node.next;
        }
        if (this._tail === node) {
            this._tail = node.prev;
        }
    }
    isEmpty() {
        return this._size === 0;
    }
    _itemAt(index) {
        if (index > this._size) {
            return null;
        }
        let currentNode = this._head;
        let count = 0;
        while (count < index) {
            count++;
            currentNode = currentNode.next;
        }
        return currentNode || null;
    }
    itemAt(index) {
        let node = this._itemAt(index);
        return node ? node.item : null;
    }
    indexOf(item) {
        let currentNode = this._head;
        let index = 0;
        while (currentNode.item !== item) {
            currentNode = currentNode.next;
            index++;
        }
        return currentNode ? index : -1;
    }
}
exports.List = List;
//# sourceMappingURL=list.js.map