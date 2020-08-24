"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityQueue = void 0;
const queue_1 = require("./queue");
class PriorityQueue {
    constructor() {
        this._queue = new queue_1.Queue();
    }
    enqueue(item, priority = 0) {
        this._queue.enqueue({ item, priority });
        this._queue.items.sort((a, b) => b.priority - a.priority);
    }
    dequeue() {
        let result = this._queue.dequeue();
        return result ? result.item : null;
    }
    first() {
        let result = this._queue.first;
        return result ? result.item : null;
    }
    last() {
        let result = this._queue.last;
        return result ? result.item : null;
    }
    isEmpty() {
        return this._queue.size === 0;
    }
    size() {
        return this._queue.size;
    }
    items() {
        return this._queue.items.map(value => value.item);
    }
}
exports.PriorityQueue = PriorityQueue;
//# sourceMappingURL=priorityQueue.js.map