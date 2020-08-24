import {Queue} from "./queue";

export class PriorityQueue<T> {
    private _queue = new Queue<{ item: T, priority: number }>();


    public enqueue(item: T, priority: number = 0) {

        this._queue.enqueue({item, priority})

        this._queue.items.sort((a, b) => b.priority -  a.priority);
    }

    public dequeue(): T {
        let result = this._queue.dequeue();

        return result ? result.item : null
    }

    public first(): T {
        let result = this._queue.first;
        return result ? result.item : null
    }

    public last(): T {
        let result = this._queue.last;
        return result ? result.item : null
    }

    public isEmpty(): boolean {
        return this._queue.size === 0;
    }

    public size(): number {
        return this._queue.size;
    }

    public items(): T[] {
        return this._queue.items.map(value => value.item)
    }
}
