export class Stack<T> {
    private _count: number = 0;
    private _items: T[] = [];

    public push(value: T) {
        this._items[this._count] = value;
        this._count++;
    }

    public pop(): T {
        if (this._count === 0) {
            return null;
        }
        this._count--;
        let item = this._items[this._count];
        delete this._count[this._count];
        return item;
    }

    public peek(): T {
        return this._items[this._count - 1];
    }

    public size(): number {
        return this._count;
    }
}
