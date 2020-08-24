export class Queue<T> {
    private _items: T[] = [];

    public enqueue(element: T) {
        this._items.push(element);
    }

    public dequeue(): T {
        return this._items.shift();
    }

    public get first(): T {
        return this._items[0];
    }

    public get last(): T {
        return this._items[this._items.length - 1];
    }

    public get isEmpty(): boolean {
        return this._items.length === 0;
    }

    public get size(): number {
        return this._items.length;
    }

    public get items(): T[] {
        return this._items
    }
}
